"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setDark(document.documentElement.classList.contains("dark"));
        }
    }, []);
    function toggleTheme() {
        if (typeof window !== "undefined") {
            document.documentElement.classList.toggle("dark");
            setDark(document.documentElement.classList.contains("dark"));
        }
    }
    return (
        <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full bg-white/20 dark:bg-slate-800/40 hover:bg-accent/30 transition-colors flex items-center justify-center"
        >
            <AnimatePresence mode="wait" initial={false}>
                {dark ? (
                    <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <Moon className="text-yellow-300" size={22} />
                    </motion.span>
                ) : (
                    <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <Sun className="text-yellow-400" size={22} />
                    </motion.span>
                )}
            </AnimatePresence>
        </button>
    );
}
