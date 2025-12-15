"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Particles({ count = 20 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = new THREE.Object3D();

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    
    for (let i = 0; i < count; i++) {
        const t = time * 0.1 + i * 100;
        const factor = i / count;
        const x = Math.sin(t + factor * Math.PI * 2) * 5 + Math.cos(t * 0.5) * 2;
        const y = Math.cos(t + factor * Math.PI) * 5 + Math.sin(t * 0.3) * 2;
        const z = (i / count) * 20 - 10 + Math.sin(t) * 2;
        
        dummy.position.set(x, y, z);
        dummy.rotation.set(time * 0.2 + i, time * 0.1 + i, 0);
        const scale = Math.cos(t + i) * 0.2 + 0.3;
        dummy.scale.set(scale, scale, scale);
        
        dummy.updateMatrix();
        mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#e0e7ff" roughness={0.4} metalness={0.5} transparent opacity={0.6} />
    </instancedMesh>
  );
}

function FloatingShapes() {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group position={[3, 0, -2]}>
                <mesh>
                    <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                    <meshStandardMaterial color="#c7d2fe" roughness={0.2} metalness={0.5} transparent opacity={0.6} />
                </mesh>
            </group>
             <group position={[-3, 2, -5]}>
                <mesh>
                    <octahedronGeometry args={[1.5]} />
                    <meshStandardMaterial color="#bfdbfe" roughness={0.2} metalness={0.5} transparent opacity={0.6} />
                </mesh>
            </group>
        </Float>
    )
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[-10, -10, -5]} color="#fae8ff" intensity={2} />
        <group>
             <Particles count={20} />
             <FloatingShapes />
        </group>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
