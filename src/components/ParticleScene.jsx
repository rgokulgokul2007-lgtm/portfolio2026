import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Detect WebGL capability safely
function checkWebGLSupport() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

// Procedural Microchip component
function Microchip({ initialPos, initialRot, scale = 1, speed = 1 }) {
  const meshRef = useRef();
  const wireRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime() * speed;
    meshRef.current.position.y = initialPos[1] + Math.sin(t + initialPos[0]) * 0.25;
    meshRef.current.rotation.x = initialRot[0] + Math.sin(t * 0.5) * 0.15;
    meshRef.current.rotation.y += 0.003 * speed;
    meshRef.current.rotation.z = initialRot[2] + Math.cos(t * 0.4) * 0.1;
  });

  return (
    <group ref={meshRef} position={initialPos} rotation={initialRot} scale={scale}>
      {/* Chip Main Silicon Die */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.4, 0.12, 1.4]} />
        <meshStandardMaterial
          color="#111722"
          roughness={0.25}
          metalness={0.85}
        />
      </mesh>

      {/* Core Processor Die / Heatspreader */}
      <mesh position={[0, 0.07, 0]}>
        <boxGeometry args={[0.85, 0.04, 0.85]} />
        <meshStandardMaterial
          color="#0B0F16"
          roughness={0.15}
          metalness={0.9}
        />
      </mesh>

      {/* Cyan Core Indicator / Circuit Track */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.3, 0.02, 0.3]} />
        <meshBasicMaterial color="#00D9FF" />
      </mesh>

      {/* Microchip Wireframe Outer Halo */}
      <mesh ref={wireRef}>
        <boxGeometry args={[1.42, 0.13, 1.42]} />
        <meshBasicMaterial
          color="#00D9FF"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Gold/Copper Contact Pins along edges */}
      {[-0.5, -0.25, 0, 0.25, 0.5].map((offset, i) => (
        <group key={i}>
          {/* Left Pins */}
          <mesh position={[-0.78, 0, offset]}>
            <boxGeometry args={[0.16, 0.04, 0.08]} />
            <meshStandardMaterial color="#80E5FF" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Right Pins */}
          <mesh position={[0.78, 0, offset]}>
            <boxGeometry args={[0.16, 0.04, 0.08]} />
            <meshStandardMaterial color="#80E5FF" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Floating Geometric Wireframe Polyhedron
function FloatingPolyhedron({ position, size = 1, speed = 0.5 }) {
  const polyRef = useRef();

  useFrame((state) => {
    if (!polyRef.current) return;
    const t = state.clock.getElapsedTime() * speed;
    polyRef.current.rotation.x = t * 0.2;
    polyRef.current.rotation.y = t * 0.35;
    polyRef.current.position.y = position[1] + Math.sin(t) * 0.3;
  });

  return (
    <group ref={polyRef} position={position}>
      <mesh>
        <octahedronGeometry args={[size, 0]} />
        <meshBasicMaterial
          color="#00D9FF"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
      <mesh scale={0.4}>
        <octahedronGeometry args={[size, 0]} />
        <meshBasicMaterial
          color="#80E5FF"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}

// Particle Field with subtle drift
function ParticleField({ count = 350 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cyanColor = new THREE.Color('#00D9FF');
    const iceColor = new THREE.Color('#80E5FF');
    const darkColor = new THREE.Color('#1F2E45');

    for (let i = 0; i < count; i++) {
      // Spread across 3D space
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 14 - 2;

      // Color distribution: mostly subtle cyan/ice with deep navy
      const rand = Math.random();
      const chosenColor = rand > 0.6 ? cyanColor : rand > 0.3 ? iceColor : darkColor;

      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.y = t * 0.4;
    pointsRef.current.rotation.x = Math.sin(t * 0.5) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

// Interactive Scene Controller (Camera Rig)
function SceneContent({ isMobile, prefersReducedMotion }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (prefersReducedMotion || !groupRef.current) return;
    // Gentle mouse parallax tilt
    const { x, y } = state.pointer;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.1, 0.04);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.1, 0.04);
  });

  // Microchips positions in zero-g field
  const chipConfigs = useMemo(() => [
    { pos: [-4.5, 2.2, -3], rot: [0.3, 0.4, 0.2], scale: 0.9, speed: 0.7 },
    { pos: [5.2, -1.8, -4], rot: [-0.4, 0.8, -0.3], scale: 1.1, speed: 0.6 },
    { pos: [-3.8, -2.6, -2], rot: [0.2, -0.5, 0.4], scale: 0.75, speed: 0.9 },
    { pos: [4.6, 2.8, -3.5], rot: [-0.2, -0.3, 0.1], scale: 0.85, speed: 0.8 },
    { pos: [0.8, -3.2, -4], rot: [0.4, 0.2, -0.2], scale: 0.7, speed: 0.65 },
  ], []);

  return (
    <group ref={groupRef}>
      {/* Subtle Ambient & Directional Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 15, 10]} intensity={1.2} color="#E0F7FF" />
      <pointLight position={[-6, 4, 2]} intensity={2.5} color="#00D9FF" distance={15} />
      <pointLight position={[6, -4, 2]} intensity={2.0} color="#80E5FF" distance={15} />

      {/* Floating Microchips */}
      {chipConfigs.map((chip, idx) => (
        <Microchip
          key={idx}
          initialPos={chip.pos}
          initialRot={chip.rot}
          scale={chip.scale}
          speed={prefersReducedMotion ? 0.05 : chip.speed}
        />
      ))}

      {/* Weightless Polyhedrons */}
      <FloatingPolyhedron position={[-2.5, 3.2, -5]} size={0.9} speed={0.4} />
      <FloatingPolyhedron position={[3.2, -2.5, -4.5]} size={0.7} speed={0.5} />
      <FloatingPolyhedron position={[-5.0, -1.2, -6]} size={0.8} speed={0.3} />

      {/* Procedural Particle Field */}
      <ParticleField count={isMobile ? 160 : 380} />
    </group>
  );
}

export default function ParticleScene() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setHasWebGL(checkWebGLSupport());

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleResize = () => checkMobile();
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);

    window.addEventListener('resize', handleResize);
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // WebGL Fallback if browser/environment doesn't support WebGL
  if (!hasWebGL) {
    return (
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden bg-radial-glow"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00D9FF]/10 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#80E5FF]/8 blur-3xl" />
      </div>
    );
  }

  return (
    <div
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
      style={{ width: '100%', height: '100%', maxWidth: '100vw' }}
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <SceneContent
          isMobile={isMobile}
          prefersReducedMotion={prefersReducedMotion}
        />
      </Canvas>

      {/* Subtle coordinate-grid and vignette overlays to blend 3D canvas seamlessly */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-[#07090D]/80 pointer-events-none" />
    </div>
  );
}
