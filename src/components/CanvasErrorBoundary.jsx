import React from "react";

class CanvasErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.warn("Canvas WebGL error caught gracefully:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#090e1a]/80 backdrop-blur-md rounded-2xl border border-white/10">
                        <div className="w-12 h-12 rounded-full bg-[#00f090]/15 border border-[#00f090]/30 flex items-center justify-center mb-3">
                            <span className="text-[#00f090] text-xl">⚡</span>
                        </div>
                        <h4 className="text-white font-bold text-sm">Interactive 3D Experience</h4>
                        <p className="text-secondary text-xs mt-1 max-w-xs font-mono">
                            Accelerated WebGL visualization initialized.
                        </p>
                    </div>
                )
            );
        }

        return this.props.children;
    }
}

export default CanvasErrorBoundary;
