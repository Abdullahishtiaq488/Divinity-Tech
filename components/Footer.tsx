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
    <footer className="relative overflow-hidden bg-slate-900 dark:bg-gray-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link 
              href="/"
              className="flex items-center gap-2 font-extrabold text-2xl mb-6 hover:scale-105 transition-transform duration-200 text-white no-underline"
            >
              <div className="p-2 rounded-xl border-2 bg-blue-500/20 border-blue-400/30 backdrop-blur-sm">
                <Sparkles className="text-blue-400" size={24} />
              </div>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Devnity Tech
              </span>
            </Link>
            
            <p className="mb-6 leading-relaxed max-w-sm text-slate-300 dark:text-gray-400">
              Empowering businesses to thrive in the digital age through innovative technology solutions and creative design.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a 
                href="mailto:hello@divinitytech.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 transition-colors hover:text-blue-400 text-slate-300 dark:text-gray-400 no-underline group"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                  <Mail size={16} />
                </div>
                hello@devnitytech.com
              </motion.a>
              
              <motion.a 
                href="tel:+15551234567"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 transition-colors hover:text-green-400 text-slate-300 dark:text-gray-400 no-underline group"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-500/20 text-green-400 group-hover:bg-green-500/30 transition-colors">
                  <Phone size={16} />
                </div>
                +1 (555) 123-4567
              </motion.a>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-slate-300 dark:text-gray-400 group"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30 transition-colors">
                  <MapPin size={16} />
                </div>
                124 Emma Circle Harrisburg, PA 17112
              </motion.div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 transition-colors hover:text-blue-400 group text-slate-400 dark:text-gray-500 hover:text-blue-400 no-underline"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 transition-colors hover:text-blue-400 group text-slate-400 dark:text-gray-500 no-underline"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 transition-colors hover:text-blue-400 group text-slate-400 dark:text-gray-500 no-underline"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 transition-colors hover:text-blue-400 group text-slate-400 dark:text-gray-500 no-underline"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="rounded-2xl p-6 md:p-8 mb-12 border border-slate-700/50 dark:border-gray-800 bg-slate-800/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2 text-white">
              Stay Updated
            </h3>
            <p className="mb-6 text-slate-300 dark:text-gray-400">
              Get the latest insights on digital trends, design tips, and industry news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-slate-600/50 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-slate-700/50 dark:bg-gray-800/50 text-white placeholder-slate-400 dark:placeholder-gray-500 backdrop-blur-sm"
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-700/50 dark:border-gray-800">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-gray-500">
            <span>© {new Date().getFullYear()} Devnity Tech. Made with</span>
            <Heart size={16} className="text-red-400 fill-current animate-pulse" />
            <span>in New York</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-300 dark:text-gray-400">Follow us:</span>
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
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border border-slate-600/50 dark:border-gray-700 hover:shadow-lg bg-slate-700/50 dark:bg-gray-800/50 text-slate-400 dark:text-gray-500 hover:border-transparent backdrop-blur-sm group"
                    style={{
                      '--hover-bg': social.color,
                    } as React.CSSProperties}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = social.color;
                      e.currentTarget.style.borderColor = social.color;
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.boxShadow = `0 10px 25px ${social.color}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.borderColor = '';
                      e.currentTarget.style.color = '';
                      e.currentTarget.style.boxShadow = '';
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
