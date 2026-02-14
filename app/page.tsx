"use client";

import Link from "next/link";
import { components } from "@/app/data/login-ui"; // Ensure this path matches your folder structure
import {
  Github,
  LayoutTemplate,
  ArrowRight,
  Star,
  Terminal,
  Layers
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 ml-52 max-md:hidden dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans selection:bg-orange-100 dark:selection:bg-orange-900/30">


      {/* --- Navbar --- */}
      <nav className="relative sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-800/50 bg-white/60 dark:bg-[#0a0a0a]/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <div className="bg-orange-600 text-white p-1 rounded-md">
              <Layers size={18} />
            </div>
            <span>Login<span className="text-orange-600">UI</span></span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/rahscripts/login"
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Github size={18} />
              <span className="hidden sm:inline">Star on GitHub</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">

        {/* --- Hero Section --- */}
        <div className="flex flex-col items-center text-center mb-24 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800 text-orange-600 dark:text-orange-400 text-xs font-medium uppercase tracking-wider">
            <Terminal size={12} />
            <span>Copy-Paste Ready</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white max-w-4xl">
            Beautiful <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">Login Screens</span> <br className="hidden md:block" /> for your Next Project.
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            A curated collection of modern, responsive, and accessible login components.
            Built with Tailwind CSS and React. Completely free to use.
          </p>

          {/* Author / Social Proof */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link href="https://www.rahscripts.online/" target="_blank" className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-[#121212] rounded-full border border-gray-200 dark:border-gray-800 shadow-sm hover:border-orange-500/30 transition-colors">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Crafted by <span className="font-semibold text-gray-900 dark:text-white hover:underline underline-offset-2">mr.</span>
              </span>
            </Link>

            <Link
              href="https://github.com/rahscripts/login"
              target="_blank"
              className="flex items-center gap-2 px-5 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Star size={16} className="fill-current" />
              <span>Rate this project</span>
            </Link>
          </div>
        </div>

        {/* --- Grid Collection --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component, index) => (
            <Link
              key={index}
              href={`/login/${component.slug}`}
              className="group relative flex flex-col bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1"
            >
              {/* Card Header / Icon */}
              <div className="p-6 pb-0 flex justify-between items-start">
                <div className="p-3 bg-gray-50 dark:bg-[#1a1a1a] rounded-xl group-hover:bg-orange-50 dark:group-hover:bg-orange-900/10 transition-colors">
                  <LayoutTemplate size={24} className="text-gray-400 group-hover:text-orange-500 transition-colors" />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity -mr-2">
                  <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-full text-orange-600">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  {component.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  A clean, responsive login component ready to drop into your Next.js application.
                </p>
              </div>

              {/* Card Footer Gradient Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-32 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Login UI Collection. Built by rahscripts.</p>
        </footer>

      </main>
    </div>
  );
}