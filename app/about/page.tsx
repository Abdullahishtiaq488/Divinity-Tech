"use client";

import { motion } from "framer-motion";
import { Users, Award, Briefcase, TrendingUp, Search, Palette, Code, Rocket, Calendar, Star, ArrowRight, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import Image from "next/image";
import { companyInfo, teamMembers, processSteps, statistics } from "@/data/about";

const iconMap = {
  search: Search,
  palette: Palette, 
  code: Code,
  rocket: Rocket,
  briefcase: Briefcase,
  users: Users,
  calendar: Calendar,
  award: Award
};

const colorMap = {
  blue: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
  purple: "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500", 
  green: "from-green-500 to-green-600 dark:from-green-400 dark:to-green-500",
  orange: "from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500"
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface)] via-[var(--color-background)] to-[var(--color-surface)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[var(--color-accent)]/20">
                <Star size={16} />
                <span>Founded in {companyInfo.founded}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-[var(--color-text)] mb-6 leading-tight">
                Meet <span className="text-[var(--color-accent)]">Divinity Tech</span>
              </h1>
              
              <p className="text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                {companyInfo.mission}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  Get to Know Us
                  <ArrowRight size={18} />
                </button>
                <button className="border-2 border-[var(--color-border)] text-[var(--color-text)] px-8 py-4 rounded-xl font-semibold hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300">
                  Our Work
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--color-border)]">
                <div className="aspect-[4/3] relative">
                  <Image 
                    src="/team-photo.png" 
                    alt="Divinity Tech Team" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-[var(--color-surface)] rounded-2xl p-4 shadow-xl border border-[var(--color-border)]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-[var(--color-text)]">Active Projects</span>
                </div>
                <p className="text-2xl font-bold text-[var(--color-text)]">25+</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story & Values */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-[var(--color-text)] mb-6">Our Story</h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                {companyInfo.story}
              </p>
              
              <div className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]">
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-4">Our Vision</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">{companyInfo.vision}</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-[var(--color-text)] mb-6">Our Values</h3>
              <div className="space-y-4">
                {companyInfo.values.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-[var(--color-surface)] rounded-xl p-4 shadow-sm border border-[var(--color-border)] hover:shadow-md transition-shadow"
                  >
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-[var(--color-text)] font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics - Professional Clean Design */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[var(--color-accent)]/20">
              <Award size={16} />
              <span>Our Achievements</span>
            </div>
            <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">By the Numbers</h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Our track record speaks for itself. Here's what we've achieved together with our clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--color-background)] rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-[var(--color-border)] group hover:border-[var(--color-accent)]/30"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-accent)]/10 rounded-2xl mb-4 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                    <IconComponent size={32} className="text-[var(--color-accent)]" />
                  </div>
                  <div className="text-3xl font-bold text-[var(--color-text)] mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-[var(--color-text)] mb-2">{stat.label}</div>
                  <div className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{stat.description}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">Meet Our Team</h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              The talented individuals behind our success. Each team member brings unique expertise and passion to every project.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-[var(--color-surface)] rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent)]/50"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image 
                      src={member.image || "/placeholder.svg?height=300&width=400&query=professional headshot"} 
                      alt={member.name} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={member.linkedin} className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                      <Linkedin size={16} className="text-[var(--color-accent)]" />
                    </a>
                    <a href={member.twitter} className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                      <Twitter size={16} className="text-blue-400" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-1">{member.name}</h3>
                  <p className="text-[var(--color-accent)] font-medium mb-3">{member.role}</p>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">Our Process</h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              A proven methodology that ensures every project is delivered on time, on budget, and exceeds expectations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap];
              const gradientClass = colorMap[step.color as keyof typeof colorMap];
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative bg-[var(--color-background)] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--color-border)] group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-[var(--color-text)] text-[var(--color-background)] rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${gradientClass} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">{step.title}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[var(--color-text)] mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help transform your business with innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight size={18} />
              </button>
              <button className="border-2 border-[var(--color-border)] text-[var(--color-text)] px-8 py-4 rounded-xl font-semibold hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
