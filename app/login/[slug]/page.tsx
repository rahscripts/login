"use client";

import { components } from "@/app/data/login-ui";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, use } from "react";

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const component = components.find((c) => c.slug === slug);
    const [copied, setCopied] = useState(false);

    if (!component) notFound();

    const Component = component.preview;

    const handleCopy = () => {
        navigator.clipboard.writeText(component.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-white font-[family-name:var(--font-geist-sans)]">
            {/* Header / Navigation */}
            <div className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Home
                    </Link>
                    <h1 className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                        {component.title} <span className="text-neutral-400 dark:text-neutral-600 font-normal ml-2 text-sm">by mr</span>
                    </h1>
                    <div className="w-24"></div> {/* Spacer for centering title roughly */}
                </div>
            </div>

            <main className="max-w-7xl mx-auto p-4 md:p-8 grid gap-20">

                {/* Preview Section */}
                <div className="scale-80 -mt-20">
                    <div className="flex flex-col h-full bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm ring-1 ring-transparent hover:ring-orange-500/20 transition-all">
                        <div className="p-4 border-b border-gray-100 dark:border-neutral-800 flex justify-between items-center bg-gray-50 dark:bg-neutral-900/50">
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Live Preview</span>
                        </div>
                        <div className="flex-1 overflow-hidden relative rounded-b-2xl bg-gray-100 dark:bg-neutral-900">
                            <div className="w-full h-full overflow-auto">
                                <div className="min-h-full w-full relative isolate">
                                    <Component />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Code Section */}
                <div className="flex scale-80 -mt-70 flex-col h-full bg-[#1e1e1e] rounded-2xl border border-gray-800 overflow-hidden shadow-lg">
                    <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-[#252526]">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Source Code</span>
                        <button
                            onClick={handleCopy}
                            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${copied
                                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                                }`}
                        >
                            {copied ? "Copied!" : "Copy Code"}
                        </button>
                    </div>

                    <div className="flex-1 overflow-auto p-4 relative font-mono text-sm leading-relaxed">
                        <pre className="text-gray-300">
                            <code>{component.code}</code>
                        </pre>
                    </div>
                </div>

            </main>
        </div>
    );
}