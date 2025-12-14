import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.9]);
    const blur = useTransform(scrollY, [0, 50], [0, 12]);

    return (
        <motion.nav
            style={{
                backgroundColor: useTransform(bgOpacity, (v) => `rgba(${getComputedStyle(document.body).getPropertyValue('--bg-primary-rgb') || '5, 5, 5'}, ${v})`), // Fallback strategy needed for CSS variables in JS, mostly relying on strict CSS classes is better
                backdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
            }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-colors duration-300"
        >
            {/* Pure CSS backdrop backup */}
            <div className="absolute inset-0 bg-[var(--bg-primary)]/80 backdrop-blur-md -z-10 shadow-sm border-b border-[var(--border)]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center flex-shrink-0">
                        <Shield className="h-8 w-8 text-[var(--accent)] mr-2" />
                        <span className="text-xl font-bold tracking-tight text-[var(--text-primary)]">PrivateOS</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {['Features', 'How it Works', 'Technology', 'Pricing'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                                    className="px-3 py-2 rounded-md text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <ThemeSwitcher />
                        <button className="bg-[var(--accent)] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[var(--accent-hover)] transition-colors shadow-[0_0_15px_var(--accent-glow)]">
                            Launch App
                        </button>
                    </div>

                    <div className="-mr-2 flex md:hidden gap-2">
                        <ThemeSwitcher />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[var(--text-secondary)] hover:text-[var(--accent)] focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-[var(--bg-secondary)] border-b border-[var(--border)]"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {['Features', 'How it Works', 'Technology', 'Pricing'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                                className="block px-3 py-2 rounded-md text-base font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-tertiary)]"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <div className="mt-4 px-3">
                            <button className="w-full bg-[var(--accent)] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[var(--accent-hover)] shadow-[0_0_15px_var(--accent-glow)]">
                                Launch App
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
