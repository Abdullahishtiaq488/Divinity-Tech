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
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-purple-600/5" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[var(--color-accent)]/20">
            <Users size={16} />
            <span>Let's Work Together</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-[var(--color-text)] mb-6 leading-tight"
          >
            Get In <span className="text-[var(--color-accent)]">Touch</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your digital presence? We're here to help you succeed. 
            Reach out and our team will respond within 1 business day.
          </motion.p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Zap size={20} />, text: "Fast Response" },
              { icon: <Shield size={20} />, text: "Secure & Private" },
              { icon: <Award size={20} />, text: "Expert Team" },
              { icon: <CheckCircle size={20} />, text: "Free Consultation" }
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="text-[var(--color-accent)]">{item.icon}</div>
                <span className="text-sm font-medium text-[var(--color-text-secondary)]">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods & Form */}
      <section className="px-4 md:px-8 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6">
                  Contact <span className="text-[var(--color-accent)]">Information</span>
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
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
                        className="flex items-center gap-4 p-6 bg-[var(--color-surface)] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 hover:scale-105"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center text-[var(--color-accent)] group-hover:scale-110 transition-transform">
                          {getIcon(method.icon)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-[var(--color-text)] mb-1">{method.label}</h3>
                          <p className="text-[var(--color-text-secondary)]">{method.value}</p>
                        </div>
                        <ExternalLink size={16} className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-6 bg-[var(--color-surface)] rounded-2xl shadow-sm border border-[var(--color-border)]">
                        <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center text-[var(--color-accent)]">
                          {getIcon(method.icon)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-[var(--color-text)] mb-1">{method.label}</h3>
                          <p className="text-[var(--color-text-secondary)]">{method.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-[var(--color-accent)]/5 rounded-2xl p-6 border border-[var(--color-accent)]/20">
                <h3 className="font-semibold text-[var(--color-text)] mb-4 flex items-center gap-2">
                  <Clock size={20} className="text-[var(--color-accent)]" />
                  Office Hours
                </h3>
                <div className="space-y-2">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-[var(--color-text-secondary)]">{schedule.day}</span>
                      <span className="font-medium text-[var(--color-text)]">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--color-surface)] rounded-3xl shadow-lg p-8 border border-[var(--color-border)]">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">
                  Send Us a <span className="text-[var(--color-accent)]">Message</span>
                </h2>
                <p className="text-[var(--color-text-secondary)]">
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
                        <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-colors"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-colors"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-colors"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                          Budget Range
                        </label>
                        <input
                          type="text"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-colors"
                          placeholder="$5,000 - $10,000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                          Timeline
                        </label>
                        <input
                          type="text"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-colors"
                          placeholder="2-3 months"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[var(--color-accent)] to-purple-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2">Message Sent!</h3>
                    <p className="text-[var(--color-text-secondary)]">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - FIXED */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Frequently Asked <span className="text-[var(--color-accent)]">Questions</span>
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
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
                className="bg-[var(--color-background)] rounded-2xl shadow-sm border border-[var(--color-border)] overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[var(--color-surface)] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={20} className="text-[var(--color-accent)] flex-shrink-0" />
                    <span className="font-semibold text-[var(--color-text)]">{faq.question}</span>
                  </div>
                  {expandedFAQ === index ? (
                    <ChevronUp size={20} className="text-[var(--color-text-secondary)]" />
                  ) : (
                    <ChevronDown size={20} className="text-[var(--color-text-secondary)]" />
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 pl-11">
                        <p className="text-[var(--color-text-secondary)] leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[var(--color-accent)] to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients who have transformed their businesses with our help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[var(--color-accent)] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:border-white hover:bg-white/10 transition-colors backdrop-blur-sm">
                View Our Portfolio
              </button>
            </div>

            <div className="mt-12 text-center">
              <p className="text-blue-100 font-medium">
                ⚡ We guarantee a response within 1 business day
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
