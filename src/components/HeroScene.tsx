"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Environment, Float, OrthographicCamera, useTexture } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function LiquidFashionMesh() {
  const materialRef = useRef<any>(null);
  
  // High-fashion cinematic abstract image
  const texture = useTexture("https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=1200");
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1.5, 1.5);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.distort = THREE.MathUtils.lerp(
        materialRef.current.distort,
        0.5 + Math.sin(state.clock.elapsedTime * 0.4) * 0.3,
        0.05
      );
      // slowly pan the texture to make it feel like a video
      texture.offset.x = state.clock.elapsedTime * 0.05;
      texture.offset.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh rotation={[-Math.PI / 4, 0, 0]} scale={5.5}>
        <planeGeometry args={[16, 16, 128, 128]} />
        <MeshDistortMaterial
          ref={materialRef}
          map={texture}
          color="#d4c8b2"
          envMapIntensity={1.5}
          clearcoat={0.3}
          metalness={0.4}
          roughness={0.6}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current && textRef.current) {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.1,
        y: 100,
        opacity: 0.2,
      });

      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 200,
        opacity: 0,
      });
    }
  }, []);

  const shayariWords = "لباس صرف پہنا نہیں جاتا، محسوس کیا جاتا ہے".split(" ");

  return (
    <section className="relative w-full h-screen overflow-hidden bg-transparent mt-[-10rem] md:mt-[-8rem]">
      
      {/* Background Cinematic Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none grayscale-[0.5] sepia-[0.4] opacity-30 mix-blend-multiply">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover blur-[2px] scale-105"
        >
          {/* Abstract light/street movement video placeholder */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-238-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 3D Liquid Canvas */}
      <div ref={containerRef} className="absolute inset-0 z-10">
        <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
          <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={90} />
          <ambientLight intensity={0.6} color="#e6dfd1" />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
          
          <Suspense fallback={null}>
            <LiquidFashionMesh />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      {/* Extreme Editorial Typography Overlay */}
      <div ref={textRef} className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none text-center px-6">
        
        {/* Urdu Poetic Hook */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(12px)", y: 15 }}
          animate={{ opacity: 0.8, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="font-urdu text-4xl md:text-5xl lg:text-5xl leading-loose mb-10 text-[#111111]"
          dir="rtl"
        >
          لباس صرف پہنا نہیں جاتا، محسوس کیا جاتا ہے
        </motion.div>

        {/* Ink Drip Separator */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
          className="w-16 h-[2px] bg-[#111111] mb-8 rounded-[50%]"
        />

        {/* English Brand Identity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 2 }}
        >
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-serif text-[#111111] tracking-tighter uppercase drop-shadow-md">
            Afforah
          </h1>
          <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-[#111111]/80 font-mono mt-4 font-bold">
            The South Asian Archive
          </p>
        </motion.div>
      </div>

      {/* Book Turn / Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 4 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 opacity-60"
      >
        <span className="text-[8px] uppercase tracking-[0.4em] text-[#111111] font-mono">Turn Page</span>
        <div className="w-[1px] h-16 bg-[#111111]/20 overflow-hidden relative">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "circInOut" }}
            className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#111111]/60 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
