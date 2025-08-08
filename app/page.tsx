"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, PenTool, FileText, BarChart2, Star, Users, ShieldCheck, Sparkles, Calendar, ArrowRight, ExternalLink, Quote, X, CheckCircle, DollarSign, Clock } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { services, portfolioPreview, testimonials, clients, trustIndicators } from "@/data/home";
import { Service } from "@/types/home";

// Dynamically import HeroCarousel to reduce initial bundle size
const HeroCarousel = dynamic(() => import("@/components/HeroCarousel"), {
  loading: () => (
    <section className="relative h-screen min-h-[600px] max-h-[900px] bg-gray-900 flex items-center justify-center">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-700 rounded w-64 mb-4"></div>
        <div className="h-4 bg-gray-700 rounded w-48"></div>
      </div>
    </section>
  ),
  ssr: false
});

// Memoized icon mapping for performance
const iconMap = {
  code: Code,
  palette: PenTool,
  "file-text": FileText,
  "bar-chart": BarChart2,
  "shield-check": ShieldCheck,
  users: Users,
  sparkles: Sparkles,
  calendar: Calendar
} as const;

const colorMap = {
  blue: { bg: '#dbeafe', text: '#2563eb', border: '#93c5fd' },
  purple: { bg: '#f3e8ff', text: '#9333ea', border: '#c084fc' },
  green: { bg: '#dcfce7', text: '#16a34a', border: '#86efac' },
  orange: { bg: '#fed7aa', text: '#ea580c', border: '#fdba74' }
} as const;

