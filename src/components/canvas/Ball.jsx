import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";
import CanvasErrorBoundary from "../CanvasErrorBoundary";

const Ball = ({ imgUrl }) => {
    const [decal] = useTexture([imgUrl]);
    const meshRef = useRef();
    let direction = 1;

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.008 * direction;
            meshRef.current.rotation.y += 0.008 * direction;

            if (meshRef.current.rotation.x > 0.25 || meshRef.current.rotation.x < -0.25) {
                direction *= -1;
            }
        }
    });

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={1.5}>
            <ambientLight intensity={0.35} />
            <directionalLight position={[0, 0, 0.08]} />
            <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="#141c2e"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                    roughness={0.4}
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                    flatShading
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon, name }) => {
    const fallbackUI = (
        <div className="w-full h-full rounded-full bg-[#141c2e] border border-white/10 flex items-center justify-center p-4 shadow-lg hover:scale-105 transition-transform">
            <img src={icon} alt={name || "Tech"} className="w-full h-full object-contain" />
        </div>
    );

    return (
        <CanvasErrorBoundary fallback={fallbackUI}>
            <Canvas
                frameloop="always"
                dpr={[1, 1.5]}
                gl={{ preserveDrawingBuffer: true, alpha: true, powerPreference: "low-power" }}
                className="w-full h-full cursor-grab active:cursor-grabbing"
            >
                <Suspense fallback={null}>
                    <OrbitControls enableZoom={false} />
                    <Ball imgUrl={icon} />
                </Suspense>
                <Preload all />
            </Canvas>
        </CanvasErrorBoundary>
    );
};

export default BallCanvas;
