"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
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
    return (
        <header className="sticky top-0 z-40 w-full bg-white dark:bg-[#23272f] shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-extrabold text-2xl text-[var(--color-accent)]">
                    <Sparkles className="text-[var(--color-accent)]" size={28} />
                    Divinity Tech
                </Link>
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map(link => (
                        <Link key={link.name} href={link.href} className="font-medium text-lg text-[var(--color-text)] dark:text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors px-2 py-1 rounded-lg hover:bg-[var(--color-muted)]">
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/quote" className="ml-4 px-5 py-2 rounded-full font-bold bg-[var(--color-accent)] text-white shadow hover:bg-[var(--color-accent-hover)] transition-transform">Get Quote</Link>
                    <ThemeToggle />
                </nav>
                {/* Mobile Hamburger */}
                <button className="md:hidden p-2 rounded-lg hover:bg-[var(--color-muted)] transition-colors" onClick={() => setOpen(o => !o)} aria-label="Open menu">
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.nav initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -40, opacity: 0 }} className="md:hidden bg-white dark:bg-[#23272f] shadow-lg px-4 py-6 flex flex-col gap-4">
                        {navLinks.map(link => (
                            <Link key={link.name} href={link.href} className="font-semibold text-lg text-[var(--color-text)] dark:text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors px-2 py-2 rounded-lg hover:bg-[var(--color-muted)]" onClick={() => setOpen(false)}>
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/quote" className="mt-2 px-5 py-2 rounded-full font-bold bg-[var(--color-accent)] text-white shadow hover:bg-[var(--color-accent-hover)] transition-transform" onClick={() => setOpen(false)}>Get Quote</Link>
                        <div className="mt-2"><ThemeToggle /></div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
