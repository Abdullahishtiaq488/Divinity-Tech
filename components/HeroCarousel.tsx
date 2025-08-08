"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Star, Pause } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
}

const heroSlides: HeroSlide[] = [
  {
    id: 'web-development',
    title: 'Transform Your Digital Presence',
    subtitle: 'Premium Web Development',
    description: 'We create stunning, high-performance websites that drive results. From concept to launch, we deliver exceptional digital experiences that set your business apart.',
    backgroundImage: '/hero-web-dev.avif',
    primaryCTA: {
      text: 'Start Your Project',
      href: '/quote'
    },
    secondaryCTA: {
      text: 'View Portfolio',
      href: '/portfolio'
    }
  },
  {
    id: 'design-branding',
    title: 'Elevate Your Brand Identity',
    subtitle: 'Creative Design & Branding',
    description: 'Stand out with compelling visual design that tells your story. Our creative team crafts memorable brand experiences that resonate with your audience.',
    backgroundImage: '/hero-design.avif',
    primaryCTA: {
      text: 'Get Design Quote',
      href: '/quote'
    },
    secondaryCTA: {
      text: 'See Our Work',
      href: '/portfolio'
    }
  },
  {
    id: 'digital-marketing',
    title: 'Accelerate Your Growth',
    subtitle: 'Digital Marketing Excellence',
    description: 'Reach more customers and boost your revenue with data-driven marketing strategies that deliver measurable results for your business.',
    backgroundImage: '/hero-marketing.avif',
    primaryCTA: {
      text: 'Grow My Business',
      href: '/quote'
    },
    secondaryCTA: {
      text: 'Case Studies',
      href: '/portfolio'
    }
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    
    // Preload all images
    heroSlides.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.backgroundImage;
    });
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying || !mounted) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, mounted]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!mounted) {
    return (
      <section className="relative h-screen min-h-[600px] max-h-[900px] bg-gray-900 !bg-none !border-none !shadow-none !rounded-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="h-96" />
          </div>
        </div>
      </section>
    );
  }

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-gray-900 !bg-none !border-none !shadow-none !rounded-none">
      {/* Background Images Container */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.backgroundImage || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
              quality={90}
            />
          </div>
        ))}
        
        {/* Consistent Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Text Content - Override Global Styles */}
            <div className="text-white space-y-4 sm:space-y-6 text-center lg:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlideData.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* Subtitle Badge */}
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                    <Star size={14} className="text-yellow-400" />
                    <span className="text-sm">{currentSlideData.subtitle}</span>
                  </div>

                  {/* Main Title - Override Global H1 Styles */}
                  <h1 className="!text-3xl sm:!text-4xl lg:!text-5xl xl:!text-6xl !font-bold !text-white !leading-tight !mb-0">
                    {currentSlideData.title}
                  </h1>

                  {/* Description */}
                  <p className="text-base sm:text-lg !text-gray-200 max-w-2xl !leading-relaxed !mb-0">
                    {currentSlideData.description}
                  </p>

                  {/* CTAs - Override Global Button Styles */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Link
                      href={currentSlideData.primaryCTA.href}
                      className="group !bg-blue-600 hover:!bg-blue-700 !text-white !px-6 !py-3 !rounded-lg !font-semibold !transition-all !duration-300 !shadow-lg hover:!shadow-xl flex items-center justify-center gap-2 !no-underline hover:!no-underline !border-none"
                    >
                      {currentSlideData.primaryCTA.text}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href={currentSlideData.secondaryCTA.href}
                      className="group !border-2 !border-white/30 hover:!border-white !text-white !px-6 !py-3 !rounded-lg !font-semibold hover:!bg-white/10 !transition-all !duration-300 !backdrop-blur-sm flex items-center justify-center gap-2 !no-underline hover:!no-underline !bg-transparent hover:!text-white"
                    >
                      <Play size={16} />
                      {currentSlideData.secondaryCTA.text}
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side - Professional Visual Element */}
            <div className="hidden lg:block relative">
              <div className="relative max-w-lg mx-auto">
                {/* Main Visual Container */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <Play size={24} className="text-white ml-0.5" />
                    </div>
                    <p className="text-white/80 text-base font-medium">Watch Our Story</p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-3 -right-3 bg-white/10 backdrop-blur-sm rounded-xl p-2.5 border border-white/20">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white text-xs font-medium">25+ Projects</span>
                  </div>
                </div>

                <div className="absolute -bottom-3 -left-3 bg-white/10 backdrop-blur-sm rounded-xl p-2.5 border border-white/20">
                  <div className="flex items-center gap-1.5">
                    <Star size={12} className="text-yellow-400" />
                    <span className="text-white text-xs font-medium">Award Winning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls - Slim & Clean */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        {/* Slide Indicators - Slim */}
        <div className="flex gap-1.5">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-0.5 rounded-full transition-all duration-300 !bg-none !border-none !shadow-none !p-0 ${
                index === currentSlide
                  ? 'w-8 !bg-white'
                  : 'w-4 !bg-white/30 hover:!bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Progress Bar for Active Slide */}
              {index === currentSlide && (
                <motion.div
                  key={`progress-${currentSlide}`}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6, ease: 'linear' }}
                  className="absolute top-0 left-0 h-full bg-blue-400 rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Auto-play Control - Top Right */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-6 right-6 z-20 w-10 h-10 !bg-white/10 !backdrop-blur-sm !border !border-white/20 !rounded-full flex items-center justify-center !text-white hover:!bg-white/20 !transition-all !duration-300 !shadow-none !p-0"
        aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isAutoPlaying ? (
          <Pause size={14} />
        ) : (
          <Play size={14} />
        )}
      </button>

      {/* Arrow Navigation - Override Global Button Styles */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 !bg-white/10 !backdrop-blur-sm !border !border-white/20 !rounded-full flex items-center justify-center !text-white hover:!bg-white/20 !transition-all !duration-300 !shadow-none !p-0"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 !bg-white/10 !backdrop-blur-sm !border !border-white/20 !rounded-full flex items-center justify-center !text-white hover:!bg-white/20 !transition-all !duration-300 !shadow-none !p-0"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-6 z-20">
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-white/60 text-xs font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-4 h-6 border border-white/30 rounded-full flex justify-center"
          >
            <div className="w-0.5 h-1.5 bg-white/60 rounded-full mt-1" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
