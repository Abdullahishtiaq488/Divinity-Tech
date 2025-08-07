"use client";
import { motion } from "framer-motion";
import { Code, PenTool, FileText, BarChart2, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
    {
        icon: <Code size={32} />,
        title: "Web Development",
        desc: "Custom websites, e-commerce, and web apps built for performance and scalability.",
        includes: ["Responsive Design", "E-commerce", "Web Apps", "API Integration", "SEO Optimization"],
        price: "$3,000+",
        portfolio: ["/portfolio1.jpg", "/portfolio2.jpg"],
    },
    {
        icon: <PenTool size={32} />,
        title: "Graphic Design",
        desc: "Logos, branding, and marketing materials that make your business stand out.",
        includes: ["Logo Design", "Brand Identity", "Print Materials", "Social Graphics", "Packaging"],
        price: "$1,500+",
        portfolio: ["/portfolio3.jpg", "/portfolio4.jpg"],
    },
    {
        icon: <FileText size={32} />,
        title: "Content Writing",
        desc: "Website copy, blogs, and marketing content that engages and converts.",
        includes: ["Website Copy", "Blog Posts", "Ad Copy", "Product Descriptions", "Editing & Proofreading"],
        price: "$800+",
        portfolio: ["/portfolio5.jpg", "/portfolio6.jpg"],
    },
    {
        icon: <BarChart2 size={32} />,
        title: "Digital Marketing",
        desc: "SEO, social media, and PPC advertising to grow your online presence.",
        includes: ["SEO", "Social Media", "PPC", "Email Marketing", "Analytics"],
        price: "$1,200+",
        portfolio: ["/portfolio7.jpg", "/portfolio8.jpg"],
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] py-12 px-4 md:px-12">
            {/* Hero */}
            <section className="mb-16 text-center">
                <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text)]">Our Premium Services</motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">From web development to digital marketing, Divinity Tech delivers end-to-end solutions that drive results and elevate your brand.</motion.p>
            </section>
            {/* Services Breakdown */}
            <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                {services.map((service, i) => (
                    <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card flex flex-col gap-4 hover:scale-105 transition-transform">
                        <div className="flex items-center gap-4 mb-2">
                            <span className="text-[var(--color-accent)]">{service.icon}</span>
                            <h2 className="text-2xl font-bold text-[var(--color-text)]">{service.title}</h2>
                        </div>
                        <p className="text-[var(--color-text-secondary)] mb-2">{service.desc}</p>
                        <ul className="mb-2 grid grid-cols-2 gap-2">
                            {service.includes.map((item) => (
                                <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"><CheckCircle size={16} className="text-[var(--color-accent)]" />{item}</li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-4">
                            <span className="bg-[var(--color-muted)] text-[var(--color-text)] font-bold px-4 py-1 rounded-full text-sm shadow">{service.price}</span>
                            <a href="/quote" className="ml-auto inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[var(--color-accent-hover)] transition-colors">Get Quote <ArrowRight size={16} /></a>
                        </div>
                        {/* Portfolio Examples */}
                        <div className="flex gap-4 mt-4">
                            {service.portfolio.map((img, idx) => (
                                <Image key={img} src={img} alt={service.title + " example " + (idx + 1)} width={80} height={80} className="rounded-lg object-cover border-2 border-[var(--color-accent)]" />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </section>
            {/* Process */}
            <section className="mb-16 max-w-5xl mx-auto">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-semibold mb-8 text-[var(--color-accent)]">How We Work</motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { icon: <CheckCircle size={32} />, title: "Consult", desc: "We understand your needs and goals." },
                        { icon: <PenTool size={32} />, title: "Plan", desc: "We strategize and design a custom solution." },
                        { icon: <Code size={32} />, title: "Build", desc: "We develop and iterate with your feedback." },
                        { icon: <BarChart2 size={32} />, title: "Grow", desc: "We launch, optimize, and support your success." },
                    ].map((step, i) => (
                        <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card flex flex-col items-center">
                            <div className="mb-3 text-[var(--color-accent)]">{step.icon}</div>
                            <h4 className="font-bold text-lg mb-1 text-[var(--color-text)]">{step.title}</h4>
                            <p className="text-[var(--color-text-secondary)] text-center text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* CTA */}
            <section className="text-center">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-semibold mb-4 text-[var(--color-accent)]">Ready to Elevate Your Brand?</motion.h2>
                <a href="/quote" className="inline-block bg-[var(--color-accent)] text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-[var(--color-accent-hover)] transition-transform">Get a Free Quote</a>
            </section>
        </div>
    );
}
