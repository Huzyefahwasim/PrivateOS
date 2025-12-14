import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, ShieldCheck, Lock, Globe } from 'lucide-react';
import { RevealText } from './ui/RevealText';

export function Hero() {
    const words = ["Non-Custodial", "Client-Side Encrypted", "Decentralized", "Secure"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)]/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[96px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-sm mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    PrivateOS v2.0 is live
                </motion.div>

                <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-[var(--text-primary)] mb-6 leading-[1.1]">
                    <RevealText delay={0.1}>Your Personal</RevealText> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-purple-500">
                        <RevealText delay={0.3}>Security OS</RevealText>
                    </span>
                </h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="h-12 md:h-16 mb-8 text-2xl md:text-4xl font-medium text-[var(--text-secondary)]"
                >
                    Always{" "}
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.5 }}
                        className="text-[var(--text-primary)] inline-block min-w-[200px]"
                    >
                        {words[index]}
                    </motion.span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-2xl text-lg text-[var(--text-muted)] mb-10"
                >
                    Take back control of your digital life. Store files, manage passwords, and communicate securely without relying on centralized servers.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <button className="group relative px-8 py-4 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold text-lg overflow-hidden transition-transform hover:scale-105">
                        <span className="relative z-10 flex items-center gap-2">
                            Get Started Free <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    <button className="px-8 py-4 rounded-full bg-transparent border border-[var(--border)] text-[var(--text-primary)] font-semibold text-lg hover:bg-[var(--bg-secondary)] transition-colors">
                        Read Documentation
                    </button>
                </motion.div>

                {/* Feature Highlights - now with RevealText */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                    {[
                        { icon: ShieldCheck, title: "Zero Knowledge", desc: "No one sees your data." },
                        { icon: Lock, title: "AES-256", desc: "Military-grade encryption." },
                        { icon: Globe, title: "Decentralized", desc: "Powered by IPFS & Web3." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 + i * 0.1 }}
                            className="p-6 rounded-2xl bg-[var(--bg-secondary)]/30 backdrop-blur-sm border border-[var(--border)] text-left hover:border-[var(--accent)] transition-colors group"
                        >
                            <item.icon className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors mb-4" size={32} />
                            <h3 className="text-[var(--text-primary)] font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-[var(--text-muted)] text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
