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
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-purple-600/5" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-2 rounded-full text-sm font-medium mb-6 border border-[var(--color-accent)]/20">
            <Award size={16} />
            <span>Premium Digital Solutions</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-[var(--color-text)] mb-6 leading-tight"
          >
            Our <span className="text-[var(--color-accent)]">Services</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl text-[var(--color-text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            From web development to digital marketing, Divinity Tech delivers end-to-end solutions 
            that drive results and elevate your brand to new heights.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            onViewportEnter={() => setStatsInView(true)}
            viewport={{ once: true }}
          >
            {[
              { number: projectsCount, suffix: "+", label: "Projects Completed" },
              { number: satisfactionCount, suffix: "%", label: "Client Satisfaction" },
              { number: teamCount, suffix: "+", label: "Team Members" },
              { number: experienceCount, suffix: "+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-[var(--color-text-secondary)] text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Added proper spacing */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              What We <span className="text-[var(--color-accent)]">Offer</span>
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[var(--color-surface)] rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 hover:scale-105"
                onClick={() => setSelectedService(service)}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[var(--color-accent)] to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="mb-6 text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300">
                    {getIcon(service.icon)}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.includes.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                    {service.includes.length > 3 && (
                      <div className="text-sm text-[var(--color-accent)] font-medium">
                        +{service.includes.length - 3} more features
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <DollarSign size={16} />
                      <span className="font-semibold text-[var(--color-text)]">{service.price}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[var(--color-accent)] text-sm font-medium">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[var(--color-surface)] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[var(--color-border)]"
            >
              <div className="relative p-8">
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 bg-[var(--color-muted)] hover:bg-[var(--color-border)] rounded-full p-2 transition-colors"
                >
                  <X size={20} className="text-[var(--color-text)]" />
                </button>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-[var(--color-accent)]">{getIcon(selectedService.icon)}</div>
                      <h2 className="text-3xl font-bold text-[var(--color-text)]">{selectedService.title}</h2>
                    </div>
                    
                    <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
                      {selectedService.longDesc}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-[var(--color-text)] mb-3">What's Included</h4>
                        <div className="space-y-2">
                          {selectedService.includes.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                              <CheckCircle size={16} className="text-green-500" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[var(--color-text)] mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {selectedService.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                              <Star size={16} className="text-[var(--color-accent)]" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {selectedService.portfolio.map((image, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden">
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
                    <div className="bg-[var(--color-accent)]/10 rounded-xl p-6 border border-[var(--color-accent)]/20">
                      <div className="flex items-center gap-2 mb-4">
                        <DollarSign size={20} className="text-[var(--color-accent)]" />
                        <span className="font-semibold text-[var(--color-text)]">Starting Price</span>
                      </div>
                      <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">{selectedService.price}</div>
                      <p className="text-[var(--color-text-secondary)] text-sm">Custom pricing based on project scope</p>
                    </div>

                    <div className="bg-[var(--color-muted)] rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Clock size={20} className="text-[var(--color-text-secondary)]" />
                        <span className="font-semibold text-[var(--color-text)]">Timeline</span>
                      </div>
                      <div className="text-xl font-bold text-[var(--color-text)] mb-2">{selectedService.duration}</div>
                      <p className="text-[var(--color-text-secondary)] text-sm">Typical project duration</p>
                    </div>

                    <button className="w-full bg-gradient-to-r from-[var(--color-accent)] to-purple-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Process Section - Added proper spacing */}
      <section className="py-32 px-4 md:px-8 lg:px-16 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Our <span className="text-[var(--color-accent)]">Process</span>
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-purple-600 transform -translate-x-1/2" />
                )}
                
                <div className="bg-[var(--color-background)] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative z-10 border border-[var(--color-border)]">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[var(--color-accent)] to-purple-600 text-white rounded-full mb-4">
                    {getProcessIcon(step.icon)}
                  </div>
                  <h4 className="font-bold text-xl text-[var(--color-text)] mb-2">{step.title}</h4>
                  <p className="text-[var(--color-text-secondary)] mb-3">{step.desc}</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">{step.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Added proper spacing */}
      <section className="py-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Client <span className="text-[var(--color-accent)]">Success Stories</span>
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
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
                className="bg-[var(--color-surface)] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[var(--color-border)]"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">"{testimonial.text}"</p>
                
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-[var(--color-text)]">{testimonial.name}</p>
                    <p className="text-[var(--color-text-secondary)] text-sm">{testimonial.position}</p>
                    <p className="text-[var(--color-accent)] text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Professional with Background Image */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-image.png"
            alt="Transform Your Business"
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award size={16} />
              <span>Ready to Get Started?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help elevate your brand with innovative digital solutions 
              that drive real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-white text-[var(--color-accent)] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl">
                Get Free Consultation
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:border-white hover:bg-white/10 transition-colors backdrop-blur-sm">
                View Our Work
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { icon: <Shield size={24} />, text: "100% Satisfaction Guarantee" },
                { icon: <TrendingUp size={24} />, text: "Proven Results" },
                { icon: <Award size={24} />, text: "Award-Winning Team" }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-center gap-3 text-white/90 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  {item.icon}
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
