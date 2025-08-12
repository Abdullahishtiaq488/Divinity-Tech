"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { Shield, FileText, Users, AlertTriangle, Scale, Clock, CheckCircle, Mail, Phone, MapPin } from "lucide-react"

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: FileText,
      color: "#3b82f6", // Added beautiful blue color
      content: [
        "By accessing and using Devnity Tech's services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use our services.",
      ],
    },
    {
      id: "services",
      title: "Description of Services",
      icon: Shield,
      color: "#16a34a", // Added beautiful green color
      content: [
        "Devnity Tech provides web development, UI/UX design, digital marketing, and related technology services.",
        "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.",
        "All services are provided on an 'as is' and 'as available' basis without warranties of any kind.",
      ],
    },
    {
      id: "user-obligations",
      title: "User Obligations",
      icon: Users,
      color: "#9333ea", // Added beautiful purple color
      content: [
        "You agree to provide accurate, current, and complete information during registration and project initiation.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You agree not to use our services for any unlawful or prohibited activities.",
        "You must not interfere with or disrupt our services or servers.",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      icon: Scale,
      color: "#ea580c", // Added beautiful orange color
      content: [
        "All content, features, and functionality of our services are owned by Devnity Tech and are protected by copyright, trademark, and other laws.",
        "Upon full payment, clients receive ownership rights to custom work created specifically for their project.",
        "We retain rights to general methodologies, techniques, and know-how used in providing services.",
        "Clients grant us permission to use their project as a portfolio piece unless otherwise agreed in writing.",
      ],
    },
    {
      id: "payment-terms",
      title: "Payment Terms",
      icon: Clock,
      color: "#dc2626", // Added beautiful red color
      content: [
        "Payment terms are specified in individual project agreements and invoices.",
        "Late payments may incur additional fees as specified in your service agreement.",
        "All prices are in USD unless otherwise specified.",
        "We reserve the right to suspend services for accounts with overdue payments.",
      ],
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      icon: AlertTriangle,
      color: "#7c3aed", // Added beautiful violet color
      content: [
        "Devnity Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages.",
        "Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.",
        "We are not responsible for any loss of data, profits, or business interruption.",
        "Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.",
      ],
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-background)" }}>

      {/* Hero Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border-2"
              style={{
                backgroundColor: "#f3e8ff",
                color: "#9333ea",
                borderColor: "#c084fc",
              }}
            >
              <Scale size={16} />
              <span>Legal Information</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: "var(--color-text)" }}>
              Terms & <span style={{ color: "#3b82f6" }}>Conditions</span>
            </h1>

            <p
              className="text-xl leading-relaxed max-w-3xl mx-auto mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Please read these terms and conditions carefully before using our services. These terms govern your use of
              Devnity Tech's services and form a binding agreement between you and us.
            </p>

            <div
              className="flex items-center justify-center gap-2 text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <Clock size={16} />
              <span>Last updated: January 2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 mb-12 border-2"
            style={{
              backgroundColor: "var(--color-muted)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText size={24} style={{ color: "#3b82f6" }} />
              <h2 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>
                Quick Overview
              </h2>
            </div>
            <p className="leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              By using our services, you agree to these terms. We provide web development and digital services, require
              accurate information from clients, protect intellectual property rights, and maintain clear payment and
              liability terms. Contact us with any questions about these terms.
            </p>
          </motion.div>

          {/* Terms Content */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-2"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border-2"
                        style={{
                          backgroundColor: `${section.color}20`, // Using section-specific colors
                          color: section.color,
                          borderColor: `${section.color}40`,
                        }}
                      >
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>
                        {section.title}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle size={16} className="mt-1 flex-shrink-0" style={{ color: section.color }} />
                          <span className="leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 mt-12 border-2"
            style={{
              backgroundColor: "#fef2f2",
              borderColor: "#fca5a5",
            }}
          >
            <div className="flex items-start gap-3">
              <AlertTriangle size={20} className="mt-1 flex-shrink-0" style={{ color: "#dc2626" }} />
              <div>
                <h4 className="font-semibold mb-2" style={{ color: "#dc2626" }}>
                  Important Notice
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "#991b1b" }}>
                  These terms may be updated periodically to reflect changes in our services or legal requirements. We
                  will notify you of any significant changes via email or through our website. Your continued use of our
                  services after such changes constitutes acceptance of the updated terms.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl p-8 border-2"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
                Questions About These <span style={{ color: "#3b82f6" }}>Terms</span>?
              </h3>
              <p style={{ color: "var(--color-text-secondary)" }}>
                We're here to help. Contact us with any questions about our terms and conditions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 border-2"
                  style={{
                    backgroundColor: "#dbeafe",
                    color: "#2563eb",
                    borderColor: "#93c5fd",
                  }}
                >
                  <Mail size={20} />
                </div>
                <h4 className="font-semibold mb-1" style={{ color: "var(--color-text)" }}>
                  Email Us
                </h4>
                <p className="text-sm" style={{ color: "#2563eb" }}>
                  legal@devnitytech.com
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 border-2"
                  style={{
                    backgroundColor: "#dcfce7",
                    color: "#16a34a",
                    borderColor: "#86efac",
                  }}
                >
                  <Phone size={20} />
                </div>
                <h4 className="font-semibold mb-1" style={{ color: "var(--color-text)" }}>
                  Call Us
                </h4>
                <p className="text-sm" style={{ color: "#16a34a" }}>
                  +1 (410) 756-0672
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 border-2"
                  style={{
                    backgroundColor: "#f3e8ff",
                    color: "#9333ea",
                    borderColor: "#c084fc",
                  }}
                >
                  <MapPin size={20} />
                </div>
                <h4 className="font-semibold mb-1" style={{ color: "var(--color-text)" }}>
                  Visit Us
                </h4>
                <p className="text-sm" style={{ color: "#9333ea" }}>
                  124 Emma Circle Harrisburg, PA 17112
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
