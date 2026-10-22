import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import CanvasLoader from "../Loader";
import CanvasErrorBoundary from "../CanvasErrorBoundary";

const Computers = ({ isMobile }) => {
    const computer = useGLTF("/desktop_pc/scene.gltf");
    const groupRef = useRef();

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.002;
        }
    });

    return (
        <mesh>
            <group ref={groupRef}>
                <hemisphereLight intensity={0.2} groundColor="#050816" />
                <spotLight
                    position={[-20, 50, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={1.2}
                    castShadow
                    shadow-mapSize={1024}
                />
                <pointLight intensity={1} color="#00f090" position={[2, 0, 0]} />
                <pointLight intensity={1} color="#00d2ff" position={[-2, 0, 0]} />
                <primitive
                    object={computer.scene}
                    scale={isMobile ? 0.6 : 0.75}
                    position={isMobile ? [0, -3, -1.8] : [0, -3.25, -1.5]}
                    rotation={[-0.01, -0.2, -0.1]}
                />
            </group>
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 640px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <CanvasErrorBoundary>
            <Canvas
                shadows
                dpr={[1, Math.min(window.devicePixelRatio || 1, 2)]}
                camera={{ position: [20, 3, 5], fov: isMobile ? 32 : 25 }}
                gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
                className="w-full h-full cursor-grab active:cursor-grabbing"
            >
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls
                        enableZoom={false}
                        enablePanning={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <Computers isMobile={isMobile} />
                </Suspense>

                <Preload all />
            </Canvas>
        </CanvasErrorBoundary>
    );
};

useGLTF.preload("/desktop_pc/scene.gltf");

export default ComputersCanvas;
