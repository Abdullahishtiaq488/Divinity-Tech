"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, HelpCircle } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] py-12 px-4 md:px-12">
            {/* Hero */}
            <section className="mb-12 text-center">
                <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text)]">Contact Divinity Tech</motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">We're here to help you succeed. Reach out via the form or any method below, and our team will respond within 1 business day.</motion.p>
            </section>
            {/* Contact Methods & Form */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4"><Mail size={28} className="text-[var(--color-accent)]" /><span>hello@divinitytech.com</span></div>
                    <div className="flex items-center gap-4"><Phone size={28} className="text-[var(--color-accent)]" /><span>+1 (555) 123-4567</span></div>
                    <div className="flex items-center gap-4"><MapPin size={28} className="text-[var(--color-accent)]" /><span>123 Innovation Ave, Suite 400, New York, NY</span></div>
                    <div className="flex items-center gap-4"><Clock size={28} className="text-[var(--color-accent)]" /><span>Mon-Fri: 9am - 6pm EST</span></div>
                </div>
                {/* Contact Form */}
                <form className="card flex flex-col gap-4">
                    <input type="text" placeholder="Name" className="px-4 py-3 rounded-lg bg-[var(--color-muted)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]" required />
                    <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-[var(--color-muted)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]" required />
                    <select className="px-4 py-3 rounded-lg bg-[var(--color-muted)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]">
                        <option>Service Interest</option>
                        <option>Web Development</option>
                        <option>Graphic Design</option>
                        <option>Content Writing</option>
                        <option>Digital Marketing</option>
                    </select>
                    <input type="text" placeholder="Budget (optional)" className="px-4 py-3 rounded-lg bg-[var(--color-muted)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]" />
                    <input type="text" placeholder="Timeline (optional)" className="px-4 py-3 rounded-lg bg-[var(--color-muted)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]" />
                    <textarea placeholder="Message" className="px-4 py-3 rounded-lg bg-[var(--color-muted)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] min-h-[100px]" required />
                    <button type="submit" className="bg-[var(--color-accent)] text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-[var(--color-accent-hover)] transition-transform">Send Message</button>
                </form>
            </section>
            {/* FAQ */}
            <section className="mb-16 max-w-4xl mx-auto">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-semibold mb-8 text-[var(--color-accent)]">Frequently Asked Questions</motion.h2>
                <div className="space-y-6">
                    {[
                        { q: "How soon will I get a response?", a: "We respond to all inquiries within 1 business day." },
                        { q: "What is your project minimum?", a: "Our typical project minimum is $1,000, but we offer flexible packages." },
                        { q: "Do you work with startups?", a: "Absolutely! We love helping startups grow and scale." },
                        { q: "Can I request a custom service?", a: "Yes, we tailor our solutions to your unique needs." },
                        { q: "Is my data safe with you?", a: "We follow strict privacy and security protocols for all client data." },
                        { q: "Do you offer ongoing support?", a: "Yes, we provide maintenance and support packages." },
                    ].map((faq, i) => (
                        <motion.div key={faq.q} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card">
                            <div className="flex items-center gap-2 mb-2"><HelpCircle className="text-[var(--color-accent)]" size={20} /><span className="font-bold text-[var(--color-text)]">{faq.q}</span></div>
                            <p className="text-[var(--color-text-secondary)] text-sm ml-6">{faq.a}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* Response Guarantee */}
            <section className="text-center">
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-lg font-semibold text-[var(--color-accent)]">We guarantee a response within 1 business day. Your success is our priority!</motion.p>
            </section>
        </div>
    );
}
