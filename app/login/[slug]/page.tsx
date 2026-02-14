"use client";

import { components } from "@/app/data/login-ui";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, use } from "react";
import {
    ArrowLeft,
    Code2,
    Eye,
    Copy,
    Check,
    Monitor,
    Smartphone,
    Tablet
} from "lucide-react";

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const component = components.find((c) => c.slug === slug);

    // UI States
    const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
    const [copied, setCopied] = useState(false);

    // Optional: Resizable preview state (Desktop/Tablet/Mobile)
    const [previewWidth, setPreviewWidth] = useState<"100%" | "768px" | "425px">("100%");

    if (!component) notFound();

    const Component = component.preview;

    const handleCopy = () => {
        navigator.clipboard.writeText(component.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans selection:bg-orange-100 dark:selection:bg-orange-900/30">

            {/* --- Navigation Header --- */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                        <div className="p-1.5 rounded-md bg-gray-100 dark:bg-gray-800 group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20 transition-colors">
                            <ArrowLeft size={16} />
                        </div>
                        <span>Back to Home</span>
                    </Link>

                    <h1 className="text-sm font-medium text-gray-900 dark:text-white">
                        {component.title}
                    </h1>

                    {/* Placeholder for symmetry or extra actions */}
                    <div className="w-[120px] flex justify-end">
                        <span className="text-xs text-gray-400 border border-gray-200 dark:border-gray-800 px-2 py-1 rounded-full">
                            v1.0.0
                        </span>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto p-6 md:p-8">

                {/* --- Main Playground Card --- */}
                <div className="flex flex-col bg-white dark:bg-[#121212] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden ring-1 ring-black/5 dark:ring-white/5">

                    {/* Toolbar */}
                    <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-[#121212] gap-4 sm:gap-0">

                        {/* Tab Switcher (Preview vs Code) */}
                        <div className="flex items-center gap-1 p-1 bg-gray-200/50 dark:bg-gray-800 rounded-lg">
                            <button
                                onClick={() => setActiveTab("preview")}
                                className={`flex items-center gap-2 px-3 py-1.5 cursor-pointer text-sm font-medium rounded-md transition-all duration-200 ${activeTab === "preview"
                                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                                    }`}
                            >
                                <Eye size={16} />
                                Preview
                            </button>
                            <button
                                onClick={() => setActiveTab("code")}
                                className={`flex items-center gap-2 px-3 py-1.5 cursor-pointer text-sm font-medium rounded-md transition-all duration-200 ${activeTab === "code"
                                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                                    }`}
                            >
                                <Code2 size={16} />
                                Code
                            </button>
                        </div>

                        {/* Device Toggles (Only visible in Preview) */}
                        {activeTab === "preview" && (
                            <div className="hidden md:flex items-center gap-2 text-gray-400">
                                <button onClick={() => setPreviewWidth("100%")} className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition ${previewWidth === "100%" ? "text-orange-500 bg-orange-50 dark:bg-orange-900/10" : ""}`} title="Desktop">
                                    <Monitor size={16} />
                                </button>
                                <button onClick={() => setPreviewWidth("768px")} className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition ${previewWidth === "768px" ? "text-orange-500 bg-orange-50 dark:bg-orange-900/10" : ""}`} title="Tablet">
                                    <Tablet size={16} />
                                </button>
                                <button onClick={() => setPreviewWidth("425px")} className={`p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition ${previewWidth === "425px" ? "text-orange-500 bg-orange-50 dark:bg-orange-900/10" : ""}`} title="Mobile">
                                    <Smartphone size={16} />
                                </button>
                            </div>
                        )}

                        {/* Copy Button (Only visible in Code) */}
                        {activeTab === "code" && (
                            <button
                                onClick={handleCopy}
                                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 border ${copied
                                    ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800"
                                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                                    }`}
                            >
                                {copied ? <Check size={14} /> : <Copy size={14} />}
                                {copied ? "Copied!" : "Copy JSX"}
                            </button>
                        )}
                    </div>

                    {/* Content Area - Fixed Height for Consistency */}
                    <div className="relative h-[700px] w-full bg-gray-100 dark:bg-[#0c0c0c] overflow-hidden group">

                        {/* --- PREVIEW MODE --- */}
                        {activeTab === "preview" && (
                            <div className="w-full h-full overflow-auto flex items-center justify-center bg-[image:radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[image:radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:16px_16px]">
                                <div
                                    className="transition-all duration-500 ease-in-out h-full border-x border-dashed border-gray-300 dark:border-gray-800 bg-white dark:bg-black shadow-2xl overflow-y-auto"
                                    style={{ width: previewWidth }}
                                >
                                    <div className="min-h-full flex flex-col justify-center p-8">
                                        <Component />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* --- CODE MODE --- */}
                        {activeTab === "code" && (
                            <div className="w-full h-full bg-[#1e1e1e] overflow-auto custom-scrollbar">
                                <div className="p-4 md:p-6">
                                    <pre className="font-mono text-sm leading-relaxed text-blue-100">
                                        <code>{component.code}</code>
                                    </pre>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer / Meta info */}
                <div className="mt-8 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <p>Designed and built by <Link href="https://www.rahscripts.online/" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-200 font-medium">mr</Link>.</p>
                    <p>Next.js 15 • Tailwind CSS</p>
                </div>

            </main>
        </div>
    );
}