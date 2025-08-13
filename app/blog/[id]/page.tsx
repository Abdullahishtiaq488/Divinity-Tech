"use client"
import { useState, useCallback, useMemo, use } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  Clock,
  Tag,
  ArrowLeft,
  ArrowRight,
  Share2,
  BookOpen,
  User,
  Award,
  Sparkles,
  ChevronRight,
  Home,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "@/data/blog"

const CATEGORY_COLORS = [
  { bg: "#dbeafe", text: "#2563eb", border: "#93c5fd" },
  { bg: "#dcfce7", text: "#16a34a", border: "#86efac" },
  { bg: "#f3e8ff", text: "#9333ea", border: "#c084fc" },
  { bg: "#fed7aa", text: "#ea580c", border: "#fdba74" },
] as const

interface BlogPostPageProps {
  params: Promise<{
    id: string
  }>
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = use(params)
  const [isSharing, setIsSharing] = useState(false)

  const numericId = Number.parseInt(id, 10)
  const post = useMemo(() => blogPosts.find((p) => p.id === numericId), [numericId])
  const relatedPosts = useMemo(() => {
    if (!post) return []
    return blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)
  }, [post])

  const currentIndex = useMemo(() => blogPosts.findIndex((p) => p.id === numericId), [numericId])
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  if (!post) notFound()

  const formatDate = useCallback((dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }, [])

  const handleShare = useCallback(async () => {
    setIsSharing(true)
    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } else {
        await navigator.clipboard.writeText(window.location.href)
      }
    } catch (error) {
      console.error("Error sharing:", error)
    } finally {
      setIsSharing(false)
    }
  }, [post.title, post.excerpt])

  const categoryColor = CATEGORY_COLORS[0]

  // Process content for proper spacing
  const firstParagraph = post.content.split('<br><br>')[0]
  const remainingContent = post.content.split('<br><br>').slice(1).join('<div class="my-6"></div>')

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-background)" }}>
      {/* Breadcrumb Navigation */}
      <nav className="py-6 px-4 md:px-8 lg:px-16" aria-label="Breadcrumb">
        <div className="max-w-6xl mx-auto">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-blue-600 transition-colors" style={{ color: "var(--color-text-secondary)" }}>
                <Home size={16} />
                Home
              </Link>
            </li>
            <ChevronRight size={16} style={{ color: "var(--color-text-secondary)" }} />
            <li>
              <Link href="/blog" className="hover:text-blue-600 transition-colors" style={{ color: "var(--color-text-secondary)" }}>
                Blog
              </Link>
            </li>
            <ChevronRight size={16} style={{ color: "var(--color-text-secondary)" }} />
            <li className="font-medium" style={{ color: "var(--color-text)" }}>
              {post.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-2 rounded-full text-sm font-semibold border-2" style={{
                  backgroundColor: categoryColor.bg,
                  color: categoryColor.text,
                  borderColor: categoryColor.border,
                }}>
                  {post.category}
                </span>
                {post.featured && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium border-2 flex items-center gap-1" style={{
                    backgroundColor: "#fed7aa",
                    color: "#ea580c",
                    borderColor: "#fdba74",
                  }}>
                    <Award size={14} />
                    Featured
                  </span>
                )}
              </div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "var(--color-text)" }}>
                {post.title}
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl leading-relaxed mb-8" style={{ color: "var(--color-text-secondary)" }}>
                {post.excerpt}
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b" style={{ borderColor: "var(--color-border)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden border-2" style={{ borderColor: categoryColor.text }}>
                    <Image src={post.author.avatar || "/placeholder.svg"} alt={`${post.author.name} - ${post.author.role}`} fill sizes="48px" className="object-cover" priority />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "var(--color-text)" }}>{post.author.name}</p>
                    <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{post.author.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{post.readTime} min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} />
                    <span>{post.category}</span>
                  </div>
                </div>

                <button onClick={handleShare} disabled={isSharing} className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 hover:shadow-md transition-all duration-300" style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-text)",
                }}>
                  <Share2 size={16} />
                  {isSharing ? "Sharing..." : "Share"}
                </button>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="sticky top-8">
                <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl border-2" style={{ borderColor: "var(--color-border)" }}>
                  <Image src={post.image || "/placeholder.svg"} alt={`${post.title} - article image`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" priority quality={90} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="prose prose-lg prose-blue max-w-none" style={{ color: "var(--color-text)" }}>
            <div className="text-lg leading-relaxed">
              {/* First paragraph with special styling */}
              <div 
                className="text-xl leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1"
                dangerouslySetInnerHTML={{ __html: firstParagraph }} 
              />
              
              {/* Remaining content with proper spacing */}
              <div 
                className="text-lg leading-relaxed mt-6"
                dangerouslySetInnerHTML={{ __html: remainingContent }} 
              />
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <p className="text-blue-900 font-medium">
                💡 <strong>Key Takeaway:</strong> This article provides valuable insights into {post.category.toLowerCase()} that can help you improve your business outcomes and stay ahead of industry trends.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--color-border)" }}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: "var(--color-text)" }}>
                <Tag size={20} />
                Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag, index) => {
                  const color = CATEGORY_COLORS[index % CATEGORY_COLORS.length]
                  return (
                    <span key={tag} className="px-4 py-2 rounded-full text-sm font-medium border-2 flex items-center gap-1" style={{
                      backgroundColor: color.bg,
                      color: color.text,
                      borderColor: color.border,
                    }}>
                      <Tag size={12} />
                      {tag}
                    </span>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Author Bio Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl p-8 border-2" style={{
            backgroundColor: "var(--color-background)",
            borderColor: "var(--color-border)",
          }}>
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 relative rounded-full overflow-hidden border-4 flex-shrink-0" style={{ borderColor: categoryColor.text }}>
                <Image src={post.author.avatar || "/placeholder.svg"} alt={`${post.author.name} - ${post.author.role}`} fill sizes="80px" className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <User size={16} style={{ color: categoryColor.text }} />
                  <h3 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>{post.author.name}</h3>
                </div>
                <p className="text-lg font-medium mb-3" style={{ color: categoryColor.text }}>{post.author.role}</p>
                <p className="leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {post.author.bio || `${post.author.name} is a ${post.author.role} with extensive experience in ${post.category.toLowerCase()}. They specialize in creating innovative solutions and sharing insights with the development community.`}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Section */}
      {(previousPost || nextPost) && (
        <section className="py-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {previousPost && (
                <Link href={`/blog/${previousPost.id}`} className="group p-6 rounded-2xl border-2 hover:shadow-lg transition-all duration-300 block" style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}>
                  <div className="flex items-center gap-2 mb-3 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    <ArrowLeft size={16} />
                    <span>Previous Article</span>
                  </div>
                  <h4 className="font-bold group-hover:text-blue-600 transition-colors" style={{ color: "var(--color-text)" }}>
                    {previousPost.title}
                  </h4>
                </Link>
              )}

              {nextPost && (
                <Link href={`/blog/${nextPost.id}`} className="group p-6 rounded-2xl border-2 hover:shadow-lg transition-all duration-300 block text-right md:ml-auto" style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}>
                  <div className="flex items-center justify-end gap-2 mb-3 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    <span>Next Article</span>
                    <ArrowRight size={16} />
                  </div>
                  <h4 className="font-bold group-hover:text-blue-600 transition-colors" style={{ color: "var(--color-text)" }}>
                    {nextPost.title}
                  </h4>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: "var(--color-surface)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 rounded-lg border-2" style={{
                backgroundColor: categoryColor.bg,
                color: categoryColor.text,
                borderColor: categoryColor.border,
              }}>
                <Sparkles size={20} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: "var(--color-text)" }}>Related Articles</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => {
                const color = CATEGORY_COLORS[index % CATEGORY_COLORS.length]
                return (
                  <motion.article key={relatedPost.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="group rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 hover:scale-105" style={{
                    backgroundColor: "var(--color-background)",
                    borderColor: "var(--color-border)",
                  }}>
                    <Link href={`/blog/${relatedPost.id}`} className="block">
                      <div className="relative overflow-hidden">
                        <div className="aspect-[4/3] relative">
                          <Image src={relatedPost.image || "/placeholder.svg"} alt={`${relatedPost.title} - related article`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold border-2" style={{
                            backgroundColor: color.bg,
                            color: color.text,
                            borderColor: color.border,
                          }}>
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2" style={{ color: "var(--color-text)" }}>
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm leading-relaxed line-clamp-2 mb-4" style={{ color: "var(--color-text-secondary)" }}>
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs">
                          <span style={{ color: "var(--color-text-secondary)" }}>{formatDate(relatedPost.publishedAt)}</span>
                          <span style={{ color: "var(--color-text-secondary)" }}>{relatedPost.readTime} min read</span>
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

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border-2" style={{
              backgroundColor: "#dbeafe",
              color: "#2563eb",
              borderColor: "#93c5fd",
            }}>
              <Sparkles size={16} />
              <span>Ready to Get Started?</span>
            </div>

            <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--color-text)" }}>
              Let's Discuss Your <span style={{ color: "#3b82f6" }}>Project</span>
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
              Found this article helpful? Let's talk about how we can help you implement these strategies for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 no-underline">
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              <Link href="/blog" className="flex border-2 border-blue-200 hover:border-blue-400 bg-white hover:bg-blue-50 text-blue-700 hover:text-blue-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md no-underline">
                <ArrowLeft size={18} className="mr-2" />
                Back to Blog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}