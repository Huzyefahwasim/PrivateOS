import { useEffect, useState } from 'react';

type Theme = 'shield' | 'light' | 'cyber';

export function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem('theme') as Theme;
        return saved || 'shield';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => {
            if (prev === 'shield') return 'light';
            if (prev === 'light') return 'cyber';
            return 'shield';
        });
    };

    return { theme, toggleTheme, setTheme };
}
