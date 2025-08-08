"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, HelpCircle, Send, CheckCircle, ExternalLink, Award, Users, Zap, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import Image from "next/image";
import { contactMethods, serviceOptions, faqs, officeHours } from "@/data/contact";
import { ContactFormData } from "@/types/contact";

// Icon mapping
const iconMap = {
  Mail: Mail,
  Phone: Phone,
  MapPin: MapPin,
  Clock: Clock,
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent size={24} /> : <Mail size={24} />;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        timeline: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Hero Section - Enhanced with animated background */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16 overflow-hidden" style={{ backgroundColor: 'var(--color-surface)' }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border-2" 
               style={{ 
                 backgroundColor: 'rgba(34, 197, 94, 0.1)', 
                 color: '#22c55e', 
                 borderColor: 'rgba(34, 197, 94, 0.3)' 
               }}>
            <Users size={16} />
            <span>Let's Work Together</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ color: 'var(--color-text)' }}
          >
            Get In <span style={{ color: '#3b82f6' }}>Touch</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Ready to transform your digital presence? We're here to help you succeed. 
            Reach out and our team will respond within 1 business day.
          </motion.p>

          {/* Trust Indicators - Enhanced with individual colors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Zap size={32} />, text: "Fast Response", bgColor: '#fef3c7', textColor: '#d97706', borderColor: '#fbbf24' },
              { icon: <Shield size={32} />, text: "Secure & Private", bgColor: '#dcfce7', textColor: '#16a34a', borderColor: '#22c55e' },
              { icon: <Award size={32} />, text: "Expert Team", bgColor: '#f3e8ff', textColor: '#9333ea', borderColor: '#a855f7' },
              { icon: <CheckCircle size={32} />, text: "Free Consultation", bgColor: '#dbeafe', textColor: '#2563eb', borderColor: '#3b82f6' }
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center gap-3 text-center p-6 rounded-2xl border-2 hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'var(--color-background)' }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center border-2"
                  style={{ 
                    backgroundColor: item.bgColor, 
                    color: item.textColor, 
                    borderColor: item.borderColor 
                  }}
                >
                  {item.icon}
                </div>
                <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="px-4 md:px-8 lg:px-16 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
                  Contact <span style={{ color: '#3b82f6' }}>Information</span>
                </h2>
                <p className="mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  Choose the method that works best for you. We're available through multiple channels 
                  and always ready to discuss your project needs.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    {method.href ? (
                      <a 
                        href={method.href}
                        className="flex items-center gap-4 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 hover:scale-105"
                        style={{ 
                          backgroundColor: 'var(--color-surface)', 
                          borderColor: 'var(--color-border)' 
                        }}
                      >
                        <div 
                          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform border"
                          style={{ 
                            backgroundColor: '#dbeafe', 
                            color: '#3b82f6', 
                            borderColor: '#93c5fd' 
                          }}
                        >
                          {getIcon(method.icon)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{method.label}</h3>
                          <p style={{ color: 'var(--color-text-secondary)' }}>{method.value}</p>
                        </div>
                        <ExternalLink size={16} className="group-hover:text-blue-600 transition-colors" style={{ color: 'var(--color-text-secondary)' }} />
                      </a>
                    ) : (
                      <div 
                        className="flex items-center gap-4 p-6 rounded-2xl shadow-sm border-2"
                        style={{ 
                          backgroundColor: 'var(--color-surface)', 
                          borderColor: 'var(--color-border)' 
                        }}
                      >
                        <div 
                          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border"
                          style={{ 
                            backgroundColor: '#dbeafe', 
                            color: '#3b82f6', 
                            borderColor: '#93c5fd' 
                          }}
                        >
                          {getIcon(method.icon)}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{method.label}</h3>
                          <p style={{ color: 'var(--color-text-secondary)' }}>{method.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Office Hours */}
              <div 
                className="rounded-2xl p-6 border-2"
                style={{ 
                  backgroundColor: 'var(--color-muted)', 
                  borderColor: 'var(--color-border)' 
                }}
              >
                <h3 className="font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--color-text)' }}>
                  <Clock size={20} style={{ color: '#16a34a' }} />
                  Office Hours
                </h3>
                <div className="space-y-2">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span style={{ color: 'var(--color-text-secondary)' }}>{schedule.day}</span>
                      <span className="font-medium" style={{ color: 'var(--color-text)' }}>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              className="rounded-3xl shadow-xl p-8 border-2"
              style={{ 
                backgroundColor: 'var(--color-surface)', 
                borderColor: 'var(--color-border)' 
              }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
                  Send Us a <span style={{ color: '#3b82f6' }}>Message</span>
                </h2>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          style={{ 
                            backgroundColor: 'var(--color-background)', 
                            borderColor: 'var(--color-border)', 
                            color: 'var(--color-text)' 
                          }}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          style={{ 
                            backgroundColor: 'var(--color-background)', 
                            borderColor: 'var(--color-border)', 
                            color: 'var(--color-text)' 
                          }}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        style={{ 
                          backgroundColor: 'var(--color-background)', 
                          borderColor: 'var(--color-border)', 
                          color: 'var(--color-text)' 
                        }}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                          Budget Range
                        </label>
                        <input
                          type="text"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          style={{ 
                            backgroundColor: 'var(--color-background)', 
                            borderColor: 'var(--color-border)', 
                            color: 'var(--color-text)' 
                          }}
                          placeholder="$5,000 - $10,000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                          Timeline
                        </label>
                        <input
                          type="text"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          style={{ 
                            backgroundColor: 'var(--color-background)', 
                            borderColor: 'var(--color-border)', 
                            color: 'var(--color-text)' 
                          }}
                          placeholder="2-3 months"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                        style={{ 
                          backgroundColor: 'var(--color-background)', 
                          borderColor: 'var(--color-border)', 
                          color: 'var(--color-text)' 
                          }}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      style={{ backgroundColor: '#3b82f6' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2"
                      style={{ 
                        backgroundColor: '#dcfce7', 
                        borderColor: '#bbf7d0' 
                      }}
                    >
                      <CheckCircle size={32} style={{ color: '#16a34a' }} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Message Sent!</h3>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - FIXED with proper contrast and beautiful colors */}
      <section className="py-32 px-4 md:px-8 lg:px-16" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              Frequently Asked <span style={{ color: '#3b82f6' }}>Questions</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl shadow-sm border-2 transition-all duration-300 overflow-hidden hover:shadow-lg"
                style={{ 
                  backgroundColor: expandedFAQ === index ? 'var(--color-muted)' : 'var(--color-background)',
                  borderColor: expandedFAQ === index ? '#3b82f6' : 'var(--color-border)'
                }}
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between transition-all duration-300"
                  style={{ 
                    backgroundColor: expandedFAQ === index ? 'var(--color-muted)' : 'transparent'
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border-2"
                      style={{ 
                        backgroundColor: expandedFAQ === index ? '#3b82f6' : '#dbeafe',
                        color: expandedFAQ === index ? 'white' : '#3b82f6',
                        borderColor: '#3b82f6'
                      }}
                    >
                      <HelpCircle size={20} />
                    </div>
                    <span className="font-semibold text-lg" style={{ color: 'var(--color-text)' }}>{faq.question}</span>
                  </div>
                  <div 
                    className="transition-all duration-300"
                    style={{ color: expandedFAQ === index ? '#3b82f6' : 'var(--color-text-secondary)' }}
                  >
                    {expandedFAQ === index ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-4 pl-20">
                        <div 
                          className="rounded-xl p-5 border-2 shadow-sm"
                          style={{ 
                            backgroundColor: 'var(--color-surface)', 
                            borderColor: 'var(--color-border)' 
                          }}
                        >
                          <p className="leading-relaxed text-base" style={{ color: 'var(--color-text)' }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with better colors */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16 overflow-hidden" style={{ backgroundColor: '#1e293b' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border-2"
              style={{ 
                backgroundColor: '#dcfce7', 
                color: '#16a34a', 
                borderColor: '#bbf7d0' 
              }}
            >
              <Award size={16} />
              <span>Ready to Get Started?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients who have transformed their businesses with our help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                className="text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#3b82f6' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
              >
                Schedule Free Consultation
              </button>
              <button className="border-2 border-slate-400 text-white px-8 py-4 rounded-xl font-semibold hover:border-white hover:bg-white/10 transition-colors">
                View Our Portfolio
              </button>
            </div>
            
            <div className="text-center">
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2"
                style={{ 
                  backgroundColor: '#fef3c7', 
                  color: '#d97706', 
                  borderColor: '#fbbf24' 
                }}
              >
                <Zap size={16} />
                <span className="font-medium">We guarantee a response within 1 business day</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
