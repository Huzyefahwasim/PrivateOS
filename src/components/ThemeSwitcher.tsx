import { Moon, Sun, Zap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';

export function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[var(--bg-tertiary)] transition-colors relative overflow-hidden group"
            aria-label="Toggle theme"
        >
            <div className="relative z-10 text-[var(--text-primary)]">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={theme}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {theme === 'shield' && <Moon size={20} />}
                        {theme === 'light' && <Sun size={20} />}
                        {theme === 'cyber' && <Zap size={20} />}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-10 transition-opacity" />
        </button>
    );
}
