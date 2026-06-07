"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import {
  Zap,
  Shield,
  Cog,
  Menu,
  X,
  ChevronRight,
  PlayCircle,
  BrainCircuit,
  BarChart3,
  Globe2,
  Cpu
} from 'lucide-react';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
];

const features = [
  {
    title: 'Lightning Speed',
    description: 'Process millions of data points instantly with our highly optimized edge-network engine.',
    icon: Zap,
  },
  {
    title: 'Enterprise Security',
    description: 'Your data is encrypted at rest and in transit. Fully compliant with SOC2 and GDPR.',
    icon: Shield,
  },
  {
    title: 'Intelligent Automation',
    description: 'Automate complex multi-step workflows using our drag-and-drop sentient AI builder.',
    icon: Cog,
  },
];

const testimonials = [
  {
    name: 'Elena Rodriguez',
    role: 'CTO, TechVision',
    content: 'AuraMind completely revolutionized how our engineering teams ship features. The AI automation is indistinguishable from magic.',
    avatar: 'https://picsum.photos/seed/elena/100/100',
  },
  {
    name: 'Marcus Chen',
    role: 'VP of Product',
    content: 'We replaced three separate SaaS products with AuraMind. The dashboard is a masterclass in modern web design and performance.',
    avatar: 'https://picsum.photos/seed/marcus/100/100',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Lead Data Scientist',
    content: 'The speed of data processing is incredible. Our models train 4x faster since we integrated their sentient workflow engine.',
    avatar: 'https://picsum.photos/seed/sarah/100/100',
  },
];

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-50 selection:bg-indigo-500/30 overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] max-h-[600px] max-w-[600px] bg-indigo-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] max-h-[600px] max-w-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex shrink-0 items-center gap-2 cursor-pointer">
              <div className="flex h-8 w-8 justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 items-center">
                <BrainCircuit className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                AuraMind
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden md:flex items-center">
              <button className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-slate-800 px-6 py-2.5 text-sm font-medium shadow-sm transition-all hover:bg-slate-700 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900">
                <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                  Get Started
                </span>
                <ChevronRight className="h-4 w-4 text-blue-400 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/5 bg-slate-900 px-4 pb-4 pt-2 shadow-xl">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-white/5">
                <button className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
          {/* Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] opacity-30 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 blur-[100px] rounded-full mix-blend-screen" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              AuraMind AI Model 2.0 is now live
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white mb-6"
            >
              Automate Your Workflow with <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Sentient AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed"
            >
              The next-generation intelligence layer for high-performance teams. Deploy autonomous agents in seconds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-slate-200">
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-white/10 px-8 py-3 text-sm font-bold transition-colors hover:bg-white/5 text-white">
                View Demo
              </button>
            </motion.div>

            {/* Interactive Mockup Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-20 relative mx-auto max-w-5xl"
            >
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-2 shadow-2xl backdrop-blur-sm before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-b before:from-indigo-500/20 before:to-transparent before:blur-xl">
                <div className="rounded-xl border border-white/5 bg-slate-950 overflow-hidden">
                  {/* Fake Browser Chrome */}
                  <div className="flex items-center gap-2 border-b border-white/5 bg-slate-900 px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                      <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                      <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="mx-auto flex h-6 w-full max-w-sm items-center justify-center rounded bg-slate-800 px-3 text-[10px] text-slate-500">
                      app.auramind.ai
                    </div>
                  </div>
                  {/* Dashboard Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[400px]">
                    {/* Sidebar */}
                    <div className="hidden lg:flex flex-col gap-4 border-r border-white/5 p-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-8 w-full rounded bg-slate-800/50 animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                      ))}
                    </div>
                    {/* Main Content Area */}
                    <div className="col-span-3 p-6" style={{ backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                       {/* Activity Graph Mock */}
                       <div className="mb-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-6 backdrop-blur-md">
                         <div className="flex items-center justify-between mb-4">
                           <div className="space-y-1">
                             <div className="h-4 w-32 rounded bg-slate-700" />
                             <div className="h-8 w-48 rounded bg-slate-800" />
                           </div>
                           <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                             <BarChart3 className="h-6 w-6" />
                           </div>
                         </div>
                         <div className="flex items-end gap-2 h-24">
                           {[40, 70, 45, 90, 65, 85, 100, 60, 40, 80].map((h, i) => (
                             <div key={i} className="w-full rounded-t bg-gradient-to-t from-indigo-500 to-blue-400 opacity-80" style={{ height: `${h}%` }} />
                           ))}
                         </div>
                       </div>

                       {/* Action Cards */}
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-slate-800/50 p-4 transition-colors hover:bg-slate-800">
                           <div className="rounded-lg bg-emerald-500/20 p-2 text-emerald-400">
                             <Globe2 className="h-5 w-5" />
                           </div>
                           <div className="space-y-2 flex-1">
                             <div className="h-4 w-24 rounded bg-slate-700" />
                             <div className="h-3 w-full rounded bg-slate-700/50" />
                             <div className="h-3 w-2/3 rounded bg-slate-700/50" />
                           </div>
                         </div>
                         <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-slate-800/50 p-4 transition-colors hover:bg-slate-800">
                           <div className="rounded-lg bg-purple-500/20 p-2 text-purple-400">
                             <Cpu className="h-5 w-5" />
                           </div>
                           <div className="space-y-2 flex-1">
                             <div className="h-4 w-24 rounded bg-slate-700" />
                             <div className="h-3 w-full rounded bg-slate-700/50" />
                             <div className="h-3 w-4/5 rounded bg-slate-700/50" />
                           </div>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Grid */}
        <section id="features" className="py-24 relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Built for the modern edge
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Everything you need to automate workflows, scale operations, and secure your data in one intelligent platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const bentoStyles = [
                  "md:col-span-4 md:row-span-2 bg-white/5 flex flex-col justify-between",
                  "md:col-span-8 md:row-span-1 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 lg:flex-row items-center gap-6",
                  "md:col-span-8 md:row-span-1 bg-slate-900/50 lg:flex-row items-center gap-6"
                ];

                return (
                  <div
                    key={index}
                    className={`group rounded-2xl border border-white/10 p-6 md:p-8 backdrop-blur-sm transition-all flex flex-col ${bentoStyles[index]}`}
                  >
                    <div className={index !== 0 ? "flex-1" : ""}>
                      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 border border-white/10 shadow-lg">
                        <Icon className="h-6 w-6 text-indigo-400" />
                      </div>
                      <h3 className="mb-3 font-display text-xl font-bold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    {index === 0 && (
                      <div className="pt-4 border-t border-white/10 mt-6">
                        <div className="flex justify-between text-xs text-slate-500 uppercase tracking-widest font-bold">
                          <span>Performance</span>
                          <span className="text-indigo-400">99.9%</span>
                        </div>
                      </div>
                    )}
                    {index !== 0 && (
                      <div className="hidden lg:flex w-24 h-24 bg-slate-900 shrink-0 rounded-full border-4 border-indigo-500/30 items-center justify-center">
                        <Icon className="w-10 h-10 text-blue-400 opacity-50" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 relative overflow-hidden z-10">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Loved by engineering teams
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                See why the fastest growing startups are switching to AuraMind for their automation needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {testimonials.map((testimonial, index) => {
                const bentoStyles = [
                  "md:col-span-3 bg-white/5",
                  "md:col-span-5 bg-gradient-to-br from-indigo-500/10 to-blue-500/10",
                  "md:col-span-4 bg-indigo-600/90"
                ];
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border border-white/10 p-6 flex flex-col justify-between backdrop-blur-sm ${bentoStyles[index]}`}
                  >
                    <div>
                      <div className="flex gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className={`text-lg ${index === 2 ? 'text-yellow-300' : 'text-yellow-500'}`}>★</span>
                        ))}
                      </div>
                      <p className={`text-sm italic mb-6 leading-relaxed ${index === 2 ? 'text-indigo-100' : 'text-slate-300'}`}>
                        "{testimonial.content}"
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-auto">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={32}
                        height={32}
                        className="rounded-full bg-slate-800 object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <p className={`text-xs font-bold text-white`}>{testimonial.name}</p>
                        <p className={`text-[10px] uppercase tracking-wider ${index === 2 ? 'text-indigo-200' : 'text-slate-500'}`}>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 pt-16 pb-8 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500">
                  <BrainCircuit className="h-4 w-4 text-white" />
                </div>
                <span className="font-display text-lg font-bold text-white">AuraMind</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                Empowering the next generation of builders with sentient workflow automation.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {['Features', 'Integrations', 'Pricing', 'Changelog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                {['Documentation', 'API Reference', 'Blog', 'Community'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Privacy Policy', 'Terms of Service'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-400 hover:text-indigo-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} AuraMind Inc. All rights reserved.
            </p>
            <div className="flex gap-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500 my-auto shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              <span className="text-sm text-slate-500">All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
