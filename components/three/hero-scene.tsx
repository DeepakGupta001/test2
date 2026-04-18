"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function WireCore() {
  const outer = useRef<Mesh>(null);
  const inner = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (outer.current) outer.current.rotation.y += delta * 0.22;
    if (outer.current) outer.current.rotation.x += delta * 0.05;
    if (inner.current) inner.current.rotation.y -= delta * 0.35;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.45}>
      <group>
        <mesh ref={outer}>
          <icosahedronGeometry args={[1.55, 1]} />
          <meshStandardMaterial
            color="#18181b"
            wireframe
            emissive="#c8ff4d"
            emissiveIntensity={0.08}
            metalness={0.2}
            roughness={0.85}
          />
        </mesh>
        <mesh ref={inner} scale={0.62}>
          <octahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial
            color="#c8ff4d"
            wireframe
            emissive="#c8ff4d"
            emissiveIntensity={0.35}
            transparent
            opacity={0.35}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="h-full w-full"
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 2, 3]} intensity={1.1} />
      <directionalLight position={[-3, -1, -2]} intensity={0.35} color="#c8ff4d" />
      <WireCore />
    </Canvas>
  );
}
