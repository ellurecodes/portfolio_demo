import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import CanvasErrorBoundary from "../CanvasErrorBoundary";

const Stars = (props) => {
    const ref = useRef();
    // 5001 is divisible by 3 (stride={3} requires length % 3 === 0)
    const [sphere] = useState(() => {
        const arr = new Float32Array(5001);
        const data = random.inSphere(arr, { radius: 1.2 });
        // Sanitize any potential NaN values
        for (let i = 0; i < data.length; i++) {
            if (isNaN(data[i])) data[i] = 0;
        }
        return data;
    });

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 12;
            ref.current.rotation.y -= delta / 18;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#00f090"
                    size={0.0022}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => {
    return (
        <div className="w-full h-auto absolute inset-0 z-[-1] pointer-events-none">
            <CanvasErrorBoundary fallback={null}>
                <Canvas camera={{ position: [0, 0, 1] }} gl={{ alpha: true }}>
                    <Suspense fallback={null}>
                        <Stars />
                    </Suspense>
                    <Preload all />
                </Canvas>
            </CanvasErrorBoundary>
        </div>
    );
};

export default StarsCanvas;
