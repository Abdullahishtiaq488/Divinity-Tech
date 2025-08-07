"use client";
// About page for Divinity Tech
import { motion } from "framer-motion";
import { Users, Award, Briefcase, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] py-12 px-4 md:px-12">
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <Image src="/team-photo.jpg" alt="Divinity Tech Team" width={400} height={300} className="rounded-2xl shadow-xl object-cover w-full md:w-1/2" />
                <div className="flex-1">
                    <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text)]">Meet Divinity Tech</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-xl">We are a passionate team of digital experts dedicated to transforming businesses with innovative technology, creative design, and strategic marketing. Our mission is to empower brands to thrive in the digital age.</motion.p>
                </div>
            </section>
            {/* Company Story & Mission */}
            <section className="mb-16 max-w-4xl mx-auto">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-semibold mb-4 text-[var(--color-accent)]">Our Story</motion.h2>
                <p className="text-lg text-[var(--color-text-secondary)] mb-4">Founded in 2017, Divinity Tech has grown from a small creative studio into a full-service digital agency trusted by clients worldwide. Our journey is fueled by a relentless pursuit of excellence, a love for technology, and a commitment to client success.</p>
                <p className="text-lg text-[var(--color-text-secondary)]">We believe in building lasting partnerships, delivering measurable results, and making a positive impact through every project we undertake.</p>
            </section>
            {/* Team Members */}
            <section className="mb-16">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-semibold mb-8 text-[var(--color-accent)]">Meet Our Team</motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Team cards */}
                    {[
                        { name: "Ava Carter", role: "CEO & Founder", img: "/team1.jpg", bio: "Visionary leader with 15+ years in digital innovation." },
                        { name: "Liam Patel", role: "Lead Developer", img: "/team2.jpg", bio: "Full-stack expert passionate about scalable web solutions." },
                        { name: "Sophia Kim", role: "Creative Director", img: "/team3.jpg", bio: "Award-winning designer crafting stunning brand experiences." },
                        { name: "Noah Smith", role: "Marketing Strategist", img: "/team4.jpg", bio: "Growth hacker specializing in digital campaigns and SEO." },
                        { name: "Mia Chen", role: "Content Lead", img: "/team5.jpg", bio: "Storyteller and copywriter with a knack for engagement." },
                        { name: "Ethan Brown", role: "UI/UX Designer", img: "/team6.jpg", bio: "User advocate focused on intuitive, beautiful interfaces." },
                    ].map((member, i) => (
                        <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card flex flex-col items-center hover:scale-105 transition-transform">
                            <Image src={member.img} alt={member.name} width={96} height={96} className="rounded-full mb-4 object-cover border-4 border-[var(--color-accent)]" />
                            <h3 className="text-xl font-bold mb-1 text-[var(--color-text)]">{member.name}</h3>
                            <p className="text-[var(--color-accent)] mb-1">{member.role}</p>
                            <p className="text-[var(--color-text-secondary)] text-center text-sm">{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* Our Process */}
            <section className="mb-16 max-w-5xl mx-auto">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-semibold mb-8 text-[var(--color-accent)]">Our Process</motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { icon: <Award size={32} />, title: "Discover", desc: "We listen, research, and understand your goals." },
                        { icon: <Briefcase size={32} />, title: "Design", desc: "We craft beautiful, functional solutions." },
                        { icon: <TrendingUp size={32} />, title: "Develop", desc: "We build with the latest tech for performance." },
                        { icon: <Users size={32} />, title: "Deliver", desc: "We launch, support, and help you grow." },
                    ].map((step, i) => (
                        <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card flex flex-col items-center">
                            <div className="mb-3 text-[var(--color-accent)]">{step.icon}</div>
                            <h4 className="font-bold text-lg mb-1 text-[var(--color-text)]">{step.title}</h4>
                            <p className="text-[var(--color-text-secondary)] text-center text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* Statistics */}
            <section className="max-w-4xl mx-auto mb-8">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-semibold mb-8 text-[var(--color-accent)]">By the Numbers</motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Projects", value: "250+" },
                        { label: "Clients", value: "120+" },
                        { label: "Years Experience", value: "7+" },
                        { label: "Awards", value: "15" },
                    ].map((stat, i) => (
                        <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card flex flex-col items-center">
                            <span className="text-3xl font-bold text-[var(--color-text)] mb-2">{stat.value}</span>
                            <span className="text-[var(--color-text-secondary)] text-sm">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
