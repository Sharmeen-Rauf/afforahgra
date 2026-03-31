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

function ProductCloth3D({ image, size }: { image: string; size: string }) {
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
    gsap.to(meshRef.current.scale, { x: targetScaleX, y: targetScaleY, duration: 1.5, ease: "power3.out" });
    gsap.fromTo(meshRef.current.rotation, { y: -0.2, z: 0.1 }, { y: 0.05, z: 0, duration: 2, ease: "power2.out" });
  }, [size]);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={[2.5, 3.3, 1]} rotation={[0, 0.05, 0]}>
        <planeGeometry args={[1, 1, 64, 64]} />
        <MeshDistortMaterial map={texture} distort={0.15} speed={1.5} roughness={0.6} metalness={0.3} color="var(--color-bg-alt)" />
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
    addItem(product);
    setTimeout(() => setAdding(false), 2000);
  };

  const sizes = ["S", "M", "L", "XL"];

  // Suggest related products
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] relative overflow-hidden flex flex-col pt-24 pb-12">
      {/* Diary ruled lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, currentColor 31px, currentColor 32px)', backgroundPositionY: '60px' }} />

      <div className="container mx-auto px-6 lg:px-12 flex-1 flex flex-col lg:flex-row relative z-10 h-full max-w-7xl pt-12 gap-12 lg:gap-24">
        {/* LEFT: 3D Photo Diary */}
        <div className="w-full lg:w-1/2 relative min-h-[60vh] flex items-center justify-center">
          <Link href="/" className="absolute -top-12 left-0 z-20 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[var(--color-text)]/50 hover:text-[var(--color-accent)] transition-colors font-mono">
            <ArrowLeft className="w-4 h-4" /> Wapas
          </Link>

          <div className="relative w-[85%] aspect-[3/4] bg-[var(--color-bg-alt)]/30 p-4 pb-20 shadow-2xl rotate-[-2deg] border border-[var(--color-text)]/15">
            {/* Tape */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-20 h-6 bg-[var(--color-accent)]/20 backdrop-blur-sm -rotate-3 shadow-md z-30" />

            <div className="absolute inset-4 bottom-20 z-10">
              <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
                <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={120} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 10, 5]} intensity={1.8} />
                <directionalLight position={[-5, -5, -5]} intensity={0.6} />
                <Suspense fallback={null}>
                  <ProductCloth3D image={product.image} size={selectedSize} />
                  <Environment preset="city" />
                </Suspense>
              </Canvas>
            </div>

            {/* Bottom signatures */}
            <div className="absolute bottom-6 left-6 font-urdu text-xl text-[var(--color-text)]/70 rotate-[1deg]">
              دستخط: عفورا
            </div>
            <div className="absolute bottom-6 right-6 font-mono text-[9px] tracking-[0.3em] uppercase text-[var(--color-text)]/30">
              Ref. 00{product.id}
            </div>
          </div>
        </div>

        {/* RIGHT: Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center relative py-12 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: 20, filter: "blur(5px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[9px] uppercase tracking-[0.4em] font-mono text-[var(--color-text)]/40 block mb-4 border border-[var(--color-text)]/15 px-4 py-1 inline-block">
              {product.category}
            </span>

            <h1 className="text-4xl md:text-6xl font-serif text-[var(--color-text)] leading-[0.9] tracking-tight mb-8">
              {product.name}
            </h1>

            <div className="text-2xl font-mono text-[var(--color-accent)] font-bold tracking-wider mb-12 border-b-2 border-dashed border-[var(--color-text)]/15 pb-4 inline-block">
              PKR {product.price.toLocaleString()}
            </div>

            {/* Urdu Description */}
            <div className="mb-12 relative">
              <div className="absolute -left-6 top-2 text-[var(--color-text)]/10 text-6xl font-serif">&ldquo;</div>
              <p className="font-urdu text-2xl md:text-3xl text-[var(--color-text)]/85 leading-loose max-w-sm" dir="rtl">
                {product.urduDesc}
              </p>
            </div>

            {/* Size Selection */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-4">
                <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/50">Select Measurement</span>
                <span className="text-sm font-urdu text-[var(--color-accent)] -rotate-2" dir="rtl">سائز منتخب کریں</span>
              </div>
              <div className="flex gap-4">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`relative w-14 h-14 flex items-center justify-center font-serif text-sm transition-all duration-300 border-2 ${
                      selectedSize === s
                        ? "text-[var(--color-bg)] border-[var(--color-text)] bg-[var(--color-text)] rotate-[2deg] shadow-lg"
                        : "text-[var(--color-text)]/50 border-[var(--color-text)]/15 hover:border-[var(--color-text)]/40 rotate-[-1deg]"
                    }`}
                  >
                    <span className="relative z-10">{s}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={adding}
              className="w-full flex items-center justify-center py-5 border border-[var(--color-text)]/20 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all duration-500 group relative overflow-hidden disabled:opacity-50 shadow-[4px_4px_0_var(--color-text)] hover:shadow-none hover:translate-y-1 hover:translate-x-1"
            >
              <span className="relative z-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-mono font-bold">
                {adding ? (
                  <>Mahfooz kiya <Check className="w-4 h-4 ml-1" /></>
                ) : (
                  "Archive This Piece"
                )}
              </span>
            </button>

            {/* Color swatches */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-[var(--color-text)]/30">Available Tones</span>
              <div className="flex gap-2">
                {product.colors.map((color, i) => (
                  <div key={i} className="w-5 h-5 rounded-full border border-[var(--color-text)]/15" style={{ backgroundColor: color }} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="container mx-auto max-w-7xl px-6 lg:px-12 mt-24 relative z-10">
          <div className="border-t border-[var(--color-text)]/10 pt-16">
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="text-[9px] uppercase tracking-[0.4em] font-mono text-[var(--color-text)]/30 block mb-2">From the same chapter</span>
                <h2 className="text-2xl md:text-3xl font-serif text-[var(--color-text)]">You May Also Cherish</h2>
              </div>
              <p className="font-urdu text-lg text-[var(--color-accent)]/60 hidden md:block" dir="rtl">مزید دیکھیں</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 1 }}
                >
                  <Link href={`/product/${p.id}`} className="group block">
                    <div className="aspect-[3/4] overflow-hidden border border-[var(--color-text)]/8 mb-4 relative">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 sepia-[0.2]" />
                      <div className="absolute inset-0 bg-[var(--color-bg)]/10 mix-blend-multiply" />
                    </div>
                    <h3 className="font-serif text-base text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-[10px] font-mono text-[var(--color-accent)] mt-1">
                      PKR {p.price.toLocaleString()}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
