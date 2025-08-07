"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronRight, ChevronLeft, DollarSign, Calendar, User, Mail, ClipboardCheck, Code, PenTool, FileText, TrendingUp, Building, Phone, MessageSquare, Star, Sparkles, ArrowRight } from 'lucide-react';
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

  // Fixed calculation - ensure we're getting the right total
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
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface)] via-[var(--color-background)] to-[var(--color-surface)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--color-surface)] text-[var(--color-accent)] px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[var(--color-border)]">
            <Sparkles size={16} />
            <span>Free Custom Quote</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }} 
            className="text-4xl md:text-6xl font-bold text-[var(--color-text)] mb-6 leading-tight"
          >
            Get Your <span className="text-[var(--color-accent)]">Custom Quote</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.7 }} 
            className="text-xl text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Tell us about your project and get a personalized quote tailored to your specific needs and budget.
          </motion.p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-[var(--color-surface)] rounded-3xl shadow-xl p-8 md:p-12 text-center border border-[var(--color-border)]"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Thank You!</h2>
                <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-md mx-auto">
                  Your quote request has been submitted successfully. Our team will review your requirements and contact you within 24 hours.
                </p>
                <div className="bg-[var(--color-muted)] rounded-2xl p-6 mb-8">
                  <h3 className="font-semibold text-[var(--color-text)] mb-4">Quote Summary</h3>
                  <div className="space-y-2 text-sm text-[var(--color-text-secondary)]">
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
                    <div className="flex justify-between font-semibold text-[var(--color-text)] pt-2 border-t border-[var(--color-border)]">
                      <span>Estimated Total:</span>
                      <span>${total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => window.location.href = '/'}
                  className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
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
                className="bg-[var(--color-surface)] rounded-3xl shadow-xl overflow-hidden border border-[var(--color-border)]"
              >
                {/* Progress Stepper */}
                <div className="bg-[var(--color-muted)] px-8 py-6">
                  <div className="flex items-center justify-between max-w-2xl mx-auto">
                    {steps.map((stepData, index) => {
                      const IconComponent = iconMap[stepData.icon as keyof typeof iconMap];
                      const isActive = step === index;
                      const isCompleted = step > index;
                      
                      return (
                        <div key={stepData.id} className="flex items-center">
                          <div className="flex flex-col items-center">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                              isActive 
                                ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white' 
                                : isCompleted 
                                ? 'bg-green-600 border-green-600 text-white'
                                : 'bg-[var(--color-surface)] border-[var(--color-border)] text-[var(--color-text-secondary)]'
                            }`}>
                              {isCompleted ? (
                                <CheckCircle size={20} />
                              ) : (
                                <IconComponent size={20} />
                              )}
                            </div>
                            <div className="mt-2 text-center">
                              <div className={`text-sm font-medium ${
                                isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-secondary)]'
                              }`}>
                                {stepData.title}
                              </div>
                              <div className="text-xs text-[var(--color-text-secondary)] hidden sm:block">
                                {stepData.description}
                              </div>
                            </div>
                          </div>
                          {index < steps.length - 1 && (
                            <div className={`w-16 h-0.5 mx-4 transition-colors duration-300 ${
                              step > index ? 'bg-green-600' : 'bg-[var(--color-border)]'
                            }`} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-8 md:p-12">
                  <AnimatePresence mode="wait">
                    {/* Step 0: Services */}
                    {step === 0 && (
                      <motion.div
                        key="services"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="text-center mb-8">
                          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-2">Select Your Services</h2>
                          <p className="text-[var(--color-text-secondary)]">Choose the services you need for your project</p>
                        </div>

                        <div className="max-w-2xl mx-auto space-y-4">
                          {services.map((service) => {
                            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
                            const isSelected = selectedServices.includes(service.id);
                            
                            return (
                              <motion.div
                                key={service.id}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                                  isSelected
                                    ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 shadow-md'
                                    : 'border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/50 hover:shadow-sm'
                                }`}
                                onClick={() => handleServiceToggle(service.id)}
                              >
                                <div className="flex items-center gap-4">
                                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                    isSelected 
                                      ? 'border-[var(--color-accent)] bg-[var(--color-accent)]' 
                                      : 'border-[var(--color-border)]'
                                  }`}>
                                    {isSelected && <CheckCircle size={16} className="text-white" />}
                                  </div>
                                  
                                  <div className={`p-2 rounded-lg ${
                                    isSelected ? 'bg-[var(--color-accent)] text-white' : 'bg-[var(--color-muted)] text-[var(--color-text-secondary)]'
                                  }`}>
                                    <IconComponent size={20} />
                                  </div>
                                  
                                  <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-[var(--color-text)]">{service.name}</h3>
                                    <p className="text-[var(--color-text-secondary)] text-sm">{service.description}</p>
                                  </div>
                                  
                                  <div className="text-right">
                                    <span className="text-lg font-bold text-[var(--color-accent)]">
                                      ${service.basePrice.toLocaleString()}+
                                    </span>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>

                        {errors.services && (
                          <p className="text-[var(--color-destructive)] text-sm text-center">{errors.services}</p>
                        )}
                      </motion.div>
                    )}

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
                          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-2">Set Your Budget</h2>
                          <p className="text-[var(--color-text-secondary)]">What's your budget range for this project?</p>
                        </div>

                        <div className="max-w-2xl mx-auto">
                          <div className="bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-border)]">
                            <div className="flex items-center gap-4 mb-6">
                              <DollarSign size={32} className="text-[var(--color-accent)]" />
                              <div className="flex-1">
                                <input
                                  type="range"
                                  min={1000}
                                  max={50000}
                                  step={500}
                                  value={budget}
                                  onChange={(e) => setBudget(Number(e.target.value))}
                                  className="w-full h-2 bg-[var(--color-border)] rounded-lg appearance-none cursor-pointer"
                                  style={{
                                    background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${((budget - 1000) / (50000 - 1000)) * 100}%, var(--color-border) ${((budget - 1000) / (50000 - 1000)) * 100}%, var(--color-border) 100%)`
                                  }}
                                />
                              </div>
                              <div className="text-2xl font-bold text-[var(--color-text)] min-w-[120px] text-right">
                                ${budget.toLocaleString()}
                              </div>
                            </div>
                            
                            {currentBudgetRange && (
                              <div className="text-center">
                                <span className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-2 rounded-full text-sm font-medium border border-[var(--color-accent)]/20">
                                  {currentBudgetRange.label} Package
                                </span>
                                <p className="text-[var(--color-text-secondary)] text-sm mt-2">
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
                                    isSelected
                                      ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                                      : 'border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text)] hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface)]'
                                  }`}
                                >
                                  <div className={`font-semibold ${isSelected ? 'text-[var(--color-accent)]' : 'text-[var(--color-text)]'}`}>
                                    {range.label}
                                  </div>
                                  <div className={`text-sm ${isSelected ? 'text-[var(--color-accent)]/80' : 'text-[var(--color-text-secondary)]'}`}>
                                    {range.description}
                                  </div>
                                  <div className="text-xs text-[var(--color-accent)] mt-1">
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
                          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-2">Project Timeline</h2>
                          <p className="text-[var(--color-text-secondary)]">When do you need your project completed?</p>
                        </div>

                        <div className="max-w-2xl mx-auto space-y-4">
                          {timelines.map((timelineOption) => (
                            <motion.div
                              key={timelineOption.id}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                                timeline === timelineOption.id
                                  ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 shadow-lg'
                                  : 'border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/50 hover:shadow-md'
                              }`}
                              onClick={() => setTimeline(timelineOption.id)}
                            >
                              <div className="flex items-center gap-4">
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                  timeline === timelineOption.id
                                    ? 'border-[var(--color-accent)] bg-[var(--color-accent)]'
                                    : 'border-[var(--color-border)]'
                                }`}>
                                  {timeline === timelineOption.id && (
                                    <div className="w-3 h-3 bg-white rounded-full" />
                                  )}
                                </div>
                                
                                <div className="flex-1">
                                  <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">
                                    {timelineOption.label}
                                  </h3>
                                  <p className="text-[var(--color-text-secondary)] text-sm">
                                    {timelineOption.description}
                                  </p>
                                </div>
                                
                                <Calendar size={24} className={`${
                                  timeline === timelineOption.id 
                                    ? 'text-[var(--color-accent)]' 
                                    : 'text-[var(--color-text-secondary)]'
                                }`} />
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
                          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-2">Contact Information</h2>
                          <p className="text-[var(--color-text-secondary)]">Tell us how to reach you</p>
                        </div>

                        <div className="max-w-2xl mx-auto space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                                Full Name *
                              </label>
                              <div className="relative">
                                <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-text-secondary)]" />
                                <input
                                  type="text"
                                  value={contactInfo.name}
                                  onChange={(e) => handleContactChange('name', e.target.value)}
                                  className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 bg-[var(--color-surface)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-colors ${
                                    errors.name ? 'border-[var(--color-destructive)]' : 'border-[var(--color-border)]'
                                  }`}
                                  placeholder="Enter your full name"
                                />
                              </div>
                              {errors.name && <p className="text-[var(--color-destructive)] text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                                Email Address *
                              </label>
                              <div className="relative">
                                <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-text-secondary)]" />
                                <input
                                  type="email"
                                  value={contactInfo.email}
                                  onChange={(e) => handleContactChange('email', e.target.value)}
                                  className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 bg-[var(--color-surface)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-colors ${
                                    errors.email ? 'border-[var(--color-destructive)]' : 'border-[var(--color-border)]'
                                  }`}
                                  placeholder="Enter your email"
                                />
                              </div>
                              {errors.email && <p className="text-[var(--color-destructive)] text-sm mt-1">{errors.email}</p>}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                                Company (Optional)
                              </label>
                              <div className="relative">
                                <Building size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-text-secondary)]" />
                                <input
                                  type="text"
                                  value={contactInfo.company}
                                  onChange={(e) => handleContactChange('company', e.target.value)}
                                  className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-colors"
                                  placeholder="Your company name"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                                Phone (Optional)
                              </label>
                              <div className="relative">
                                <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-text-secondary)]" />
                                <input
                                  type="tel"
                                  value={contactInfo.phone}
                                  onChange={(e) => handleContactChange('phone', e.target.value)}
                                  className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-colors"
                                  placeholder="Your phone number"
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                              Project Details (Optional)
                            </label>
                            <div className="relative">
                              <MessageSquare size={20} className="absolute left-3 top-3 text-[var(--color-text-secondary)]" />
                              <textarea
                                value={contactInfo.message}
                                onChange={(e) => handleContactChange('message', e.target.value)}
                                rows={4}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-colors resize-none"
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
                          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-2">Review Your Quote</h2>
                          <p className="text-[var(--color-text-secondary)]">Please review your information before submitting</p>
                        </div>

                        <div className="max-w-2xl mx-auto">
                          <div className="bg-[var(--color-muted)] rounded-2xl p-8 space-y-6">
                            <div>
                              <h3 className="font-semibold text-[var(--color-text)] mb-3">Selected Services</h3>
                              <div className="space-y-2">
                                {selectedServices.length > 0 ? (
                                  selectedServices.map(serviceId => {
                                    const service = services.find(s => s.id === serviceId);
                                    return service ? (
                                      <div key={serviceId} className="flex justify-between items-center">
                                        <span className="text-[var(--color-text-secondary)]">{service.name}</span>
                                        <span className="font-medium text-[var(--color-text)]">
                                          ${service.basePrice.toLocaleString()}+
                                        </span>
                                      </div>
                                    ) : null;
                                  })
                                ) : (
                                  <p className="text-[var(--color-text-secondary)]">No services selected</p>
                                )}
                              </div>
                            </div>

                            <div className="border-t border-[var(--color-border)] pt-6">
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-medium text-[var(--color-text)] mb-2">Budget Range</h4>
                                  <p className="text-[var(--color-text-secondary)]">${budget.toLocaleString()}</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-[var(--color-text)] mb-2">Timeline</h4>
                                  <p className="text-[var(--color-text-secondary)]">{selectedTimeline?.label}</p>
                                </div>
                              </div>
                            </div>

                            <div className="border-t border-[var(--color-border)] pt-6">
                              <h4 className="font-medium text-[var(--color-text)] mb-2">Contact Information</h4>
                              <div className="space-y-1 text-[var(--color-text-secondary)]">
                                <p>{contactInfo.name}</p>
                                <p>{contactInfo.email}</p>
                                {contactInfo.company && <p>{contactInfo.company}</p>}
                                {contactInfo.phone && <p>{contactInfo.phone}</p>}
                              </div>
                            </div>

                            <div className="border-t border-[var(--color-border)] pt-6">
                              <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold text-[var(--color-text)]">Estimated Total</span>
                                <span className="text-2xl font-bold text-[var(--color-accent)]">
                                  {selectedServices.length > 0 ? `$${total.toLocaleString()}+` : '$0'}
                                </span>
                              </div>
                              <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                *Final price may vary based on specific requirements
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center mt-12 pt-8 border-t border-[var(--color-border)]">
                    <button
                      type="button"
                      onClick={handlePrevious}
                      disabled={step === 0}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        step === 0
                          ? 'bg-[var(--color-muted)] text-[var(--color-text-secondary)] cursor-not-allowed'
                          : 'bg-[var(--color-muted)] text-[var(--color-text)] hover:bg-[var(--color-border)]'
                      }`}
                    >
                      <ChevronLeft size={18} />
                      Previous
                    </button>

                    {step < steps.length - 1 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Next
                        <ChevronRight size={18} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
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
