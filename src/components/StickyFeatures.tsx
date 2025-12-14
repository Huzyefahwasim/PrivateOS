import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Shield, HardDrive, MessageSquare, Bot } from 'lucide-react';
import { RevealText } from './ui/RevealText';

interface FeatureCardProps {
    title: string;
    desc: string;
    icon: any;
    color: string;
}

function FeatureCard({ title, desc, icon: Icon, color }: FeatureCardProps) {
    return (
        <div className="h-screen flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--bg-secondary)] group"
            >
                <div className={`absolute inset-0 opacity-10 ${color.replace('bg-', 'bg-gradient-to-br from-').split(' ')[0]} to-transparent`} />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center z-10">
                    <div className={`w-24 h-24 rounded-3xl ${color} flex items-center justify-center mb-8 shadow-2xl`}>
                        <Icon className="text-white" size={48} />
                    </div>
                    <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4">{title}</h3>
                    <p className="text-[var(--text-secondary)] text-lg">{desc}</p>
                </div>

                {/* Decorative Grid */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--text-muted) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            </motion.div>
        </div>
    );
}

export function StickyFeatures() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const features = [
        {
            title: "Private Authenticator",
            desc: "End-to-end encrypted 2FA syncing across all devices.",
            icon: Shield,
            color: "bg-blue-600"
        },
        {
            title: "Private Drive",
            desc: "Decentralized storage where you own the encryption keys.",
            icon: HardDrive,
            color: "bg-purple-600"
        },
        {
            title: "Private Chat",
            desc: "Wallet-to-wallet messaging with full metadata privacy.",
            icon: MessageSquare,
            color: "bg-green-600"
        },
        {
            title: "Private AI",
            desc: "Local LLM execution for completely private assistance.",
            icon: Bot,
            color: "bg-pink-600"
        }
    ];

    return (
        <section ref={containerRef} className="relative">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden pointer-events-none">
                <div className="w-1/2 h-full flex flex-col justify-center px-20">
                    <h2 className="text-6xl font-bold text-[var(--text-primary)] mb-6">
                        <RevealText>Our Ecosystem</RevealText>
                    </h2>
                    <p className="text-xl text-[var(--text-secondary)] max-w-md">
                        <RevealText delay={0.2}>
                            A complete suite of privacy-first tools designed to work together seamlessly.
                        </RevealText>
                    </p>

                    {/* Scroll Progress Indicator */}
                    <div className="mt-12 h-1 w-full bg-[var(--bg-tertiary)] rounded-full overflow-hidden max-w-sm">
                        <motion.div
                            className="h-full bg-[var(--accent)]"
                            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                        />
                    </div>
                </div>
            </div>

            <div className="w-full grid grid-cols-2">
                <div /> {/* Spacer for left sticky content */}
                <div className="flex flex-col">
                    {features.map((feature, i) => (
                        <FeatureCard key={i} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}
