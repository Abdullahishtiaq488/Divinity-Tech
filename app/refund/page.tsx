"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import {
  RefreshCw,
  CreditCard,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  Mail,
  Phone,
  MapPin,
  Info,
} from "lucide-react"

export default function RefundPage() {
  const policies = [
    {
      id: "refund-eligibility",
      title: "Refund Eligibility",
      icon: CheckCircle,
      color: "#16a34a",
      content: [
        "Refunds are available within 14 days of project initiation for services not yet commenced.",
        "Custom development work that has begun is not eligible for full refunds due to the personalized nature of the service.",
        "Refunds may be considered on a case-by-case basis for services that do not meet agreed specifications.",
        "No refunds are available for completed and delivered projects that meet the original requirements.",
      ],
    },
    {
      id: "cancellation-policy",
      title: "Cancellation Policy",
      icon: XCircle,
      color: "#dc2626",
      content: [
        "Projects can be cancelled at any time with appropriate notice and payment for work completed.",
        "Cancellations within 48 hours of project start may incur a 25% administrative fee.",
        "For ongoing projects, payment is required for all completed milestones and work in progress.",
        "Cancellation requests must be submitted in writing via email to our support team.",
      ],
    },
    {
      id: "refund-process",
      title: "Refund Process",
      icon: RefreshCw,
      color: "#3b82f6",
      content: [
        "Refund requests must be submitted within the eligible timeframe via our contact form or email.",
        "All refund requests are reviewed within 5-7 business days of submission.",
        "Approved refunds are processed within 10-14 business days to the original payment method.",
        "You will receive email confirmation once your refund has been processed.",
      ],
    },
    {
      id: "payment-disputes",
      title: "Payment Disputes",
      icon: AlertCircle,
      color: "#ea580c",
      content: [
        "We encourage direct communication to resolve any payment concerns before initiating chargebacks.",
        "Disputed charges may result in suspension of services until resolution.",
        "We maintain detailed records of all work performed and communications for dispute resolution.",
        "Chargeback fees may be passed on to clients for frivolous or unjustified disputes.",
      ],
    },
    {
      id: "partial-refunds",
      title: "Partial Refunds",
      icon: CreditCard,
      color: "#9333ea",
      content: [
        "Partial refunds may be available based on the percentage of work completed at time of cancellation.",
        "Design concepts and initial consultations are typically non-refundable once delivered.",
        "Development work is charged based on completed milestones and time invested.",
        "Third-party costs (hosting, licenses, etc.) are generally non-refundable.",
      ],
    },
    {
      id: "timeline",
      title: "Processing Timeline",
      icon: Clock,
      color: "#7c3aed",
      content: [
        "Refund requests are acknowledged within 24-48 hours of receipt.",
        "Review and approval process takes 5-7 business days.",
        "Approved refunds are processed within 10-14 business days.",
        "Bank processing times may add additional 3-5 business days for funds to appear.",
      ],
    },
  ]

  const refundSteps = [
    {
      step: 1,
      title: "Submit Request",
      description: "Contact us with your refund request and reason",
    },
    {
      step: 2,
      title: "Review Process",
      description: "We review your request within 5-7 business days",
    },
    {
      step: 3,
      title: "Decision Notice",
      description: "You'll receive our decision via email",
    },
    {
      step: 4,
      title: "Processing",
      description: "Approved refunds processed within 10-14 days",
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
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border-2"
              style={{
                backgroundColor: "#dcfce7",
                color: "#16a34a",
                borderColor: "#86efac",
              }}
            >
              <RefreshCw size={16} />
              <span>Refund Policy</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: "var(--color-text)" }}>
              Refund & <span style={{ color: "#16a34a" }}>Cancellation Policy</span>
            </h1>

            <p
              className="text-xl leading-relaxed max-w-3xl mx-auto mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              We strive for complete client satisfaction. This policy outlines our refund and cancellation procedures to
              ensure transparency and fairness for all parties involved.
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

      {/* Quick Overview Section */}
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
              <Info size={24} style={{ color: "#16a34a" }} />
              <h2 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>
                Quick Overview
              </h2>
            </div>
            <p className="leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              We offer refunds within 14 days for uncommenced services, handle cancellations fairly with payment for
              completed work, process refunds within 10-14 business days, and maintain transparent communication
              throughout the process. Contact us anytime with questions or concerns.
            </p>
          </motion.div>

          {/* Refund Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
              Refund <span style={{ color: "#16a34a" }}>Process</span>
            </h2>
            <p className="text-lg mb-12" style={{ color: "var(--color-text-secondary)" }}>
              Our straightforward 4-step refund process
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {refundSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2"
                    style={{
                      backgroundColor: "#dcfce7",
                      color: "#16a34a",
                      borderColor: "#86efac",
                    }}
                  >
                    <span className="text-xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-text)" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Policy Details */}
          <div className="space-y-8">
            {policies.map((policy, index) => {
              const IconComponent = policy.icon
              return (
                <motion.div
                  key={policy.id}
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
                          backgroundColor: `${policy.color}20`,
                          color: policy.color,
                          borderColor: `${policy.color}40`,
                        }}
                      >
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>
                        {policy.title}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {policy.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle size={16} className="mt-1 flex-shrink-0" style={{ color: policy.color }} />
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

          {/* Money-Back Guarantee Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 mt-12 border-2"
            style={{
              backgroundColor: "#fef3c7",
              borderColor: "#fbbf24",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle size={24} style={{ color: "#d97706" }} />
              <h3 className="text-2xl font-bold" style={{ color: "#92400e" }}>
                Money-Back Guarantee
              </h3>
            </div>
            <p className="leading-relaxed mb-4" style={{ color: "#92400e" }}>
              We stand behind our work with a satisfaction guarantee. If you're not completely satisfied with our
              services within the first 14 days and no substantial work has begun, we'll provide a full refund.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2" style={{ color: "#92400e" }}>
                  Full Refund Eligible
                </h4>
                <p className="text-sm" style={{ color: "#a16207" }}>
                  Services not yet started within 14 days
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: "#92400e" }}>
                  Partial Refund Available
                </h4>
                <p className="text-sm" style={{ color: "#a16207" }}>
                  Based on work completed at cancellation
                </p>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Section */}
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
                Need to Request a <span style={{ color: "#16a34a" }}>Refund</span>?
              </h3>
              <p style={{ color: "var(--color-text-secondary)" }}>
                We're here to help. Contact our support team to initiate a refund request or discuss your concerns.
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
                  support@devnitytech.com
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

          {/* Important Notice Section */}
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
              <AlertCircle size={20} className="mt-1 flex-shrink-0" style={{ color: "#dc2626" }} />
              <div>
                <h4 className="font-semibold mb-2" style={{ color: "#dc2626" }}>
                  Important Notice
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "#991b1b" }}>
                  This refund policy may be updated periodically to reflect changes in our business practices or legal
                  requirements. We will notify you of any significant changes via email or through our website. Your
                  continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
