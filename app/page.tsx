"use client";
import { motion } from "framer-motion";
import { Code, PenTool, FileText, BarChart2, Star, Users, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { icon: <Code size={32} />, title: "Web Development", desc: "Custom websites, e-commerce, and web apps built for performance and scalability." },
  { icon: <PenTool size={32} />, title: "Graphic Design", desc: "Logos, branding, and marketing materials that make your business stand out." },
  { icon: <FileText size={32} />, title: "Content Writing", desc: "Website copy, blogs, and marketing content that engages and converts." },
  { icon: <BarChart2 size={32} />, title: "Digital Marketing", desc: "SEO, social media, and PPC advertising to grow your online presence." },
];
const portfolio = [
  { img: "/portfolio1.jpg", title: "E-Commerce Redesign" },
  { img: "/portfolio2.jpg", title: "Brand Identity" },
  { img: "/portfolio3.jpg", title: "SEO Campaign" },
  { img: "/portfolio4.jpg", title: "Corporate Blog" },
  { img: "/portfolio5.jpg", title: "Mobile App UI" },
  { img: "/portfolio6.jpg", title: "Social Media Launch" },
];
const testimonials = [
  { name: "Emily R.", company: "RetailCo", text: "Divinity Tech delivered a stunning e-commerce site that boosted our sales by 40%. Highly recommended!" },
  { name: "James L.", company: "FinStart", text: "Their branding work set us apart in a crowded market. Professional, creative, and reliable." },
  { name: "Sara M.", company: "SaaSify", text: "Our SEO rankings soared thanks to their marketing expertise. Great team!" },
];
const clients = [
  { name: "RetailCo", logo: "/client1.svg" },
  { name: "FinStart", logo: "/client2.svg" },
  { name: "SaaSify", logo: "/client3.svg" },
  { name: "Bankly", logo: "/client4.svg" },
  { name: "MediaX", logo: "/client5.svg" },
  { name: "GlowUp", logo: "/client6.svg" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 px-4 md:px-16 py-20">
        <div className="flex-1 flex flex-col gap-6">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-5xl md:text-6xl font-extrabold text-[var(--color-text)] leading-tight">Transform Your Business with <span className="text-[var(--color-accent)]">Premium Digital Solutions</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-xl text-[var(--color-text-secondary)] max-w-xl">Divinity Tech is your partner for web development, design, content, and marketing. We help brands grow, innovate, and lead in the digital era.</motion.p>
          <div className="flex gap-4 mt-4">
            <Link href="/quote" className="px-8 py-3 rounded-full font-bold bg-[var(--color-accent)] text-white shadow hover:bg-[var(--color-accent-hover)] transition-transform">Get a Free Quote</Link>
            <Link href="/portfolio" className="px-8 py-3 rounded-full font-bold border-2 border-[var(--color-accent)] text-[var(--color-accent)] bg-white hover:bg-[var(--color-accent)] hover:text-white transition-colors">View Portfolio</Link>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.7 }} className="flex-1 flex items-center justify-center">
          <Image src="/hero-image.jpg" alt="Digital Solutions" width={480} height={400} className="rounded-3xl shadow-2xl object-cover border-4 border-[var(--color-accent)]" />
        </motion.div>
      </section>
      {/* Services Overview */}
      <section className="max-w-6xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-10 text-center text-[var(--color-accent)]">Our Services</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card flex flex-col items-center hover:scale-105 transition-transform">
              <span className="mb-3 text-[var(--color-accent)]">{s.icon}</span>
              <h3 className="text-xl font-bold mb-1 text-[var(--color-text)]">{s.title}</h3>
              <p className="text-[var(--color-text-secondary)] text-center text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Portfolio Preview */}
      <section className="max-w-6xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-10 text-center text-[var(--color-accent)]">Featured Projects</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolio.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card flex flex-col items-center hover:scale-105 transition-transform">
              <Image src={p.img} alt={p.title} width={240} height={160} className="rounded-lg object-cover mb-4 border-2 border-[var(--color-accent)]" />
              <h3 className="text-lg font-bold text-[var(--color-text)] mb-1">{p.title}</h3>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/portfolio" className="inline-block px-8 py-3 rounded-full font-bold border-2 border-[var(--color-accent)] text-[var(--color-accent)] bg-white hover:bg-[var(--color-accent)] hover:text-white transition-colors">See All Projects</Link>
        </div>
      </section>
      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-10 text-center text-[var(--color-accent)]">What Our Clients Say</motion.h2>
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
      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center mt-12">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-6 text-[var(--color-accent)]">Ready to Start Your Project?</motion.h2>
        <p className="text-lg text-[var(--color-text-secondary)] mb-6">Contact us today for a free consultation and discover how Divinity Tech can help your business thrive.</p>
        <Link href="/contact" className="inline-block px-8 py-3 rounded-full font-bold bg-[var(--color-accent)] text-white shadow hover:bg-[var(--color-accent-hover)] transition-transform">Contact Us</Link>
      </section>
      {/* Trust Indicators & Client Logos */}
      <section className="max-w-6xl mx-auto px-4 mt-16 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-3"><ShieldCheck className="text-[var(--color-accent)]" size={28} /><span className="font-bold text-lg text-[var(--color-text)]">100% Satisfaction Guarantee</span></div>
            <div className="flex items-center gap-3"><Users className="text-[var(--color-accent)]" size={28} /><span className="font-bold text-lg text-[var(--color-text)]">120+ Happy Clients</span></div>
            <div className="flex items-center gap-3"><Sparkles className="text-[var(--color-accent)]" size={28} /><span className="font-bold text-lg text-[var(--color-text)]">Award-Winning Agency</span></div>
          </div>
          <div className="flex-1 flex flex-wrap justify-center gap-6 mt-8 md:mt-0">
            {clients.map((c, i) => (
              <div key={c.name} className="bg-[var(--color-surface)] rounded-xl p-3 flex items-center justify-center shadow-md min-w-[100px] min-h-[60px]">
                <Image src={c.logo} alt={c.name} width={80} height={40} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
