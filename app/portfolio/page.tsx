"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, X, Star } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Web Dev", "Design", "Marketing", "Writing"];
const projects = [
    { title: "E-Commerce Redesign", category: "Web Dev", img: "/portfolio1.jpg", desc: "Modern e-commerce platform for a global retailer.", client: "RetailCo" },
    { title: "Brand Identity for Fintech", category: "Design", img: "/portfolio2.jpg", desc: "Complete branding for a fintech startup.", client: "FinStart" },
    { title: "SEO Campaign", category: "Marketing", img: "/portfolio3.jpg", desc: "SEO and PPC for a SaaS company.", client: "SaaSify" },
    { title: "Corporate Blog", category: "Writing", img: "/portfolio4.jpg", desc: "Content strategy and blog for a B2B firm.", client: "BizCorp" },
    { title: "Mobile App UI", category: "Design", img: "/portfolio5.jpg", desc: "UI/UX for a mobile banking app.", client: "Bankly" },
    { title: "Social Media Launch", category: "Marketing", img: "/portfolio6.jpg", desc: "Social campaign for a new product.", client: "LaunchPro" },
    { title: "Custom CMS", category: "Web Dev", img: "/portfolio7.jpg", desc: "Headless CMS for a media company.", client: "MediaX" },
    { title: "Logo Suite", category: "Design", img: "/portfolio8.jpg", desc: "Logo and brand assets for a tech firm.", client: "TechNest" },
    { title: "Ad Copywriting", category: "Writing", img: "/portfolio9.jpg", desc: "High-converting ad copy for an e-commerce brand.", client: "ShopEase" },
    { title: "Analytics Dashboard", category: "Web Dev", img: "/portfolio10.jpg", desc: "Custom analytics dashboard for enterprise.", client: "DataCorp" },
    { title: "Product Brochure", category: "Design", img: "/portfolio11.jpg", desc: "Print and digital brochure for a manufacturer.", client: "MakeIt" },
    { title: "Influencer Campaign", category: "Marketing", img: "/portfolio12.jpg", desc: "Influencer marketing for a beauty brand.", client: "GlowUp" },
];
const testimonials = [
    { name: "Emily R.", company: "RetailCo", text: "Divinity Tech delivered a stunning e-commerce site that boosted our sales by 40%. Highly recommended!" },
    { name: "James L.", company: "FinStart", text: "Their branding work set us apart in a crowded market. Professional, creative, and reliable." },
    { name: "Sara M.", company: "SaaSify", text: "Our SEO rankings soared thanks to their marketing expertise. Great team!" },
];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("All");
    const [selected, setSelected] = useState(null);
    const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);
    return (
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] py-12 px-4 md:px-12">
            {/* Hero & Filters */}
            <section className="mb-12 text-center">
                <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text)]">Our Portfolio</motion.h1>
                <div className="flex flex-wrap gap-4 justify-center mt-6">
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setFilter(cat)} className={`px-5 py-2 rounded-full font-semibold transition-colors border-2 border-[var(--color-accent)] ${filter === cat ? "bg-[var(--color-accent)] text-white shadow-lg" : "bg-[var(--color-muted)] text-[var(--color-text-secondary)] hover:bg-[var(--color-accent)] hover:text-white"}`}>{cat}</button>
                    ))}
                </div>
            </section>
            {/* Project Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
                {filtered.map((proj, i) => (
                    <motion.div key={proj.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card flex flex-col items-center hover:scale-105 transition-transform cursor-pointer" onClick={() => setSelected(proj)}>
                        <Image src={proj.img} alt={proj.title} width={240} height={160} className="rounded-lg object-cover mb-4 border-2 border-[var(--color-accent)]" />
                        <h3 className="text-xl font-bold text-[var(--color-text)] mb-1">{proj.title}</h3>
                        <span className="text-[var(--color-accent)] mb-1 text-sm">{proj.category}</span>
                        <p className="text-[var(--color-text-secondary)] text-center text-sm">{proj.desc}</p>
                    </motion.div>
                ))}
            </section>
            {/* Modal Popup for Project Details */}
            <AnimatePresence>
                {selected && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="bg-[var(--color-surface)] dark:bg-[#23272f] rounded-2xl p-8 max-w-lg w-full relative shadow-2xl">
                            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"><X size={28} /></button>
                            <Image src={selected.img} alt={selected.title} width={400} height={240} className="rounded-lg object-cover mb-4 border-2 border-[var(--color-accent)]" />
                            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2">{selected.title}</h3>
                            <span className="text-[var(--color-accent)] mb-2 text-sm">{selected.category}</span>
                            <p className="text-[var(--color-text-secondary)] mb-2">{selected.desc}</p>
                            <p className="text-[var(--color-text-secondary)] text-sm mb-2">Client: {selected.client}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Testimonials */}
            <section className="max-w-3xl mx-auto mt-20">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-semibold mb-8 text-[var(--color-accent)] text-center">What Our Clients Say</motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card flex flex-col items-center">
                            <Star className="text-gold mb-2" size={32} />
                            <p className="text-[var(--color-text-secondary)] text-center mb-2">"{t.text}"</p>
                            <span className="font-bold text-[var(--color-text)]">{t.name}</span>
                            <span className="text-[var(--color-accent)] text-sm">{t.company}</span>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
