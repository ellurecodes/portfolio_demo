import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
    const { progress } = useProgress();
    const safeProgress = typeof progress === "number" && !isNaN(progress) ? Math.min(100, Math.max(0, Math.round(progress))) : 0;

    return (
        <Html
            as="div"
            center
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                pointerEvents: "none",
            }}
        >
            <div className="relative flex items-center justify-center">
                <span className="canvas-loader"></span>
            </div>
            <p
                style={{
                    fontSize: 13,
                    color: "#00f090",
                    fontWeight: 700,
                    marginTop: 35,
                    fontFamily: "monospace",
                    letterSpacing: "1px",
                    textShadow: "0 0 10px rgba(0, 240, 144, 0.5)",
                }}
            >
                {safeProgress}% LOADED
            </p>
        </Html>
    );
};

export default CanvasLoader;
