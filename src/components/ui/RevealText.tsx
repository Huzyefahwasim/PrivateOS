import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface RevealTextProps {
    children: string;
    className?: string;
    delay?: number;
}

export function RevealText({ children, className = "", delay = 0 }: RevealTextProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const words = children.split(" ");

    return (
        <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.2em] -mb-[0.2em] pb-[0.2em]">
                    <motion.span
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: 0 } : { y: "100%" }}
                        transition={{
                            duration: 0.5,
                            delay: delay + i * 0.03,
                            ease: [0.33, 1, 0.68, 1] // Custom ease for "snappy" feel
                        }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}
