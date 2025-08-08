"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, ExternalLink, Calendar, Users, Award, TrendingUp, Shield, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { categories, projects, testimonials } from "@/data/portfolio";
import { Project } from "@/types/types";

// Memoized color schemes for performance
const CATEGORY_COLORS = [
  { bg: '#dbeafe', text: '#2563eb', border: '#93c5fd' },
  { bg: '#dcfce7', text: '#16a34a', border: '#86efac' },
  { bg: '#f3e8ff', text: '#9333ea', border: '#c084fc' },
  { bg: '#fed7aa', text: '#ea580c', border: '#fdba74' }
] as const;

const TECH_COLORS = [
  { bg: '#dbeafe', text: '#2563eb' },
  { bg: '#dcfce7', text: '#16a34a' },
  { bg: '#f3e8ff', text: '#9333ea' },
  { bg: '#fed7aa', text: '#ea580c' }
] as const;

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  // Memoized filtered projects for performance
  const filteredProjects = useMemo(() => {
    return filter === "All" 
      ? projects 
      : projects.filter((p) => p.category === filter);
  }, [filter]);

  // Memoized trust indicators
  const trustIndicators = useMemo(() => [
    { icon: <Shield size={24} />, text: "100% Satisfaction Guarantee", color: '#16a34a' },
    { icon: <TrendingUp size={24} />, text: "Proven Results", color: '#3b82f6' },
    { icon: <Award size={24} />, text: "Award-Winning Team", color: '#9333ea' }
  ], []);

  // Event handlers
  const handleFilterChange = useCallback((category: string) => {
    setFilter(category);
  }, []);

  const handleProjectSelect = useCallback((project: Project) => {
    setSelected(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelected(null);
  }, []);

  // Keyboard event handler for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selected) {
        handleCloseModal();
      }
    };

    if (selected) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selected, handleCloseModal]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Hero Section - Enhanced */}
      <section 
        className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden" 
        style={{ backgroundColor: 'var(--color-surface)' }}
        aria-labelledby="hero-heading"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border-2"
            style={{
              backgroundColor: '#f3e8ff',
              color: '#9333ea',
              borderColor: '#c084fc'
            }}
          >
            <Award size={16} aria-hidden="true" />
            <span>Award-Winning Digital Solutions</span>
          </div>
          
          <motion.h1 
            id="hero-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ color: 'var(--color-text)' }}
          >
            Our <span style={{ color: '#3b82f6' }}>Portfolio</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Discover how we've helped businesses transform their digital presence and achieve remarkable growth through innovative design and strategic solutions.
          </motion.p>

          {/* Filter Buttons - Enhanced */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-wrap gap-3 justify-center"
            role="tablist"
            aria-label="Portfolio category filters"
          >
            {categories.map((cat, index) => {
              const color = CATEGORY_COLORS[index % CATEGORY_COLORS.length];
              
              return (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 text-sm hover:scale-105 ${
                    filter === cat
                      ? "shadow-lg scale-105"
                      : "hover:shadow-md"
                  }`}
                  style={{
                    backgroundColor: filter === cat ? color.text : 'var(--color-background)',
                    color: filter === cat ? 'white' : color.text,
                    borderColor: color.border
                  }}
                  role="tab"
                  aria-selected={filter === cat}
                  aria-label={`Filter by ${cat} category`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid - Enhanced */}
      <section 
        className="px-4 md:px-8 lg:px-16 pb-20"
        aria-labelledby="portfolio-grid-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2 id="portfolio-grid-heading" className="sr-only">
            Portfolio Projects Grid
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const color = CATEGORY_COLORS[index % CATEGORY_COLORS.length];
              
              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border-2 hover:scale-105"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)'
                  }}
                  onClick={() => handleProjectSelect(project)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${project.title} project`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleProjectSelect(project);
                    }
                  }}
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={project.image || "/placeholder.svg?height=320&width=480&query=project showcase"}
                        alt={`${project.title} - ${project.category} project showcase`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold border-2"
                        style={{
                          backgroundColor: color.bg,
                          color: color.text,
                          borderColor: color.border
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div
                        className="backdrop-blur-sm rounded-full p-2 border-2"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          borderColor: color.text
                        }}
                        aria-hidden="true"
                      >
                        <ExternalLink size={16} style={{ color: color.text }} />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors" style={{ color: 'var(--color-text)' }}>
                      {project.title}
                    </h3>
                    <p className="mb-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {project.desc}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span style={{ color: 'var(--color-text-secondary)' }}>
                        Client: {project.client}
                      </span>
                      <span className="font-medium flex items-center gap-1" style={{ color: color.text }}>
                        View Details
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Modal - Enhanced */}
      <AnimatePresence>
        {selected && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)'
              }}
            >
              <div className="relative">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={selected.image || "/placeholder.svg?height=450&width=800&query=project showcase"}
                    alt={`${selected.title} - detailed project view`}
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 rounded-full p-2 transition-colors border-2"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderColor: 'var(--color-border)'
                  }}
                  aria-label="Close project details modal"
                >
                  <X size={20} style={{ color: 'var(--color-text)' }} />
                </button>
                
                <div className="absolute bottom-4 left-6">
                  <span
                    className="text-white px-4 py-2 rounded-full text-sm font-semibold border-2"
                    style={{
                      backgroundColor: '#3b82f6',
                      borderColor: '#93c5fd'
                    }}
                  >
                    {selected.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 
                      id="modal-title"
                      className="text-3xl font-bold mb-4" 
                      style={{ color: 'var(--color-text)' }}
                    >
                      {selected.title}
                    </h2>
                    <p 
                      id="modal-description"
                      className="text-lg leading-relaxed mb-6" 
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {selected.desc}
                    </p>

                    <div
                      className="rounded-xl p-4 mb-6 border-2"
                      style={{
                        backgroundColor: '#dcfce7',
                        borderColor: '#bbf7d0'
                      }}
                    >
                      <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#16a34a' }}>
                        <TrendingUp size={20} aria-hidden="true" />
                        Key Results
                      </h4>
                      <p style={{ color: '#15803d' }}>{selected.results}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selected.technologies.map((tech, index) => {
                          const color = TECH_COLORS[index % TECH_COLORS.length];
                          
                          return (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full text-sm font-medium border"
                              style={{
                                backgroundColor: color.bg,
                                color: color.text,
                                borderColor: color.text
                              }}
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div
                      className="rounded-xl p-4 border-2"
                      style={{
                        backgroundColor: 'var(--color-muted)',
                        borderColor: 'var(--color-border)'
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Users size={16} style={{ color: '#3b82f6' }} aria-hidden="true" />
                        <span className="font-semibold" style={{ color: 'var(--color-text)' }}>Client</span>
                      </div>
                      <p style={{ color: 'var(--color-text-secondary)' }}>{selected.client}</p>
                    </div>

                    <div
                      className="rounded-xl p-4 border-2"
                      style={{
                        backgroundColor: 'var(--color-muted)',
                        borderColor: 'var(--color-border)'
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} style={{ color: '#16a34a' }} aria-hidden="true" />
                        <span className="font-semibold" style={{ color: 'var(--color-text)' }}>Duration</span>
                      </div>
                      <p style={{ color: 'var(--color-text-secondary)' }}>{selected.duration}</p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                      aria-label={`View live project: ${selected.title}`}
                    >
                      <ExternalLink size={18} aria-hidden="true" />
                      View Live Project
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Testimonials Section - Enhanced */}
      <section 
        className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden" 
        style={{ backgroundColor: '#1e293b' }}
        aria-labelledby="testimonials-heading"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border-2"
              style={{
                backgroundColor: '#dcfce7',
                color: '#16a34a',
                borderColor: '#bbf7d0'
              }}
            >
              <Star size={16} aria-hidden="true" />
              <span>Client Success Stories</span>
            </div>
            <h2 
              id="testimonials-heading"
              className="text-4xl font-bold text-white mb-4"
            >
              What Our Clients Say
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <div className="flex mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-white mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-slate-300 text-sm">{testimonial.position}</p>
                  <p className="text-slate-400 text-sm">{testimonial.company}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section 
        className="py-20 px-4 md:px-8 lg:px-16" 
        style={{ backgroundColor: 'var(--color-surface)' }}
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border-2"
              style={{
                backgroundColor: '#dbeafe',
                color: '#2563eb',
                borderColor: '#93c5fd'
              }}
            >
              <Sparkles size={16} aria-hidden="true" />
              <span>Ready to Get Started?</span>
            </div>
            
            <h2 
              id="cta-heading"
              className="text-4xl font-bold mb-6" 
              style={{ color: 'var(--color-text)' }}
            >
              Ready to Start Your <span style={{ color: '#3b82f6' }}>Project</span>?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Let's discuss how we can help transform your business with innovative digital solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 no-underline"
                aria-label="Start your project with us"
              >
                Start Your Project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-blue-200 hover:border-blue-400 bg-white hover:bg-blue-50 text-blue-700 hover:text-blue-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md no-underline"
                aria-label="Learn about our process"
              >
                View Our Process
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {trustIndicators.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-center gap-3 rounded-xl p-4 border-2"
                  style={{
                    backgroundColor: 'var(--color-background)',
                    borderColor: 'var(--color-border)'
                  }}
                >
                  <div style={{ color: item.color }} aria-hidden="true">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
