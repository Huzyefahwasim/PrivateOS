import { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

export function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

    const mouse = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;

        // Grid Configuration
        const gap = 40; // Spacing between dots
        const baseRadius = 1;
        let rows = 0;
        let cols = 0;

        // Theme colors
        const style = getComputedStyle(document.body);
        // Use a slightly more opaque color for visibility
        const dotColor = theme === 'light' ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)';
        const mouseColor = style.getPropertyValue('--accent').trim() || '#3B82F6';

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            cols = Math.ceil(width / gap);
            rows = Math.ceil(height / gap);
        };

        const drawDot = (x: number, y: number) => {
            ctx.beginPath();
            // distort position based on mouse interaction
            const maxDist = 200;
            let dx = x - mouse.current.x;
            let dy = y - mouse.current.y;
            let d = Math.sqrt(dx * dx + dy * dy);

            let finalX = x;
            let finalY = y;
            let size = baseRadius;

            if (d < maxDist) {
                const force = (maxDist - d) / maxDist;
                const angle = Math.atan2(dy, dx);
                const push = force * 60; // Push strength

                finalX += Math.cos(angle) * push;
                finalY += Math.sin(angle) * push;
                size = baseRadius + force; // slightly larger when close
            }

            ctx.arc(finalX, finalY, size, 0, Math.PI * 2);
            ctx.fill();
        };

        const update = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = dotColor;

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    const px = x * gap + (gap / 2);
                    const py = y * gap + (gap / 2);
                    drawDot(px, py);
                }
            }

            // Draw slight glow at mouse cursor
            const gradient = ctx.createRadialGradient(mouse.current.x, mouse.current.y, 0, mouse.current.x, mouse.current.y, 150);
            gradient.addColorStop(0, `${mouseColor}20`); // 20 hex alpha = very transparent
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            animationFrameId = requestAnimationFrame(update);
        };

        const handleResize = () => init();
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        init();
        update();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    // Ensure high z-index but behind content to be visible
    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
            <canvas ref={canvasRef} />
        </div>
    );
}
