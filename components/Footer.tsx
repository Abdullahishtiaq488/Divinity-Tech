import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[var(--color-surface)] dark:bg-[#23272f] text-[var(--color-text)] dark:text-[var(--color-text)] py-10 px-4 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Contact Info */}
                <div className="flex flex-col gap-2 text-[var(--color-text-secondary)]">
                    <div className="flex items-center gap-2"><Mail size={18} className="text-[var(--color-accent)]" /> hello@divinitytech.com</div>
                    <div className="flex items-center gap-2"><Phone size={18} className="text-[var(--color-accent)]" /> +1 (555) 123-4567</div>
                    <div className="flex items-center gap-2"><MapPin size={18} className="text-[var(--color-accent)]" /> 123 Innovation Ave, NY</div>
                </div>
                {/* Nav Links */}
                <nav className="flex flex-wrap gap-4 text-[var(--color-text)] font-medium">
                    <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-[var(--color-accent)] transition-colors">About</Link>
                    <Link href="/services" className="hover:text-[var(--color-accent)] transition-colors">Services</Link>
                    <Link href="/portfolio" className="hover:text-[var(--color-accent)] transition-colors">Portfolio</Link>
                    <Link href="/contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</Link>
                    <Link href="/quote" className="hover:text-[var(--color-accent)] transition-colors">Get Quote</Link>
                    <Link href="/privacy" className="hover:text-[var(--color-accent)] transition-colors">Privacy</Link>
                </nav>
                {/* Socials */}
                <div className="flex gap-4">
                    <a href="#" aria-label="LinkedIn" className="hover:text-[var(--color-accent)] transition-colors"><Linkedin size={22} /></a>
                    <a href="#" aria-label="Twitter" className="hover:text-[var(--color-accent)] transition-colors"><Twitter size={22} /></a>
                    <a href="#" aria-label="Instagram" className="hover:text-[var(--color-accent)] transition-colors"><Instagram size={22} /></a>
                </div>
            </div>
            <div className="text-center text-[var(--color-text-secondary)] text-sm mt-8">
                © {new Date().getFullYear()} Divinity Tech. All rights reserved.
            </div>
        </footer>
    );
}

