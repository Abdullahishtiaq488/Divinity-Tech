"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { motion } from "framer-motion";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  services: [
    { name: "Web Development", href: "/services#web-development" },
    { name: "UI/UX Design", href: "/services#design" },
    { name: "Digital Marketing", href: "/services#marketing" },
    { name: "Content Strategy", href: "/services#content" },
  ],
  resources: [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/portfolio" },
    { name: "Blog", href: "#" },
    { name: "FAQ", href: "/contact#faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "/privacy#cookies" },
    { name: "GDPR", href: "#" },
  ]
};

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/divinitytech", icon: Linkedin, color: "#0077b5" },
  { name: "Twitter", href: "https://twitter.com/divinitytech", icon: Twitter, color: "#1da1f2" },
  { name: "Instagram", href: "https://instagram.com/divinitytech", icon: Instagram, color: "#e4405f" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: 'var(--color-surface)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link 
              href="/" 
              className="flex items-center gap-2 font-extrabold text-2xl mb-6 hover:scale-105 transition-transform duration-200"
              style={{ color: 'var(--color-text)' }}
            >
              <div 
                className="p-2 rounded-xl border-2"
                style={{ 
                  backgroundColor: '#dbeafe', 
                  color: '#3b82f6', 
                  borderColor: '#93c5fd' 
                }}
              >
                <Sparkles size={24} />
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Divinity Tech
              </span>
            </Link>
            
            <p className="mb-6 leading-relaxed max-w-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Empowering businesses to thrive in the digital age through innovative technology solutions and creative design.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a 
                href="mailto:hello@divinitytech.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 transition-colors hover:text-blue-600"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#dbeafe', color: '#3b82f6' }}
                >
                  <Mail size={16} />
                </div>
                hello@divinitytech.com
              </motion.a>
              
              <motion.a 
                href="tel:+15551234567"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 transition-colors hover:text-blue-600"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#dcfce7', color: '#16a34a' }}
                >
                  <Phone size={16} />
                </div>
                +1 (555) 123-4567
              </motion.a>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#f3e8ff', color: '#9333ea' }}
                >
                  <MapPin size={16} />
                </div>
                123 Innovation Ave, NY
              </motion.div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--color-text)' }}>Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 transition-colors hover:text-blue-600 group"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--color-text)' }}>Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 transition-colors hover:text-blue-600 group"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--color-text)' }}>Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 transition-colors hover:text-blue-600 group"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--color-text)' }}>Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 transition-colors hover:text-blue-600 group"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div 
          className="rounded-2xl p-8 mb-12 border-2"
          style={{ 
            backgroundColor: 'var(--color-muted)', 
            borderColor: 'var(--color-border)' 
          }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
              Stay Updated
            </h3>
            <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              Get the latest insights on digital trends, design tips, and industry news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                style={{ 
                  backgroundColor: 'var(--color-background)', 
                  borderColor: 'var(--color-border)', 
                  color: 'var(--color-text)' 
                }}
              />
              <button 
                className="text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#3b82f6' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t"
          style={{ borderColor: 'var(--color-border)' }}
        >
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <span>© {new Date().getFullYear()} Divinity Tech. Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>in New York</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium" style={{ color: 'var(--color-text)' }}>Follow us:</span>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border-2 hover:shadow-lg"
                    style={{ 
                      backgroundColor: 'var(--color-background)', 
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text-secondary)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = social.color;
                      e.currentTarget.style.borderColor = social.color;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-background)';
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.color = 'var(--color-text-secondary)';
                    }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
