import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars, Float, Image, Billboard } from '@react-three/drei';
import FloatingIcons from './FloatingIcons';
import heroImg from '../assets/hero.png';

const FloatingIsland = () => {
  return (
    <group position={[0, -1, 0]}>
      {/* Island Base */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[3, 2, 1, 6]} />
        <meshStandardMaterial color="#222" roughness={0.9} />
      </mesh>
      
      {/* Island Top (Grass/Circuit board) */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[3, 3, 0.1, 6]} />
        <meshStandardMaterial color="#00ff88" roughness={0.4} metalness={0.5} />
      </mesh>

      {/* Cyber Servers built from simple boxes */}
      <mesh position={[-1, 0.8, -0.5]}>
        <boxGeometry args={[0.8, 1.5, 0.8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} />
      </mesh>
      <mesh position={[1, 0.5, 0.8]}>
        <boxGeometry args={[0.8, 1, 0.6]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} />
      </mesh>
      
      {/* Glowing Cores/Data lines */}
      <mesh position={[-1, 0.8, -0.09]}>
        <boxGeometry args={[0.6, 1.2, 0.9]} />
        <meshStandardMaterial color="#00c466" emissive="#00ff88" emissiveIntensity={0.5} />
      </mesh>

      {/* Floating Hero Image (Creative integration) */}
      <Billboard position={[0, 3, 0]}>
        <Image url={heroImg} transparent={true} scale={[3, 3]} />
      </Billboard>
    </group>
  );
};

const Scene = () => {
  return (
    <div className="canvas-container interactive">
      <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Environment preset="city" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <FloatingIsland />
        </Float>

        <FloatingIcons />

        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default Scene;
