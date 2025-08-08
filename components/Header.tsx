"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
        name: "Services", 
        href: "/services",
        dropdown: [
            { name: "Web Development", href: "/services#web-development" },
            { name: "UI/UX Design", href: "/services#design" },
            { name: "Digital Marketing", href: "/services#marketing" },
            { name: "Content Strategy", href: "/services#content" },
        ]
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
            setActiveDropdown(null);
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
                ? 'backdrop-blur-md shadow-lg border-b-2' 
                : 'shadow-sm border-b'
        }`}
        style={{
            backgroundColor: scrolled 
                ? 'var(--color-background)' 
                : 'var(--color-background)',
            borderColor: 'var(--color-border)'
        }}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
                {/* Enhanced Logo */}
                <Link 
                    href="/"
                    className="flex items-center gap-3 font-extrabold text-2xl hover:scale-105 transition-all duration-300 group"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="relative p-2 rounded-xl border-2 group-hover:scale-110 transition-transform duration-300"
                        style={{
                            backgroundColor: 'var(--color-accent-bg)',
                            borderColor: 'var(--color-accent-border)'
                        }}
                    >
                        <Sparkles style={{ color: 'var(--color-accent)' }} size={28} />
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ backgroundColor: 'var(--color-accent)' }} />
                    </div>
                    <div className="flex flex-col">
                        <span style={{ 
                            background: 'linear-gradient(to right, var(--color-accent), #9333ea)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }} className="leading-tight font-extrabold">
                            Divinity Tech
                        </span>
                        <span className="text-xs font-normal opacity-60" style={{ color: 'var(--color-text-secondary)' }}>
                            Digital Solutions
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map(link => (
                        <div key={link.name} className="relative">
                            {link.dropdown ? (
                                <div
                                    className="relative"
                                    onMouseEnter={() => setActiveDropdown(link.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className="relative font-medium px-4 py-2 rounded-lg transition-all duration-300 group flex items-center gap-1 no-underline"
                                        style={{ color: 'var(--color-text)' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = 'var(--color-accent)';
                                            e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'var(--color-text)';
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                        }}
                                    >
                                        {link.name}
                                        <ChevronDown 
                                            size={16} 
                                            className={`transition-transform duration-200 ${
                                                activeDropdown === link.name ? 'rotate-180' : ''
                                            }`} 
                                        />
                                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0"
                                              style={{ backgroundColor: 'var(--color-accent)' }}></span>
                                    </Link>
                                    
                                    <AnimatePresence>
                                        {activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-full left-0 mt-2 rounded-xl shadow-xl border-2 overflow-hidden min-w-[200px]"
                                                style={{ 
                                                    backgroundColor: 'var(--color-surface)', 
                                                    borderColor: 'var(--color-border)' 
                                                }}
                                            >
                                                {link.dropdown.map((item, index) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block px-4 py-3 transition-colors hover:bg-blue-50 no-underline"
                                                        style={{ 
                                                            color: 'var(--color-text)',
                                                            borderBottom: index < link.dropdown!.length - 1 ? '1px solid var(--color-border)' : 'none'
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                                                            e.currentTarget.style.color = 'var(--color-accent)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.backgroundColor = 'transparent';
                                                            e.currentTarget.style.color = 'var(--color-text)';
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="relative font-medium px-4 py-2 rounded-lg transition-all duration-300 group no-underline"
                                    style={{ color: 'var(--color-text)' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = 'var(--color-accent)';
                                        e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = 'var(--color-text)';
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }}
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0"
                                          style={{ backgroundColor: 'var(--color-accent)' }}></span>
                                </Link>
                            )}
                        </div>
                    ))}
                    
                    <Link 
                        href="/quote"
                        className="ml-4 px-6 py-2.5 rounded-full font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 no-underline"
                        style={{ backgroundColor: 'var(--color-accent)' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
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
                        className="p-2 rounded-lg transition-colors"
                        style={{ backgroundColor: open ? 'var(--color-surface)' : 'transparent' }}
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpen(o => !o);
                        }}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        onMouseEnter={(e) => {
                            if (!open) e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                        }}
                        onMouseLeave={(e) => {
                            if (!open) e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        <motion.div
                            animate={{ rotate: open ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {open ? (
                                <X size={28} style={{ color: 'var(--color-text)' }} />
                            ) : (
                                <Menu size={28} style={{ color: 'var(--color-text)' }} />
                            )}
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
                            className="absolute top-full left-0 right-0 md:hidden shadow-xl border-b-2 z-50"
                            style={{ 
                                backgroundColor: 'var(--color-background)', 
                                borderColor: 'var(--color-border)' 
                            }}
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
                                            className="block font-semibold text-lg px-4 py-3 rounded-lg transition-colors no-underline"
                                            style={{ 
                                                color: 'var(--color-text)',
                                                backgroundColor: 'transparent'
                                            }}
                                            onClick={() => setOpen(false)}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = 'var(--color-accent)';
                                                e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = 'var(--color-text)';
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                            }}
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
                                        className="block text-center px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300"
                                        style={{ backgroundColor: 'var(--color-accent)' }}
                                        onClick={() => setOpen(false)}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
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
