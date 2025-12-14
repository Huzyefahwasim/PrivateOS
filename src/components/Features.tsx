import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Shield, HardDrive, MessageSquare, Bot } from 'lucide-react';
import React from 'react';

function FeatureCard({ title, desc, icon: Icon, color }: { title: string, desc: string, icon: any, color: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
    const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="relative h-full"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative h-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-3xl p-8 overflow-hidden group hover:border-[var(--accent)] transition-colors duration-300">
                <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6`}>
                    <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{desc}</p>

                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-t from-[var(--accent)]/10 to-transparent rounded-full blur-2xl" />
            </div>
        </motion.div>
    );
}

export function Features() {
    const features = [
        {
            title: "Shield Authenticator",
            desc: "Replace Google Authenticator. Sync your 2FA codes across all devices with end-to-end encryption. No phone number required.",
            icon: Shield,
            color: "bg-blue-500"
        },
        {
            title: "Shield Drive",
            desc: "Store your photos, documents, and videos on decentralized networks. You own the keys, you own the data.",
            icon: HardDrive,
            color: "bg-purple-500"
        },
        {
            title: "Shield Chat",
            desc: "Wallet-to-wallet messaging. No central server stores your messages. Metadata is privacy-protected.",
            icon: MessageSquare,
            color: "bg-green-500"
        },
        {
            title: "Shield AI",
            desc: "A personal AI assistant that runs locally or in a TEE (Trusted Execution Environment). Your prompts remain private.",
            icon: Bot,
            color: "bg-pink-500"
        }
    ];

    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4"
                    >
                        Your <span className="text-[var(--accent)]">Web3</span> Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto"
                    >
                        A complete suite of privacy-preserving tools included in your OS.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <FeatureCard {...feature} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
