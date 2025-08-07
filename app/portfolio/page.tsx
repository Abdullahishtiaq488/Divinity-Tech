// PortfolioPage.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, ExternalLink, Calendar, Users } from "lucide-react";
import { categories, projects, testimonials } from "@/data/portfolio";
import { Project } from "@/types/types";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Star size={16} />
                        <span>Award-Winning Digital Solutions</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Our <span className="text-blue-600">Portfolio</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Discover how we've helped businesses transform their digital presence and achieve remarkable growth through innovative design and strategic solutions.
                    </p>
                    
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map(cat => (
                            <button 
                                key={cat} 
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 text-sm ${
                                    filter === cat 
                                        ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105" 
                                        : "bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:shadow-md hover:scale-102"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="px-4 md:px-8 lg:px-16 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div 
                                key={project.title}
                                className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-100 hover:border-blue-200 hover:scale-105"
                                onClick={() => setSelected(project)}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-sm text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                                            <ExternalLink size={16} className="text-blue-600" />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {project.desc}
                                    </p>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500">Client: {project.client}</span>
                                        <span className="text-blue-600 font-medium">View Details →</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Modal */}
            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                        <div className="relative">
                            <img 
                                src={selected.image} 
                                alt={selected.title}
                                className="w-full h-64 md:h-80 object-cover"
                            />
                            <button 
                                onClick={() => setSelected(null)}
                                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                            >
                                <X size={20} className="text-gray-700" />
                            </button>
                            <div className="absolute bottom-4 left-6">
                                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    {selected.category}
                                </span>
                            </div>
                        </div>
                        
                        <div className="p-8">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-2">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{selected.title}</h2>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{selected.desc}</p>
                                    
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                                        <h4 className="font-semibold text-green-800 mb-2">Key Results</h4>
                                        <p className="text-green-700">{selected.results}</p>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selected.technologies.map(tech => (
                                                <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Users size={16} className="text-blue-600" />
                                            <span className="font-semibold text-gray-900">Client</span>
                                        </div>
                                        <p className="text-gray-600">{selected.client}</p>
                                    </div>
                                    
                                    <div className="bg-gray-50 rounded-xl p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Calendar size={16} className="text-blue-600" />
                                            <span className="font-semibold text-gray-900">Duration</span>
                                        </div>
                                        <p className="text-gray-600">{selected.duration}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Testimonials Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Client Success Stories</h2>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what our clients say about working with us.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={testimonial.name}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-white mb-6 leading-relaxed">"{testimonial.text}"</p>
                                <div>
                                    <p className="font-semibold text-white">{testimonial.name}</p>
                                    <p className="text-blue-100 text-sm">{testimonial.position}</p>
                                    <p className="text-blue-200 text-sm">{testimonial.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can help transform your business with innovative digital solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 hover:shadow-xl">
                            Start Your Project
                        </button>
                        <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-300 hover:text-blue-600 transition-colors">
                            View Our Process
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}