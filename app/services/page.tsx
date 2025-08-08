"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, Star, Clock, DollarSign, X, ExternalLink, Award, TrendingUp, Shield, Code, PenTool, FileText, BarChart2, Users, Target, Zap, Lightbulb } from 'lucide-react';
import Image from "next/image";
import { services, processSteps, testimonials } from "@/data/services";
import { Service } from "@/types/services";

// Counter animation hook
function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!shouldStart || hasStarted) return;
    
    setHasStarted(true);
    let startTime: number;
    const startValue = 0;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, shouldStart, hasStarted]);

  return count;
}

// Icon mapping
const iconMap = {
  Code: Code,
  PenTool: PenTool,
  FileText: FileText,
  BarChart2: BarChart2,
  Users: Users,
  Target: Target,
  Zap: Zap,
  Lightbulb: Lightbulb,
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [statsInView, setStatsInView] = useState(false);

  // Counter values
  const projectsCount = useCountUp(500, 2000, statsInView);
  const satisfactionCount = useCountUp(98, 2000, statsInView);
  const teamCount = useCountUp(50, 2000, statsInView);
  const experienceCount = useCountUp(5, 2000, statsInView);

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent size={32} /> : <Code size={32} />;
  };

  const getProcessIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent size={32} /> : <Users size={32} />;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Hero Section - Enhanced */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden" style={{ backgroundColor: 'var(--color-surface)' }}>
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border-2"
            style={{ 
              backgroundColor: '#f3e8ff', 
              color: '#9333ea', 
              borderColor: '#c084fc' 
            }}
          >
            <Award size={16} />
            <span>Premium Digital Solutions</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ color: 'var(--color-text)' }}
          >
            Our <span style={{ color: '#3b82f6' }}>Services</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            From web development to digital marketing, Divinity Tech delivers end-to-end solutions 
            that drive results and elevate your brand to new heights.
          </motion.p>

          {/* Stats - Enhanced with individual colors */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            onViewportEnter={() => setStatsInView(true)}
            viewport={{ once: true }}
          >
            {[
              { number: projectsCount, suffix: "+", label: "Projects Completed", color: '#3b82f6' },
              { number: satisfactionCount, suffix: "%", label: "Client Satisfaction", color: '#16a34a' },
              { number: teamCount, suffix: "+", label: "Team Members", color: '#9333ea' },
              { number: experienceCount, suffix: "+", label: "Years Experience", color: '#ea580c' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center p-4 rounded-2xl border-2 hover:shadow-lg transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--color-background)', 
                  borderColor: 'var(--color-border)' 
                }}
              >
                <div className="text-3xl font-bold mb-2" style={{ color: stat.color }}>
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Enhanced */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              What We <span style={{ color: '#3b82f6' }}>Offer</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border-2 hover:scale-105"
                  style={{ 
                    backgroundColor: 'var(--color-surface)', 
                    borderColor: 'var(--color-border)' 
                  }}
                  onClick={() => setSelectedService(service)}
                >
                  {service.popular && (
                    <div 
                      className="absolute top-4 right-4 text-white px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: '#3b82f6' }}
                    >
                      Popular
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div 
                      className="mb-6 group-hover:scale-110 transition-transform duration-300 w-16 h-16 rounded-2xl flex items-center justify-center border-2"
                      style={{ 
                        backgroundColor: color.bg, 
                        color: color.text, 
                        borderColor: color.border 
                      }}
                    >
                      {getIcon(service.icon)}
                    </div>
                    
                    <h3 
                      className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {service.title}
                    </h3>
                    
                    <p className="mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {service.desc}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.includes.slice(0, 3).map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                          <CheckCircle size={16} style={{ color: '#16a34a' }} className="flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                      {service.includes.length > 3 && (
                        <div className="text-sm font-medium" style={{ color: '#3b82f6' }}>
                          +{service.includes.length - 3} more features
                        </div>
                      )}
                    </div>

                    <div 
                      className="flex items-center justify-between pt-4 border-t"
                      style={{ borderColor: 'var(--color-border)' }}
                    >
                      <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        <DollarSign size={16} />
                        <span className="font-semibold" style={{ color: 'var(--color-text)' }}>{service.price}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-medium" style={{ color: '#3b82f6' }}>
                        <span>Learn More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Modal - Enhanced */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
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
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 rounded-full p-2 transition-colors border-2"
                  style={{ 
                    backgroundColor: 'var(--color-muted)', 
                    borderColor: 'var(--color-border)' 
                  }}
                >
                  <X size={20} style={{ color: 'var(--color-text)' }} />
                </button>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div style={{ color: '#3b82f6' }}>{getIcon(selectedService.icon)}</div>
                      <h2 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>{selectedService.title}</h2>
                    </div>
                    
                    <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                      {selectedService.longDesc}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold mb-3" style={{ color: 'var(--color-text)' }}>What's Included</h4>
                        <div className="space-y-2">
                          {selectedService.includes.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                              <CheckCircle size={16} style={{ color: '#16a34a' }} />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3" style={{ color: 'var(--color-text)' }}>Key Features</h4>
                        <div className="space-y-2">
                          {selectedService.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                              <Star size={16} style={{ color: '#3b82f6' }} />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {selectedService.portfolio.map((image, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden border-2" style={{ borderColor: 'var(--color-border)' }}>
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${selectedService.title} portfolio ${index + 1}`}
                            width={300}
                            height={200}
                            className="w-full h-32 object-cover"
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
                        <DollarSign size={20} style={{ color: '#3b82f6' }} />
                        <span className="font-semibold" style={{ color: 'var(--color-text)' }}>Starting Price</span>
                      </div>
                      <div className="text-3xl font-bold mb-2" style={{ color: '#3b82f6' }}>{selectedService.price}</div>
                      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Custom pricing based on project scope</p>
                    </div>

                    <div 
                      className="rounded-xl p-6 border-2"
                      style={{ 
                        backgroundColor: 'var(--color-muted)', 
                        borderColor: 'var(--color-border)' 
                      }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <Clock size={20} style={{ color: 'var(--color-text-secondary)' }} />
                        <span className="font-semibold" style={{ color: 'var(--color-text)' }}>Timeline</span>
                      </div>
                      <div className="text-xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>{selectedService.duration}</div>
                      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Typical project duration</p>
                    </div>

                    <button 
                      className="w-full text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all duration-300"
                      style={{ backgroundColor: '#3b82f6' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Process Section - Enhanced */}
      <section className="py-32 px-4 md:px-8 lg:px-16" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              Our <span style={{ color: '#3b82f6' }}>Process</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const colors = [
                { bg: '#dbeafe', text: '#2563eb', border: '#93c5fd' },
                { bg: '#dcfce7', text: '#16a34a', border: '#86efac' },
                { bg: '#f3e8ff', text: '#9333ea', border: '#c084fc' },
                { bg: '#fed7aa', text: '#ea580c', border: '#fdba74' }
              ];
              const color = colors[index % colors.length];
              
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 transform -translate-x-1/2" style={{ backgroundColor: '#3b82f6' }} />
                  )}
                  
                  <div 
                    className="rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative z-10 border-2"
                    style={{ 
                      backgroundColor: 'var(--color-background)', 
                      borderColor: 'var(--color-border)' 
                    }}
                  >
                    <div 
                      className="inline-flex items-center justify-center w-16 h-16 text-white rounded-full mb-4 border-2"
                      style={{ 
                        backgroundColor: color.text, 
                        borderColor: color.border 
                      }}
                    >
                      {getProcessIcon(step.icon)}
                    </div>
                    <h4 className="font-bold text-xl mb-2" style={{ color: 'var(--color-text)' }}>{step.title}</h4>
                    <p className="mb-3" style={{ color: 'var(--color-text-secondary)' }}>{step.desc}</p>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{step.details}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              Client <span style={{ color: '#3b82f6' }}>Success Stories</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Don't just take our word for it. Here's what our clients say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border-2"
                style={{ 
                  backgroundColor: 'var(--color-surface)', 
                  borderColor: 'var(--color-border)' 
                }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>"{testimonial.text}"</p>
                
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold" style={{ color: 'var(--color-text)' }}>{testimonial.name}</p>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{testimonial.position}</p>
                    <p className="text-sm" style={{ color: '#3b82f6' }}>{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
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
                backgroundColor: '#f3e8ff', 
                color: '#9333ea', 
                borderColor: '#c084fc' 
              }}
            >
              <Award size={16} />
              <span>Ready to Get Started?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help elevate your brand with innovative digital solutions 
              that drive real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                className="text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#3b82f6' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
              >
                Get Free Consultation
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:border-white hover:bg-white/10 transition-colors backdrop-blur-sm">
                View Our Work
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { icon: <Shield size={24} />, text: "100% Satisfaction Guarantee", color: '#16a34a' },
                { icon: <TrendingUp size={24} />, text: "Proven Results", color: '#3b82f6' },
                { icon: <Award size={24} />, text: "Award-Winning Team", color: '#9333ea' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-center gap-3 text-white/90 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div style={{ color: item.color }}>{item.icon}</div>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
