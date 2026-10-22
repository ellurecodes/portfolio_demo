import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import CanvasErrorBoundary from "../CanvasErrorBoundary";

const Earth = () => {
    const earth = useGLTF("/planet/scene.gltf");

    return (
        <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
    );
};

const EarthCanvas = () => {
    return (
        <CanvasErrorBoundary>
            <Canvas
                shadows
                frameloop="demand"
                dpr={[1, Math.min(window.devicePixelRatio || 1, 2)]}
                gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [-4, 3, 6],
                }}
                className="w-full h-full cursor-grab active:cursor-grabbing"
            >
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls
                        autoRotate
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <Earth />
                    <Preload all />
                </Suspense>
            </Canvas>
        </CanvasErrorBoundary>
    );
};

useGLTF.preload("/planet/scene.gltf");

export default EarthCanvas;
