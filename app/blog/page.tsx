"use client"

import type React from "react"

import { useState, useCallback, useMemo } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Search, Filter, BookOpen, TrendingUp, Award, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { blogPosts, blogCategories, featuredPosts } from "@/data/blog"

// Memoized color schemes for performance
const CATEGORY_COLORS = [
  { bg: "#dbeafe", text: "#2563eb", border: "#93c5fd" },
  { bg: "#dcfce7", text: "#16a34a", border: "#86efac" },
  { bg: "#f3e8ff", text: "#9333ea", border: "#c084fc" },
  { bg: "#fed7aa", text: "#ea580c", border: "#fdba74" },
] as const

export default function BlogPage() {
  const [filter, setFilter] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Memoized filtered posts for performance
  const filteredPosts = useMemo(() => {
    let posts = filter === "All" ? blogPosts : blogPosts.filter((p) => p.category === filter)

    if (searchQuery) {
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    return posts
  }, [filter, searchQuery])

  // Event handlers
  const handleFilterChange = useCallback((category: string) => {
    setFilter(category)
  }, [])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }, [])

  // Format date helper
  const formatDate = useCallback((dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-background)" }}>
      {/* Hero Section */}
      <section
        className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
        style={{ backgroundColor: "var(--color-surface)" }}
        aria-labelledby="hero-heading"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border-2"
            style={{
              backgroundColor: "#dcfce7",
              color: "#16a34a",
              borderColor: "#bbf7d0",
            }}
          >
            <BookOpen size={16} aria-hidden="true" />
            <span>Insights & Knowledge</span>
          </div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            Our <span style={{ color: "#3b82f6" }}>Blog</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Stay updated with the latest trends, insights, and best practices in web development, design, and digital
            marketing.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="max-w-md mx-auto mb-8"
          >
            <div className="relative">
              <Search
                size={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2"
                style={{ color: "var(--color-text-secondary)" }}
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: "var(--color-background)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-text)",
                }}
                aria-label="Search blog articles"
              />
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-wrap gap-3 justify-center"
            role="tablist"
            aria-label="Blog category filters"
          >
            {blogCategories.map((cat, index) => {
              const color = CATEGORY_COLORS[index % CATEGORY_COLORS.length]

              return (
                <button
                  key={cat.name}
                  onClick={() => handleFilterChange(cat.name)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 text-sm hover:scale-105 flex items-center gap-2 ${
                    filter === cat.name ? "shadow-lg scale-105" : "hover:shadow-md"
                  }`}
                  style={{
                    backgroundColor: filter === cat.name ? color.text : "var(--color-background)",
                    color: filter === cat.name ? "white" : color.text,
                    borderColor: color.border,
                  }}
                  role="tab"
                  aria-selected={filter === cat.name}
                  aria-label={`Filter by ${cat.name} category`}
                >
                  <Filter size={14} aria-hidden="true" />
                  {cat.name}
                  <span className="text-xs opacity-75">({cat.count})</span>
                </button>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {filter === "All" && !searchQuery && (
        <section className="py-16 px-4 md:px-8 lg:px-16" aria-labelledby="featured-heading">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div
                className="p-2 rounded-lg border-2"
                style={{
                  backgroundColor: "#fed7aa",
                  color: "#ea580c",
                  borderColor: "#fdba74",
                }}
              >
                <TrendingUp size={20} aria-hidden="true" />
              </div>
              <h2 id="featured-heading" className="text-3xl font-bold" style={{ color: "var(--color-text)" }}>
                Featured Articles
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => {
                const color = CATEGORY_COLORS[index % CATEGORY_COLORS.length]

                return (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border-2 hover:scale-105"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <Link href={`/blog/${post.id}`} className="block" aria-label={`Read article: ${post.title}`}>
                      <div className="relative overflow-hidden">
                        <div className="aspect-[16/10] relative">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={`${post.title} - featured article`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                            quality={85}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span
                            className="px-3 py-1 rounded-full text-xs font-semibold border-2"
                            style={{
                              backgroundColor: color.bg,
                              color: color.text,
                              borderColor: color.border,
                            }}
                          >
                            {post.category}
                          </span>
                          <div
                            className="px-2 py-1 rounded-full text-xs font-medium border"
                            style={{
                              backgroundColor: "#fed7aa",
                              color: "#ea580c",
                              borderColor: "#fdba74",
                            }}
                          >
                            <Award size={12} className="inline mr-1" aria-hidden="true" />
                            Featured
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3
                          className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2"
                          style={{ color: "var(--color-text)" }}
                        >
                          {post.title}
                        </h3>
                        <p
                          className="mb-4 leading-relaxed line-clamp-3"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-sm mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Calendar size={14} style={{ color: "var(--color-text-secondary)" }} aria-hidden="true" />
                              <span style={{ color: "var(--color-text-secondary)" }}>
                                {formatDate(post.publishedAt)}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={14} style={{ color: "var(--color-text-secondary)" }} aria-hidden="true" />
                              <span style={{ color: "var(--color-text-secondary)" }}>{post.readTime} min read</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-8 h-8 relative rounded-full overflow-hidden border"
                              style={{ borderColor: color.text }}
                            >
                              <Image
                                src={post.author.avatar || "/placeholder.svg"}
                                alt={`${post.author.name} - ${post.author.role}`}
                                fill
                                sizes="32px"
                                className="object-cover"
                                loading="lazy"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                                {post.author.name}
                              </p>
                            </div>
                          </div>
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                            style={{ color: color.text }}
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="px-4 md:px-8 lg:px-16 pb-20" aria-labelledby="blog-grid-heading">
        <div className="max-w-7xl mx-auto py-8">
          <div className="flex items-center justify-between mb-12">
            <h2 id="blog-grid-heading" className="text-3xl font-bold" style={{ color: "var(--color-text)" }}>
              {filter === "All" ? "All Articles" : filter}
              <span className="text-lg font-normal ml-2" style={{ color: "var(--color-text-secondary)" }}>
                ({filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"})
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {filteredPosts.map((post, index) => {
              const color = CATEGORY_COLORS[index % CATEGORY_COLORS.length]

              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 hover:scale-105"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <Link href={`/blog/${post.id}`} className="block" aria-label={`Read article: ${post.title}`}>
                    <div className="relative overflow-hidden">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={`${post.title} - blog article`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          quality={80}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="absolute top-4 left-4">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-semibold border-2"
                          style={{
                            backgroundColor: color.bg,
                            color: color.text,
                            borderColor: color.border,
                          }}
                        >
                          {post.category}
                        </span>
                      </div>

                      {post.featured && (
                        <div className="absolute top-4 right-4">
                          <div
                            className="px-2 py-1 rounded-full text-xs font-medium border"
                            style={{
                              backgroundColor: "#fed7aa",
                              color: "#ea580c",
                              borderColor: "#fdba74",
                            }}
                          >
                            <Sparkles size={12} className="inline mr-1" aria-hidden="true" />
                            Featured
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3
                        className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2"
                        style={{ color: "var(--color-text)" }}
                      >
                        {post.title}
                      </h3>
                      <p className="mb-4 leading-relaxed line-clamp-3" style={{ color: "var(--color-text-secondary)" }}>
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} style={{ color: "var(--color-text-secondary)" }} aria-hidden="true" />
                            <span style={{ color: "var(--color-text-secondary)" }}>{formatDate(post.publishedAt)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={14} style={{ color: "var(--color-text-secondary)" }} aria-hidden="true" />
                            <span style={{ color: "var(--color-text-secondary)" }}>{post.readTime} min read</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-8 h-8 relative rounded-full overflow-hidden border"
                            style={{ borderColor: color.text }}
                          >
                            <Image
                              src={post.author.avatar || "/placeholder.svg"}
                              alt={`${post.author.name} - ${post.author.role}`}
                              fill
                              sizes="32px"
                              className="object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <p className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                              {post.author.name}
                            </p>
                          </div>
                        </div>
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                          style={{ color: color.text }}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              )
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 border-2"
                style={{
                  backgroundColor: "var(--color-muted)",
                  borderColor: "var(--color-border)",
                }}
              >
                <Search size={24} style={{ color: "var(--color-text-secondary)" }} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--color-text)" }}>
                No articles found
              </h3>
              <p style={{ color: "var(--color-text-secondary)" }}>Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-4 md:px-8 lg:px-16"
        style={{ backgroundColor: "var(--color-surface)" }}
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border-2"
              style={{
                backgroundColor: "#dbeafe",
                color: "#2563eb",
                borderColor: "#93c5fd",
              }}
            >
              <Sparkles size={16} aria-hidden="true" />
              <span>Stay Updated</span>
            </div>

            <h2 id="cta-heading" className="text-4xl font-bold mb-6" style={{ color: "var(--color-text)" }}>
              Ready to Start Your <span style={{ color: "#3b82f6" }}>Project</span>?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
              Get insights like these delivered to your inbox, or let's discuss how we can help transform your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 no-underline"
                aria-label="Start your project with us"
              >
                Start Your Project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-blue-200 hover:border-blue-400 bg-white hover:bg-blue-50 text-blue-700 hover:text-blue-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md no-underline"
                aria-label="Learn about our services"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