export default function OptimizedHomePage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Memoized icon getter for performance
  const getIcon = useCallback((iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent size={28} /> : <Code size={28} />;
  }, []);

  // Memoized service modal handler
  const handleServiceSelect = useCallback((service: Service) => {
    setSelectedService(service);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  // Memoized color calculations
  const portfolioColors = useMemo(() => [
    { bg: '#dbeafe', text: '#2563eb' },
    { bg: '#dcfce7', text: '#16a34a' },
    { bg: '#f3e8ff', text: '#9333ea' },
    { bg: '#fed7aa', text: '#ea580c' }
  ], []);

  const trustIndicatorColors = useMemo(() => [
    { bg: '#dbeafe', text: '#2563eb', border: '#93c5fd' },
    { bg: '#dcfce7', text: '#16a34a', border: '#86efac' },
    { bg: '#f3e8ff', text: '#9333ea', border: '#c084fc' },
    { bg: '#fed7aa', text: '#ea580c', border: '#fdba74' }
  ], []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Professional Hero - Clean & Elegant */}
      <HeroCarousel />

      {/* Services Overview - Enhanced */}
      <section 
        className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
        aria-labelledby="services-heading"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border-2"
              style={{ 
                backgroundColor: '#f3e8ff', 
                color: '#9333ea', 
                borderColor: '#c084fc' 
              }}
            >
              <Sparkles size={16} aria-hidden="true" />
              <span>Our Expertise</span>
            </div>
            <h2 
              id="services-heading"
              className="text-4xl font-bold mb-4" 
              style={{ color: 'var(--color-text)' }}
            >
              Our <span style={{ color: '#3b82f6' }}>Services</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Comprehensive digital solutions designed to elevate your business and drive measurable results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              const color = colorMap[service.color as keyof typeof colorMap];
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border-2 hover:-translate-y-2 cursor-pointer"
                  style={{ 
                    backgroundColor: 'var(--color-surface)', 
                    borderColor: 'var(--color-border)' 
                  }}
                  onClick={() => handleServiceSelect(service)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Learn more about ${service.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleServiceSelect(service);
                    }
                  }}
                >
                  <div 
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 border-2"
                    style={{ 
                      backgroundColor: color.bg, 
                      color: color.text, 
                      borderColor: color.border 
                    }}
                    aria-hidden="true"
                  >
                    <IconComponent />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                    {service.title}
                  </h3>
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2" role="list">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        <div 
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0" 
                          style={{ backgroundColor: color.text }}
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--color-border)' }}>
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>Learn More</span>
                    <ArrowRight 
                      size={16} 
                      className="group-hover:translate-x-1 transition-transform" 
                      style={{ color: color.text }}
                      aria-hidden="true"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl no-underline"
              style={{ backgroundColor: '#3b82f6' }}
              aria-label="View all our services"
            >
              View All Services
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
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
              <div className="relative p-8">
                <button
                  onClick={handleCloseModal}
                  className="absolute top-6 right-6 rounded-full p-2 transition-colors border-2"
                  style={{ 
                    backgroundColor: 'var(--color-muted)', 
                    borderColor: 'var(--color-border)' 
                  }}
                  aria-label="Close service details modal"
                >
                  <X size={20} style={{ color: 'var(--color-text)' }} />
                </button>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div style={{ color: '#3b82f6' }} aria-hidden="true">
                        {getIcon(selectedService.icon)}
                      </div>
                      <h2 
                        id="modal-title"
                        className="text-3xl font-bold" 
                        style={{ color: 'var(--color-text)' }}
                      >
                        {selectedService.title}
                      </h2>
                    </div>
                    
                    <p 
                      id="modal-description"
                      className="text-lg leading-relaxed mb-8" 
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {selectedService.longDescription}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                          What's Included
                        </h4>
                        <ul className="space-y-2" role="list">
                          {selectedService.includes.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                              <CheckCircle size={16} style={{ color: '#16a34a' }} aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3" style={{ color: 'var(--color-text)' }}>
                          Key Benefits
                        </h4>
                        <ul className="space-y-2" role="list">
                          {selectedService.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                              <Star size={16} style={{ color: '#3b82f6' }} aria-hidden="true" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {selectedService.portfolio.map((image, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden border-2" style={{ borderColor: 'var(--color-border)' }}>
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${selectedService.title} portfolio example ${index + 1}`}
                            width={300}
                            height={200}
                            className="w-full h-32 object-cover"
                            loading="lazy"
                            quality={80}
                            sizes="(max-width: 768px) 50vw, 150px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div 
                      className="rounded-xl p-6 border-2"
                      style={{ 
                        backgroundColor: '#dbeafe', 
                        borderColor: '#93c5fd' 
                      }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <DollarSign size={20} style={{ color: '#3b82f6' }} aria-hidden="true" />
                        <span className="font-semibold" style={{ color: 'var(--color-text)' }}>Starting Price</span>
                      </div>
                      <div className="text-3xl font-bold mb-2" style={{ color: '#3b82f6' }}>
                        {selectedService.price}
                      </div>
                      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        Custom pricing based on project scope
                      </p>
                    </div>

                    <div 
                      className="rounded-xl p-6 border-2"
                      style={{ 
                        backgroundColor: 'var(--color-muted)', 
                        borderColor: 'var(--color-border)' 
                      }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Clock size={20} style={{ color: 'var(--color-text-secondary)' }} aria-hidden="true" />
                        <span className="font-semibold" style={{ color: 'var(--color-text)' }}>Timeline</span>
                      </div>
                      <div className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                        {selectedService.duration}
                      </div>
                      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        Typical project duration
                      </p>
                    </div>

                    <Link
                      href="/quote"
                      className="block w-full text-center text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all duration-300 no-underline"
                      style={{ backgroundColor: '#3b82f6' }}
                      aria-label={`Get started with ${selectedService.title}`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Portfolio Preview - Enhanced */}
      <section 
        className="py-20 px-4 md:px-8 lg:px-16" 
        style={{ backgroundColor: 'var(--color-surface)' }}
        aria-labelledby="portfolio-heading"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              id="portfolio-heading"
              className="text-4xl font-bold mb-4" 
              style={{ color: 'var(--color-text)' }}
            >
              Featured <span style={{ color: '#3b82f6' }}>Projects</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Discover some of our recent work and see how we've helped businesses achieve their digital goals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioPreview.map((project, index) => {
              const color = portfolioColors[index % portfolioColors.length];
              
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 hover:scale-105"
                  style={{ 
                    backgroundColor: 'var(--color-background)', 
                    borderColor: 'var(--color-border)' 
                  }}
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image 
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} - ${project.category} project showcase`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        quality={80}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="absolute top-4 left-4">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-semibold border-2"
                        style={{ 
                          backgroundColor: color.bg, 
                          color: color.text, 
                          borderColor: color.text 
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div 
                        className="bg-white/90 backdrop-blur-sm rounded-full p-2 border-2" 
                        style={{ borderColor: color.text }}
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
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {project.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/portfolio"
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl no-underline"
              style={{ backgroundColor: '#3b82f6' }}
              aria-label="View all our projects"
            >
              See All Projects
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section 
        className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
        aria-labelledby="testimonials-heading"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-20 right-20 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1500"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              id="testimonials-heading"
              className="text-4xl font-bold mb-4" 
              style={{ color: 'var(--color-text)' }}
            >
              What Our <span style={{ color: '#3b82f6' }}>Clients Say</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Don't just take our word for it. Here's what our clients say about working with us.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 relative"
                style={{ 
                  backgroundColor: 'var(--color-surface)', 
                  borderColor: 'var(--color-border)' 
                }}
              >
                <Quote size={24} className="mb-4" style={{ color: '#3b82f6' }} aria-hidden="true" />
                
                <div className="flex mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" aria-hidden="true" />
                  ))}
                </div>
                
                <blockquote className="mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden border-2" style={{ borderColor: '#3b82f6' }}>
                    <Image 
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={`${testimonial.name} - ${testimonial.position} at ${testimonial.company}`}
                      fill
                      sizes="48px"
                      className="object-cover"
                      loading="lazy"
                      quality={80}
                    />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: 'var(--color-text)' }}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      {testimonial.position}
                    </p>
                    <p className="text-sm" style={{ color: '#3b82f6' }}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators & Client Logos - Enhanced */}
      <section 
        className="py-20 px-4 md:px-8 lg:px-16" 
        style={{ backgroundColor: 'var(--color-surface)' }}
        aria-labelledby="trust-heading"
      >
        <div className="max-w-7xl mx-auto">
          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              id="trust-heading"
              className="text-4xl font-bold mb-4" 
              style={{ color: 'var(--color-text)' }}
            >
              Why Choose <span style={{ color: '#3b82f6' }}>Devnity Tech</span>?
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              We combine expertise, innovation, and dedication to deliver exceptional results for your business.
            </p>
          </motion.div>

          {/* Trust Indicators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {trustIndicators.map((indicator, index) => {
              const IconComponent = iconMap[indicator.icon as keyof typeof iconMap];
              const color = trustIndicatorColors[index % trustIndicatorColors.length];
              
              return (
                <motion.div
                  key={indicator.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 border-2 group"
                  style={{ 
                    backgroundColor: 'var(--color-background)', 
                    borderColor: 'var(--color-border)' 
                  }}
                >
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 border-2"
                    style={{ 
                      backgroundColor: color.bg, 
                      color: color.text, 
                      borderColor: color.border 
                    }}
                    aria-hidden="true"
                  >
                    <IconComponent size={32} />
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                    {indicator.value}
                  </div>
                  <div className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
                    {indicator.title}
                  </div>
                  <div className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {indicator.description}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-text)' }}>
              Trusted by Leading Brands
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {clients.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl p-4 flex items-center justify-center hover:shadow-md transition-all duration-300 border-2 group"
                  style={{ 
                    backgroundColor: 'var(--color-background)', 
                    borderColor: 'var(--color-border)' 
                  }}
                >
                  <div className="w-20 h-12 relative">
                    <Image 
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} company logo`}
                      fill
                      sizes="80px"
                      className="object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                      quality={80}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA - Enhanced */}
      <section 
        className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
        aria-labelledby="cta-heading"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 
              id="cta-heading"
              className="text-4xl font-bold mb-6" 
              style={{ color: 'var(--color-text)' }}
            >
              Ready to Start Your <span style={{ color: '#3b82f6' }}>Project</span>?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Contact us today for a free consultation and discover how Devnity Tech can help your business thrive in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 no-underline"
                style={{ backgroundColor: '#3b82f6' }}
                aria-label="Contact us for a free consultation"
              >
                Contact Us Today
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link 
                href="/quote"
                className="border-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 no-underline"
                style={{ 
                  borderColor: 'var(--color-border)', 
                  color: 'var(--color-text)' 
                }}
                aria-label="Get a free project quote"
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
