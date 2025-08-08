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
  blue: { bg: '#dbeafe', text: '#2563eb', border: '#93c5fd' },
  purple: { bg: '#f3e8ff', text: '#9333ea', border: '#c084fc' },
  green: { bg: '#dcfce7', text: '#16a34a', border: '#86efac' },
  orange: { bg: '#fed7aa', text: '#ea580c', border: '#fdba74' }
};

export default function AboutPage() {
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
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border-2"
                style={{
                  backgroundColor: '#fef3c7',
                  color: '#d97706',
                  borderColor: '#fbbf24'
                }}
              >
                <Star size={16} />
                <span>Founded in {companyInfo.founded}</span>
              </div>
            
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--color-text)' }}>
                Meet <span style={{ color: '#3b82f6' }}>Devnity Tech</span>
              </h1>
            
              <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {companyInfo.mission}
              </p>
            
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Get to Know Us
                  <ArrowRight size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-200 hover:border-blue-400 bg-white hover:bg-blue-50 text-blue-700 hover:text-blue-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Our Work
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl border-2"
                style={{ borderColor: 'var(--color-border)' }}
              >
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
              <div 
                className="absolute -top-6 -right-6 rounded-2xl p-4 shadow-xl border-2"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)'
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>Active Projects</span>
                </div>
                <p className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>25+</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story & Values - Enhanced */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>Our Story</h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {companyInfo.story}
              </p>
            
              <div 
                className="rounded-2xl p-6 border-2"
                style={{
                  backgroundColor: 'var(--color-muted)',
                  borderColor: 'var(--color-border)'
                }}
              >
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-text)' }}>Our Vision</h3>
                <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{companyInfo.vision}</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>Our Values</h3>
              <div className="space-y-4">
                {companyInfo.values.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 rounded-xl p-4 shadow-sm border-2 hover:shadow-md transition-shadow"
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      borderColor: 'var(--color-border)'
                    }}
                  >
                    <CheckCircle size={20} className="flex-shrink-0" style={{ color: '#16a34a' }} />
                    <span className="font-medium" style={{ color: 'var(--color-text)' }}>{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics - Enhanced with individual colors */}
      <section className="py-20 px-4 md:px-8 lg:px-16" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-6xl mx-auto">
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
              <Award size={16} />
              <span>Our Achievements</span>
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>By the Numbers</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Our track record speaks for itself. Here's what we've achieved together with our clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
              const colors = [
                { bg: '#dbeafe', text: '#2563eb', border: '#93c5fd' },
                { bg: '#dcfce7', text: '#16a34a', border: '#86efac' },
                { bg: '#f3e8ff', text: '#9333ea', border: '#c084fc' },
                { bg: '#fed7aa', text: '#ea580c', border: '#fdba74' }
              ];
              const color = colors[index % colors.length];
            
              return (
                <motion.div
                  key={stat.id}
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
                  >
                    <IconComponent size={32} />
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>{stat.value}</div>
                  <div className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text)' }}>{stat.label}</div>
                  <div className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{stat.description}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Members - Enhanced */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>Meet Our Team</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
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
                className="group rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border-2"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)'
                }}
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
                      <Linkedin size={16} style={{ color: '#3b82f6' }} />
                    </a>
                    <a href={member.twitter} className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                      <Twitter size={16} style={{ color: '#1d9bf0' }} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--color-text)' }}>{member.name}</h3>
                  <p className="font-medium mb-3" style={{ color: '#3b82f6' }}>{member.role}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process - Enhanced with individual colors */}
      <section className="py-20 px-4 md:px-8 lg:px-16" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>Our Process</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              A proven methodology that ensures every project is delivered on time, on budget, and exceeds expectations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap];
              const color = colorMap[step.color as keyof typeof colorMap];
            
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 group"
                  style={{
                    backgroundColor: 'var(--color-background)',
                    borderColor: 'var(--color-border)'
                  }}
                >
                  {/* Step Number */}
                  <div 
                    className="absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: 'var(--color-text)' }}
                  >
                    {index + 1}
                  </div>
                  
                  <div 
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 border-2"
                    style={{
                      backgroundColor: color.bg,
                      color: color.text,
                      borderColor: color.border
                    }}
                  >
                    <IconComponent size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>{step.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with Background Image */}
      <section className="relative py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/modern-office-collaboration.png"
            alt="Team collaboration"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium mb-8 border-2 border-white/20 bg-white/10 backdrop-blur-sm">
              <Star size={16} className="text-yellow-400" />
              <span className="text-white">Let's Build Something Amazing</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Ready to Work{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Together?
              </span>
            </h2>
            
            <p className="text-xl md:text-xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Let's discuss how our team can help transform your business with innovative digital solutions that drive real results.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">4+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-gray-300">Support Available</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-3 group"
              >
                Start Your Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/50"
              >
                Schedule a Call
              </motion.button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Available for new projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Response time: {'< 24 hours'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
