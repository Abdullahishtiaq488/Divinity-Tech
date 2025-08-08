"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cookie, Mail, Lock, Eye, FileText, Users, Globe, Phone, MapPin, Calendar, CheckCircle, AlertTriangle, Info } from 'lucide-react';

export default function PrivacyPage() {
  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <FileText size={24} />,
      color: '#3b82f6',
      content: [
        "Contact details (name, email, phone) when you fill out forms",
        "Project information you provide for quotes and consultations",
        "Website usage data via cookies and analytics tools",
        "Communication records from emails, calls, and meetings",
        "Payment information for billing purposes (securely processed)"
      ]
    },
    {
      id: "data-usage",
      title: "How We Use Your Data",
      icon: <Users size={24} />,
      color: '#16a34a',
      content: [
        "To respond to your inquiries and provide requested services",
        "To improve our website functionality and user experience",
        "For marketing and communication (with your explicit consent)",
        "To process payments and maintain billing records",
        "To comply with legal obligations and protect our rights"
      ]
    },
    {
      id: "data-sharing",
      title: "Data Sharing & Third Parties",
      icon: <Globe size={24} />,
      color: '#9333ea',
      content: [
        "We never sell your personal information to third parties",
        "Trusted service providers (hosting, analytics, payment processing)",
        "Legal authorities when required by law or to protect rights",
        "Business transfers (mergers, acquisitions) with privacy protection",
        "Marketing partners only with your explicit consent"
      ]
    },
    {
      id: "data-security",
      title: "Data Security Measures",
      icon: <Lock size={24} />,
      color: '#ea580c',
      content: [
        "Industry-standard SSL encryption for data transmission",
        "Secure servers with regular security updates and monitoring",
        "Access controls limiting data access to authorized personnel",
        "Regular security audits and vulnerability assessments",
        "Secure backup systems with encryption at rest"
      ]
    },
    {
      id: "your-rights",
      title: "Your Privacy Rights",
      icon: <Eye size={24} />,
      color: '#dc2626',
      content: [
        "Access: Request copies of your personal data we hold",
        "Correction: Update or correct inaccurate information",
        "Deletion: Request removal of your data (right to be forgotten)",
        "Portability: Receive your data in a structured format",
        "Opt-out: Unsubscribe from marketing communications anytime"
      ]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden" style={{ backgroundColor: 'var(--color-surface)' }}>
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border-2"
            style={{ 
              backgroundColor: '#dbeafe', 
              color: '#2563eb', 
              borderColor: '#93c5fd' 
            }}
          >
            <ShieldCheck size={16} />
            <span>Your Privacy Matters</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ color: 'var(--color-text)' }}
          >
            Privacy <span style={{ color: '#3b82f6' }}>Policy</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            At Divinity Tech, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex items-center justify-center gap-2 text-sm"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            <Calendar size={16} />
            <span>Last updated: January 2024</span>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Quick Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 mb-12 border-2"
            style={{ 
              backgroundColor: 'var(--color-muted)', 
              borderColor: 'var(--color-border)' 
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Info size={24} style={{ color: '#3b82f6' }} />
              <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>Quick Overview</h2>
            </div>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              We collect only the information necessary to provide our services, never sell your data, 
              use industry-standard security measures, and give you full control over your information. 
              You can contact us anytime with questions or requests about your data.
            </p>
          </motion.div>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-2"
                style={{ 
                  backgroundColor: 'var(--color-surface)', 
                  borderColor: 'var(--color-border)' 
                }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center border-2"
                      style={{ 
                        backgroundColor: `${section.color}20`, 
                        color: section.color, 
                        borderColor: `${section.color}40` 
                      }}
                    >
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
                      {section.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle size={16} className="mt-1 flex-shrink-0" style={{ color: section.color }} />
                        <span className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cookie Policy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 mt-12 border-2"
            style={{ 
              backgroundColor: '#fef3c7', 
              borderColor: '#fbbf24' 
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Cookie size={24} style={{ color: '#d97706' }} />
              <h3 className="text-2xl font-bold" style={{ color: '#92400e' }}>Cookie Policy</h3>
            </div>
            <p className="leading-relaxed mb-4" style={{ color: '#92400e' }}>
              We use cookies to enhance your browsing experience, analyze site usage, and assist in our marketing efforts. 
              Cookies help us remember your preferences and provide personalized content.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#92400e' }}>Essential Cookies</h4>
                <p className="text-sm" style={{ color: '#a16207' }}>Required for basic site functionality and security</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#92400e' }}>Analytics Cookies</h4>
                <p className="text-sm" style={{ color: '#a16207' }}>Help us understand how visitors use our website</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 mt-12 border-2"
            style={{ 
              backgroundColor: 'var(--color-surface)', 
              borderColor: 'var(--color-border)' 
            }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
                Questions About Your <span style={{ color: '#3b82f6' }}>Privacy</span>?
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                We're here to help. Contact us with any questions about our privacy practices or to exercise your rights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 border-2"
                  style={{ 
                    backgroundColor: '#dbeafe', 
                    color: '#2563eb', 
                    borderColor: '#93c5fd' 
                  }}
                >
                  <Mail size={20} />
                </div>
                <h4 className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>Email Us</h4>
                <p className="text-sm" style={{ color: '#2563eb' }}>privacy@divinitytech.com</p>
              </div>
              
              <div className="text-center">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 border-2"
                  style={{ 
                    backgroundColor: '#dcfce7', 
                    color: '#16a34a', 
                    borderColor: '#86efac' 
                  }}
                >
                  <Phone size={20} />
                </div>
                <h4 className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>Call Us</h4>
                <p className="text-sm" style={{ color: '#16a34a' }}>+1 (555) 123-4567</p>
              </div>
              
              <div className="text-center">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 border-2"
                  style={{ 
                    backgroundColor: '#f3e8ff', 
                    color: '#9333ea', 
                    borderColor: '#c084fc' 
                  }}
                >
                  <MapPin size={20} />
                </div>
                <h4 className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>Visit Us</h4>
                <p className="text-sm" style={{ color: '#9333ea' }}>123 Business St, City</p>
              </div>
            </div>
          </motion.div>

          {/* Important Notice */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 mt-12 border-2"
            style={{ 
              backgroundColor: '#fef2f2', 
              borderColor: '#fca5a5' 
            }}
          >
            <div className="flex items-start gap-3">
              <AlertTriangle size={20} className="mt-1 flex-shrink-0" style={{ color: '#dc2626' }} />
              <div>
                <h4 className="font-semibold mb-2" style={{ color: '#dc2626' }}>Important Notice</h4>
                <p className="text-sm leading-relaxed" style={{ color: '#991b1b' }}>
                  This privacy policy may be updated periodically to reflect changes in our practices or legal requirements. 
                  We will notify you of any significant changes via email or through our website. 
                  Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
