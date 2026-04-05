import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';

const IconNode = ({ text, position, color, floatIntensity = 2 }) => {
  return (
    <Float
      speed={2} // Animation speed
      rotationIntensity={1.5} // XYZ rotation intensity
      floatIntensity={floatIntensity} // Up/down float intensity
      position={position}
    >
      <Text
        color={color}
        fontSize={0.6}
        maxWidth={2}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="left"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </Float>
  );
};

const FloatingIcons = () => {
  const groupRef = useRef();

  // Slow overall rotation for the whole group of floating icons
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <IconNode text="AWS" position={[-4, 2, -2]} color="#FF9900" />
      <IconNode text="Docker" position={[4, -1, 1]} color="#2496ED" floatIntensity={3} />
      <IconNode text="K8s" position={[-3, -2, 2]} color="#326CE5" floatIntensity={2.5} />
      <IconNode text="Terraform" position={[3, 3, -1]} color="#7B42BC" />
      <IconNode text="CI/CD" position={[0, 4, -3]} color="#00ff88" floatIntensity={1.5} />
      <IconNode text="Linux" position={[0, -3, -2]} color="#FCC624" floatIntensity={4} />
      <IconNode text="Security" position={[-5, 0, 1]} color="#ff3366" />
    </group>
  );
};

export default FloatingIcons;
