"use client";

import { use, useState, useRef, useEffect, Suspense } from "react";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { useCartStore } from "@/store/cart";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, MeshDistortMaterial, Environment, Float, OrthographicCamera } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

function ProductCloth3D({ image, size }: { image: string, size: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(image);
  texture.colorSpace = THREE.SRGBColorSpace;

  useEffect(() => {
    if (!meshRef.current) return;
    
    let targetScaleX = 2.5;
    let targetScaleY = 3.3;
    
    switch (size) {
      case "S":  targetScaleX = 2.1; targetScaleY = 2.9; break;
      case "M":  targetScaleX = 2.5; targetScaleY = 3.3; break;
      case "L":  targetScaleX = 2.9; targetScaleY = 3.7; break;
      case "XL": targetScaleX = 3.3; targetScaleY = 4.1; break;
    }

    gsap.to(meshRef.current.scale, {
      x: targetScaleX,
      y: targetScaleY,
      duration: 1.5,
      ease: "power3.out"
    });

    gsap.fromTo(meshRef.current.rotation,
      { y: -0.2, z: 0.1 },
      { y: 0.05, z: 0, duration: 2, ease: "power2.out" }
    );
  }, [size]);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={[2.5, 3.3, 1]} rotation={[0, 0.05, 0]}>
        <planeGeometry args={[1, 1, 64, 64]} />
        <MeshDistortMaterial 
          map={texture}
          distort={0.15} 
          speed={1.5}
          roughness={0.6}
          metalness={0.3}
          color="#d4c8b2" 
        />
      </mesh>
    </Float>
  );
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) notFound();

  const [selectedSize, setSelectedSize] = useState("M");
  const [adding, setAdding] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    setAdding(true);
    addItem({ ...product, quantity: 1 });
    setTimeout(() => setAdding(false), 2000);
  };

  const sizes = ["S", "M", "L", "XL"];

  return (
    <main className="min-h-screen bg-[#e6dfd1] text-[#111111] relative overflow-hidden flex flex-col pt-24 pb-12">
      
      {/* Background diary rules (lines) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]" 
           style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #111111 31px, #111111 32px)', backgroundPositionY: '60px' }} />

      <div className="container mx-auto px-6 lg:px-12 flex-1 flex flex-col lg:flex-row relative z-10 h-full max-w-7xl pt-12 gap-12 lg:gap-24">
        
        {/* LEFT COLUMN: 3D Pasted Photo Diary Effect */}
        <div className="w-full lg:w-1/2 relative min-h-[60vh] flex items-center justify-center">
          
          <Link href="/" className="absolute -top-12 left-0 z-20 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#111111]/60 hover:text-[#111111] transition-colors font-mono">
            <ArrowLeft className="w-4 h-4" /> Wapas
          </Link>

          {/* Physical Photo Frame for 3D Cloth */}
          <div className="relative w-[85%] aspect-[3/4] bg-[#f7f4ea] p-4 pb-20 shadow-2xl rotate-[-2deg] border border-[#111111]/20">
            {/* Fake masking tape pieces */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#d4c8b2]/70 backdrop-blur-sm -rotate-3 shadow-md z-30 mix-blend-multiply opacity-90 border border-[#b8a995]" />

            <div className="absolute inset-4 bottom-20 z-10 bg-[#2b2b2b]/5">
              <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
                <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={120} />
                <ambientLight intensity={0.5} color="#e6dfd1" />
                <directionalLight position={[5, 10, 5]} intensity={1.8} color="#b39b74" />
                <directionalLight position={[-5, -5, -5]} intensity={0.6} color="#111111" />
                <Suspense fallback={null}>
                  <ProductCloth3D image={product.image} size={selectedSize} />
                  <Environment preset="city" />
                </Suspense>
              </Canvas>
            </div>

            {/* Handwritten stamp on photo border */}
            <div className="absolute bottom-6 left-6 font-urdu text-2xl text-[#111111]/80 transform rotate-[1deg] mix-blend-multiply">
              دستخط: عفورا
            </div>
            <div className="absolute bottom-6 right-6 font-mono text-[10px] tracking-[0.3em] uppercase opacity-40">
              Ref. 00{product.id}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Handwritten Notes & Typography */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center relative py-12 lg:py-0">
          
          <motion.div
            initial={{ opacity: 0, x: 20, filter: "blur(5px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-[#111111]/50 block mb-4 border border-[#111111]/20 px-4 py-1 inline-block bg-[#e6dfd1]/50">
              {product.category}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-serif text-[#111111] leading-[0.9] tracking-tight mb-8">
              {product.name}
            </h1>

            <div className="text-2xl font-mono text-[#111111] font-bold tracking-wider mb-12 border-b-2 border-dashed border-[#111111]/30 pb-4 inline-block">
              PKR {product.price.toLocaleString()}
            </div>

            {/* Urdu Handwritten Note */}
            <div className="mb-12 relative">
              <div className="absolute -left-6 top-2 text-[#111111]/20 text-6xl font-serif">"</div>
              <p className="font-urdu text-3xl text-[#111111]/90 leading-loose max-w-sm drop-shadow-sm ink-reveal">
                {product.urduDesc}
              </p>
            </div>

            {/* Ink Stamp Sizing */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#111111]/60">
                  Select Measurement
                </span>
                <span className="text-[12px] font-urdu text-[#b39b74] transform -rotate-2">
                  لچک کا اندازہ کریں
                </span>
              </div>
              
              <div className="flex gap-4">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`relative w-14 h-14 flex items-center justify-center font-serif text-sm transition-all duration-300 overflow-hidden group border-2 ${
                      selectedSize === s
                        ? "text-[#e6dfd1] border-[#111111] bg-[#111111] rotate-[2deg] shadow-lg"
                        : "text-[#111111]/60 border-[#111111]/20 hover:border-[#111111]/50 rotate-[-1deg]"
                    }`}
                  >
                    <span className="relative z-10 leading-none">{s}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={adding}
              className="w-full flex items-center justify-center py-5 border border-[#111111] hover:bg-[#111111] hover:text-[#e6dfd1] transition-all duration-500 group relative overflow-hidden disabled:opacity-50 shadow-[4px_4px_0_#111111] hover:shadow-none hover:translate-y-1 hover:translate-x-1"
            >
              <span className="relative z-10 flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-mono font-bold">
                {adding ? (
                  <>Mahfooz kiya <Check className="w-4 h-4 ml-1" /></>
                ) : (
                  "Archive Item"
                )}
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
