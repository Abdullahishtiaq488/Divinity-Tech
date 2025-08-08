"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronRight, ChevronLeft, DollarSign, Calendar, User, Mail, ClipboardCheck, Code, PenTool, FileText, TrendingUp, Building, Phone, MessageSquare, Star, Sparkles, ArrowRight, Award, Shield } from 'lucide-react';
import { services, timelines, budgetRanges, steps } from "@/data/quote";
import { ContactInfo } from "@/types/quote";

const iconMap = {
  code: Code,
  palette: PenTool,
  "file-text": FileText,
  "trending-up": TrendingUp,
  "clipboard-list": ClipboardCheck,
  "dollar-sign": DollarSign,
  calendar: Calendar,
  user: User,
  "check-circle": CheckCircle
};

export default function QuotePage() {
  const [step, setStep] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState(5000);
  const [timeline, setTimeline] = useState(timelines[1].id);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const total = selectedServices.reduce((sum, serviceId) => {
    const service = services.find(s => s.id === serviceId);
    return sum + (service?.basePrice || 0);
  }, 0);

  const selectedTimeline = timelines.find(t => t.id === timeline);
  const currentBudgetRange = budgetRanges.find(range => budget >= range.min && budget <= range.max);

  function handleServiceToggle(serviceId: string) {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  }

  function handleContactChange(field: keyof ContactInfo, value: string) {
    setContactInfo(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  }

  function validateStep(): boolean {
    const newErrors: Record<string, string> = {};
    if (step === 0 && selectedServices.length === 0) {
      newErrors.services = "Please select at least one service";
    }
    if (step === 3) {
      if (!contactInfo.name.trim()) newErrors.name = "Name is required";
      if (!contactInfo.email.trim()) newErrors.email = "Email is required";
      if (contactInfo.email && !/\S+@\S+\.\S+/.test(contactInfo.email)) {
        newErrors.email = "Please enter a valid email";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleNext() {
    if (validateStep()) {
      setStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  }

  function handlePrevious() {
    setStep(prev => Math.max(prev - 1, 0));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validateStep()) {
      setSubmitted(true);
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Hero Section - Enhanced */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden" style={{ backgroundColor: 'var(--color-surface)' }}>
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border-2"
            style={{ 
              backgroundColor: '#dcfce7', 
              color: '#16a34a', 
              borderColor: '#bbf7d0' 
            }}
          >
            <Sparkles size={16} />
            <span>Free Custom Quote</span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ color: 'var(--color-text)' }}
          >
            Get Your <span style={{ color: '#3b82f6' }}>Custom Quote</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Tell us about your project and get a personalized quote tailored to your specific needs and budget.
          </motion.p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { icon: <Shield size={20} />, text: "100% Free Quote", color: '#16a34a' },
              { icon: <Award size={20} />, text: "Expert Team", color: '#3b82f6' },
              { icon: <Star size={20} />, text: "24h Response", color: '#9333ea' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center justify-center gap-2 rounded-xl p-3 border-2"
                style={{ 
                  backgroundColor: 'var(--color-background)', 
                  borderColor: 'var(--color-border)' 
                }}
              >
                <div style={{ color: item.color }}>{item.icon}</div>
                <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form - Enhanced */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="rounded-3xl shadow-xl p-8 md:p-12 text-center border-2"
                style={{ 
                  backgroundColor: 'var(--color-surface)', 
                  borderColor: 'var(--color-border)' 
                }}
              >
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2"
                  style={{ 
                    backgroundColor: '#dcfce7', 
                    borderColor: '#bbf7d0' 
                  }}
                >
                  <CheckCircle size={40} style={{ color: '#16a34a' }} />
                </div>
                <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>Thank You!</h2>
                <p className="text-lg mb-8 max-w-md mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                  Your quote request has been submitted successfully. Our team will review your requirements and contact you within 24 hours.
                </p>
                
                <div 
                  className="rounded-2xl p-6 mb-8 border-2"
                  style={{ 
                    backgroundColor: 'var(--color-muted)', 
                    borderColor: 'var(--color-border)' 
                  }}
                >
                  <h3 className="font-semibold mb-4" style={{ color: 'var(--color-text)' }}>Quote Summary</h3>
                  <div className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    <div className="flex justify-between">
                      <span>Services:</span>
                      <span>{selectedServices.length} selected</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Budget:</span>
                      <span>${budget.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Timeline:</span>
                      <span>{selectedTimeline?.label}</span>
                    </div>
                    <div 
                      className="flex justify-between font-semibold pt-2 border-t"
                      style={{ 
                        color: 'var(--color-text)', 
                        borderColor: 'var(--color-border)' 
                      }}
                    >
                      <span>Estimated Total:</span>
                      <span style={{ color: '#3b82f6' }}>${total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => window.location.href = '/'}
                  className="text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
                  style={{ backgroundColor: '#3b82f6' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
                >
                  Back to Home
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl shadow-xl overflow-hidden border-2"
                style={{ 
                  backgroundColor: 'var(--color-surface)', 
                  borderColor: 'var(--color-border)' 
                }}
              >
                {/* Progress Stepper - Enhanced */}
                <div 
                  className="px-8 py-6"
                  style={{ backgroundColor: 'var(--color-muted)' }}
                >
                  <div className="flex items-center justify-between max-w-2xl mx-auto">
                    {steps.map((stepData, index) => {
                      const IconComponent = iconMap[stepData.icon as keyof typeof iconMap];
                      const isActive = step === index;
                      const isCompleted = step > index;
                      
                      const colors = [
                        '#3b82f6', '#16a34a', '#9333ea', '#ea580c', '#dc2626'
                      ];
                      const stepColor = colors[index % colors.length];

                      return (
                        <div key={stepData.id} className="flex items-center">
                          <div className="flex flex-col items-center">
                            <div 
                              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                                isActive || isCompleted ? 'text-white' : ''
                              }`}
                              style={{
                                backgroundColor: isActive ? stepColor : isCompleted ? '#16a34a' : 'var(--color-surface)',
                                borderColor: isActive ? stepColor : isCompleted ? '#16a34a' : 'var(--color-border)',
                                color: isActive || isCompleted ? 'white' : 'var(--color-text-secondary)'
                              }}
                            >
                              {isCompleted ? (
                                <CheckCircle size={20} />
                              ) : (
                                <IconComponent size={20} />
                              )}
                            </div>
                            <div className="mt-2 text-center">
                              <div 
                                className={`text-sm font-medium ${
                                  isActive ? '' : ''
                                }`}
                                style={{ 
                                  color: isActive ? stepColor : 'var(--color-text-secondary)' 
                                }}
                              >
                                {stepData.title}
                              </div>
                              <div className="text-xs hidden sm:block" style={{ color: 'var(--color-text-secondary)' }}>
                                {stepData.description}
                              </div>
                            </div>
                          </div>
                          {index < steps.length - 1 && (
                            <div 
                              className={`w-16 h-0.5 mx-4 transition-colors duration-300`}
                              style={{ 
                                backgroundColor: step > index ? '#16a34a' : 'var(--color-border)' 
                              }}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-8 md:p-12">
                  <AnimatePresence mode="wait">
                    {/* Step 0: Services - Enhanced */}
                    {step === 0 && (
                      <motion.div
                        key="services"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="text-center mb-8">
                          <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Select Your Services</h2>
                          <p style={{ color: 'var(--color-text-secondary)' }}>Choose the services you need for your project</p>
                        </div>
                        
                        <div className="max-w-2xl mx-auto space-y-4">
                          {services.map((service, index) => {
                            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
                            const isSelected = selectedServices.includes(service.id);
                            
                            const colors = [
                              { bg: '#dbeafe', text: '#2563eb', border: '#93c5fd' },
                              { bg: '#dcfce7', text: '#16a34a', border: '#86efac' },
                              { bg: '#f3e8ff', text: '#9333ea', border: '#c084fc' },
                              { bg: '#fed7aa', text: '#ea580c', border: '#fdba74' }
                            ];
                            const color = colors[index % colors.length];

                            return (
                              <motion.div
                                key={service.id}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                  isSelected ? 'shadow-md' : 'hover:shadow-sm'
                                }`}
                                style={{
                                  borderColor: isSelected ? color.text : 'var(--color-border)',
                                  backgroundColor: isSelected ? color.bg : 'var(--color-surface)'
                                }}
                                onClick={() => handleServiceToggle(service.id)}
                              >
                                <div className="flex items-center gap-4">
                                  <div 
                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                      isSelected ? 'border-white' : ''
                                    }`}
                                    style={{
                                      borderColor: isSelected ? color.text : 'var(--color-border)',
                                      backgroundColor: isSelected ? color.text : 'transparent'
                                    }}
                                  >
                                    {isSelected && <CheckCircle size={16} className="text-white" />}
                                  </div>

                                  <div 
                                    className={`p-2 rounded-lg`}
                                    style={{
                                      backgroundColor: isSelected ? color.text : color.bg,
                                      color: isSelected ? 'white' : color.text
                                    }}
                                  >
                                    <IconComponent size={20} />
                                  </div>

                                  <div className="flex-1">
                                    <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>{service.name}</h3>
                                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{service.description}</p>
                                  </div>

                                  <div className="text-right">
                                    <span className="text-lg font-bold" style={{ color: color.text }}>
                                      ${service.basePrice.toLocaleString()}+
                                    </span>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                        {errors.services && (
                          <p className="text-red-500 text-sm text-center">{errors.services}</p>
                        )}
                      </motion.div>
                    )}

                    {/* Continue with other steps... */}
                    {/* I'll include the rest of the steps with similar enhancements */}
                    {/* Step 1: Budget */}
                    {step === 1 && (
                      <motion.div
                        key="budget"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div className="text-center mb-8">
                          <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Set Your Budget</h2>
                          <p style={{ color: 'var(--color-text-secondary)' }}>What's your budget range for this project?</p>
                        </div>
                        <div className="max-w-2xl mx-auto">
                          <div className="rounded-2xl p-8 border-2" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                            <div className="flex items-center gap-4 mb-6">
                              <DollarSign size={32} style={{ color: '#3b82f6' }} />
                              <div className="flex-1">
                                <input
                                  type="range"
                                  min={1000}
                                  max={50000}
                                  step={500}
                                  value={budget}
                                  onChange={(e) => setBudget(Number(e.target.value))}
                                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                                  style={{
                                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((budget - 1000) / (50000 - 1000)) * 100}%, var(--color-border) ${((budget - 1000) / (50000 - 1000)) * 100}%, var(--color-border) 100%)`
                                  }}
                                />
                              </div>
                              <div className="text-2xl font-bold min-w-[120px] text-right" style={{ color: 'var(--color-text)' }}>
                                ${budget.toLocaleString()}
                              </div>
                            </div>
                            
                            {currentBudgetRange && (
                              <div className="text-center">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border-2" style={{ backgroundColor: '#dbeafe', color: '#2563eb', borderColor: '#93c5fd' }}>
                                  {currentBudgetRange.label} Package
                                </span>
                                <p className="text-sm mt-2" style={{ color: 'var(--color-text-secondary)' }}>
                                  {currentBudgetRange.description}
                                </p>
                              </div>
                            )}
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            {budgetRanges.map((range) => {
                              const isSelected = currentBudgetRange?.label === range.label;
                              return (
                                <button
                                  key={range.label}
                                  type="button"
                                  onClick={() => setBudget(Math.floor((range.min + range.max) / 2))}
                                  className={`p-4 rounded-xl border-2 text-center transition-all duration-300 ${
                                    isSelected ? 'shadow-lg' : 'hover:shadow-md'
                                  }`}
                                  style={{
                                    borderColor: isSelected ? '#3b82f6' : 'var(--color-border)',
                                    backgroundColor: isSelected ? '#dbeafe' : 'var(--color-background)',
                                    color: isSelected ? '#2563eb' : 'var(--color-text)'
                                  }}
                                >
                                  <div className="font-semibold">{range.label}</div>
                                  <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{range.description}</div>
                                  <div className="text-xs mt-1" style={{ color: '#3b82f6' }}>
                                    ${range.min.toLocaleString()}+
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Timeline */}
                    {step === 2 && (
                      <motion.div
                        key="timeline"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div className="text-center mb-8">
                          <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Project Timeline</h2>
                          <p style={{ color: 'var(--color-text-secondary)' }}>When do you need your project completed?</p>
                        </div>
                        <div className="max-w-2xl mx-auto space-y-4">
                          {timelines.map((timelineOption) => (
                            <motion.div
                              key={timelineOption.id}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                                timeline === timelineOption.id ? 'shadow-lg' : 'hover:shadow-md'
                              }`}
                              style={{
                                borderColor: timeline === timelineOption.id ? '#3b82f6' : 'var(--color-border)',
                                backgroundColor: timeline === timelineOption.id ? '#dbeafe' : 'var(--color-surface)'
                              }}
                              onClick={() => setTimeline(timelineOption.id)}
                            >
                              <div className="flex items-center gap-4">
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center`} style={{
                                  borderColor: timeline === timelineOption.id ? '#3b82f6' : 'var(--color-border)',
                                  backgroundColor: timeline === timelineOption.id ? '#3b82f6' : 'transparent'
                                }}>
                                  {timeline === timelineOption.id && (
                                    <div className="w-3 h-3 bg-white rounded-full" />
                                  )}
                                </div>
                                
                                <div className="flex-1">
                                  <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--color-text)' }}>
                                    {timelineOption.label}
                                  </h3>
                                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                    {timelineOption.description}
                                  </p>
                                </div>
                                
                                <Calendar size={24} style={{ color: timeline === timelineOption.id ? '#3b82f6' : 'var(--color-text-secondary)' }} />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Contact */}
                    {step === 3 && (
                      <motion.div
                        key="contact"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div className="text-center mb-8">
                          <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Contact Information</h2>
                          <p style={{ color: 'var(--color-text-secondary)' }}>Tell us how to reach you</p>
                        </div>
                        <div className="max-w-2xl mx-auto space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                                Full Name *
                              </label>
                              <div className="relative">
                                <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: 'var(--color-text-secondary)' }} />
                                <input
                                  type="text"
                                  value={contactInfo.name}
                                  onChange={(e) => handleContactChange('name', e.target.value)}
                                  className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                                    errors.name ? 'border-red-500' : ''
                                  }`}
                                  style={{ 
                                    backgroundColor: 'var(--color-surface)', 
                                    borderColor: errors.name ? '#ef4444' : 'var(--color-border)', 
                                    color: 'var(--color-text)' 
                                  }}
                                  placeholder="Enter your full name"
                                />
                              </div>
                              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                                Email Address *
                              </label>
                              <div className="relative">
                                <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: 'var(--color-text-secondary)' }} />
                                <input
                                  type="email"
                                  value={contactInfo.email}
                                  onChange={(e) => handleContactChange('email', e.target.value)}
                                  className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                                    errors.email ? 'border-red-500' : ''
                                  }`}
                                  style={{ 
                                    backgroundColor: 'var(--color-surface)', 
                                    borderColor: errors.email ? '#ef4444' : 'var(--color-border)', 
                                    color: 'var(--color-text)' 
                                  }}
                                  placeholder="Enter your email"
                                />
                              </div>
                              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                                Company (Optional)
                              </label>
                              <div className="relative">
                                <Building size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: 'var(--color-text-secondary)' }} />
                                <input
                                  type="text"
                                  value={contactInfo.company}
                                  onChange={(e) => handleContactChange('company', e.target.value)}
                                  className="w-full pl-10 pr-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                  style={{ 
                                    backgroundColor: 'var(--color-surface)', 
                                    borderColor: 'var(--color-border)', 
                                    color: 'var(--color-text)' 
                                  }}
                                  placeholder="Your company name"
                                />
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                                Phone (Optional)
                              </label>
                              <div className="relative">
                                <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2" style={{ color: 'var(--color-text-secondary)' }} />
                                <input
                                  type="tel"
                                  value={contactInfo.phone}
                                  onChange={(e) => handleContactChange('phone', e.target.value)}
                                  className="w-full pl-10 pr-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                  style={{ 
                                    backgroundColor: 'var(--color-surface)', 
                                    borderColor: 'var(--color-border)', 
                                    color: 'var(--color-text)' 
                                  }}
                                  placeholder="Your phone number"
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-text)' }}>
                              Project Details (Optional)
                            </label>
                            <div className="relative">
                              <MessageSquare size={20} className="absolute left-3 top-3" style={{ color: 'var(--color-text-secondary)' }} />
                              <textarea
                                value={contactInfo.message}
                                onChange={(e) => handleContactChange('message', e.target.value)}
                                rows={4}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
                                style={{ 
                                  backgroundColor: 'var(--color-surface)', 
                                  borderColor: 'var(--color-border)', 
                                  color: 'var(--color-text)' 
                                }}
                                placeholder="Tell us more about your project requirements..."
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 4: Summary */}
                    {step === 4 && (
                      <motion.div
                        key="summary"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div className="text-center mb-8">
                          <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>Review Your Quote</h2>
                          <p style={{ color: 'var(--color-text-secondary)' }}>Please review your information before submitting</p>
                        </div>
                        <div className="max-w-2xl mx-auto">
                          <div className="rounded-2xl p-8 space-y-6 border-2" style={{ backgroundColor: 'var(--color-muted)', borderColor: 'var(--color-border)' }}>
                            <div>
                              <h3 className="font-semibold mb-3" style={{ color: 'var(--color-text)' }}>Selected Services</h3>
                              <div className="space-y-2">
                                {selectedServices.length > 0 ? (
                                  selectedServices.map(serviceId => {
                                    const service = services.find(s => s.id === serviceId);
                                    return service ? (
                                      <div key={serviceId} className="flex justify-between items-center">
                                        <span style={{ color: 'var(--color-text-secondary)' }}>{service.name}</span>
                                        <span className="font-medium" style={{ color: 'var(--color-text)' }}>
                                          ${service.basePrice.toLocaleString()}+
                                        </span>
                                      </div>
                                    ) : null;
                                  })
                                ) : (
                                  <p style={{ color: 'var(--color-text-secondary)' }}>No services selected</p>
                                )}
                              </div>
                            </div>
                            <div className="border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-medium mb-2" style={{ color: 'var(--color-text)' }}>Budget Range</h4>
                                  <p style={{ color: 'var(--color-text-secondary)' }}>${budget.toLocaleString()}</p>
                                </div>
                                <div>
                                  <h4 className="font-medium mb-2" style={{ color: 'var(--color-text)' }}>Timeline</h4>
                                  <p style={{ color: 'var(--color-text-secondary)' }}>{selectedTimeline?.label}</p>
                                </div>
                              </div>
                            </div>
                            <div className="border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
                              <h4 className="font-medium mb-2" style={{ color: 'var(--color-text)' }}>Contact Information</h4>
                              <div className="space-y-1" style={{ color: 'var(--color-text-secondary)' }}>
                                <p>{contactInfo.name}</p>
                                <p>{contactInfo.email}</p>
                                {contactInfo.company && <p>{contactInfo.company}</p>}
                                {contactInfo.phone && <p>{contactInfo.phone}</p>}
                              </div>
                            </div>
                            <div className="border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
                              <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>Estimated Total</span>
                                <span className="text-2xl font-bold" style={{ color: '#3b82f6' }}>
                                  {selectedServices.length > 0 ? `$${total.toLocaleString()}+` : '$0'}
                                </span>
                              </div>
                              <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
                                *Final price may vary based on specific requirements
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Navigation Buttons - Enhanced */}
                  </AnimatePresence>
                  
                  <div 
                    className="flex justify-between items-center mt-12 pt-8 border-t"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <button
                      type="button"
                      onClick={handlePrevious}
                      disabled={step === 0}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        step === 0 ? 'cursor-not-allowed' : ''
                      }`}
                      style={{
                        backgroundColor: step === 0 ? 'var(--color-muted)' : 'var(--color-muted)',
                        color: step === 0 ? 'var(--color-text-secondary)' : 'var(--color-text)'
                      }}
                    >
                      <ChevronLeft size={18} />
                      Previous
                    </button>
                    
                    {step < steps.length - 1 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex items-center gap-2 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                        style={{ backgroundColor: '#3b82f6' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
                      >
                        Next
                        <ChevronRight size={18} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="flex items-center gap-2 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                        style={{ backgroundColor: '#16a34a' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#15803d'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
                      >
                        <CheckCircle size={18} />
                        Submit Quote Request
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
