import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Loader({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Slight delay after 100%
                    return 100;
                }
                return prev + 2;
            });
        }, 20);
        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-primary)]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-8"
                >
                    <Shield size={64} className="text-[var(--accent)]" />
                    <motion.div
                        className="absolute inset-0 bg-[var(--accent)] blur-2xl opacity-50"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>

                <div className="w-64 h-1 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-[var(--accent)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="mt-2 font-mono text-sm text-[var(--accent)]">
                    {progress}%
                </div>
            </div>
        </motion.div>
    );
}
