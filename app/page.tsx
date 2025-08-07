"use client";

import { motion } from "framer-motion";
import { Code, PenTool, FileText, BarChart2, Star, Users, ShieldCheck, Sparkles, Calendar, ArrowRight, ExternalLink, Quote } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { services, portfolioPreview, testimonials, clients, trustIndicators } from "@/data/home";
import HeroCarousel from "@/components/HeroCarousel";

const iconMap = {
  code: Code,
  palette: PenTool,
  "file-text": FileText,
  "bar-chart": BarChart2,
  "shield-check": ShieldCheck,
  users: Users,
  sparkles: Sparkles,
  calendar: Calendar
};

const colorMap = {
  blue: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
  purple: "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
  green: "from-green-500 to-green-600 dark:from-green-400 dark:to-green-500",
  orange: "from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500"
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Professional Hero - Clean & Elegant */}
      <HeroCarousel />

      {/* Services Overview */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[var(--color-accent)]/20">
              <Sparkles size={16} />
              <span>Our Expertise</span>
            </div>
            <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">Our Services</h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Comprehensive digital solutions designed to elevate your business and drive measurable results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              const gradientClass = colorMap[service.color as keyof typeof colorMap];
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-[var(--color-surface)] rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 hover:-translate-y-2"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${gradientClass} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">{service.title}</h3>
                  <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                        <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">Featured Projects</h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Discover some of our recent work and see how we've helped businesses achieve their digital goals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioPreview.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-[var(--color-background)] rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image 
                      src={project.image || "/placeholder.svg?height=240&width=320&query=project showcase"} 
                      alt={project.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[var(--color-accent)] px-3 py-1 rounded-full text-xs font-semibold border border-[var(--color-accent)]/20">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <ExternalLink size={16} className="text-[var(--color-accent)]" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              See All Projects
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">What Our Clients Say</h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about working with us.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--color-surface)] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--color-border)] relative"
              >
                <Quote size={24} className="text-[var(--color-accent)] mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">"{testimonial.text}"</p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden">
                    <Image 
                      src={testimonial.avatar || "/placeholder.svg?height=48&width=48&query=professional headshot"} 
                      alt={testimonial.name} 
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--color-text)]">{testimonial.name}</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">{testimonial.position}</p>
                    <p className="text-sm text-[var(--color-accent)]">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators & Client Logos - Professional Redesign */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto">
          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">
              Why Choose <span className="text-[var(--color-accent)]">Divinity Tech</span>?
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results for your business.
            </p>
          </motion.div>

          {/* Trust Indicators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {trustIndicators.map((indicator, index) => {
              const IconComponent = iconMap[indicator.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={indicator.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--color-background)] rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-[var(--color-border)] group hover:border-[var(--color-accent)]/30"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-accent)]/10 rounded-2xl mb-4 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                    <IconComponent size={32} className="text-[var(--color-accent)]" />
                  </div>
                  <div className="text-3xl font-bold text-[var(--color-text)] mb-2">{indicator.value}</div>
                  <div className="text-lg font-semibold text-[var(--color-text)] mb-2">{indicator.title}</div>
                  <div className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{indicator.description}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-8">Trusted by Leading Brands</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {clients.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[var(--color-background)] rounded-xl p-4 flex items-center justify-center hover:shadow-md transition-all duration-300 border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 group"
                >
                  <div className="w-20 h-12 relative">
                    <Image 
                      src={client.logo || "/placeholder.svg?height=48&width=80&query=company logo"} 
                      alt={client.name} 
                      fill
                      sizes="80px"
                      className="object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold text-[var(--color-text)] mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how Divinity Tech can help your business thrive in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Contact Us Today
                <ArrowRight size={18} />
              </Link>
              <Link 
                href="/quote" 
                className="border-2 border-[var(--color-border)] text-[var(--color-text)] px-8 py-4 rounded-xl font-semibold hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
