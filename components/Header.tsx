"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = () => {
            if (open) setOpen(false);
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [open]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [open]);

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
            scrolled 
                ? 'bg-[var(--color-background)]/95 backdrop-blur-md shadow-lg border-b border-[var(--color-border)]' 
                : 'bg-[var(--color-background)] shadow-sm'
        }`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
                {/* Logo */}
                <Link 
                    href="/" 
                    className="flex items-center gap-2 font-extrabold text-2xl text-[var(--color-accent)] hover:scale-105 transition-transform duration-200"
                    onClick={() => setOpen(false)}
                >
                    <Sparkles className="text-[var(--color-accent)]" size={28} />
                    <span className="bg-gradient-to-r from-[var(--color-accent)] to-purple-600 bg-clip-text text-transparent">
                        Divinity Tech
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map(link => (
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            className="relative font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors px-4 py-2 rounded-lg hover:bg-[var(--color-surface)] group no-underline"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </Link>
                    ))}
                    
                    <Link 
                        href="/quote" 
                        className="ml-4 px-6 py-2.5 rounded-full font-semibold bg-[var(--color-accent)] text-white shadow-lg hover:bg-[var(--color-accent-hover)] hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        Get Quote
                    </Link>
                    
                    <div className="ml-2">
                        <ThemeToggle />
                    </div>
                </nav>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button 
                        className="p-2 rounded-lg hover:bg-[var(--color-surface)] transition-colors" 
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpen(o => !o);
                        }} 
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                    >
                        <motion.div
                            animate={{ rotate: open ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {open ? <X size={28} className="text-[var(--color-text)]" /> : <Menu size={28} className="text-[var(--color-text)]" />}
                        </motion.div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setOpen(false)}
                        />
                        
                        {/* Menu */}
                        <motion.nav 
                            initial={{ opacity: 0, y: -20 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 md:hidden bg-[var(--color-background)] shadow-xl border-b border-[var(--color-border)] z-50"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="px-4 py-6 space-y-2">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link 
                                            href={link.href} 
                                            className="block font-semibold text-lg text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors px-4 py-3 rounded-lg hover:bg-[var(--color-surface)]" 
                                            onClick={() => setOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.1 }}
                                    className="pt-4"
                                >
                                    <Link 
                                        href="/quote" 
                                        className="block text-center px-6 py-3 rounded-full font-semibold bg-[var(--color-accent)] text-white shadow-lg hover:bg-[var(--color-accent-hover)] transition-all duration-300" 
                                        onClick={() => setOpen(false)}
                                    >
                                        Get Quote
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
