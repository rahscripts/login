"use client";

import React, { useState } from "react";
import {
    Eye,
    EyeOff,
    Lock,
    Mail,
    ArrowRight,
    CheckCircle2,
    Github,
    Chrome
} from "lucide-react";
import Link from "next/link";

export default function Login3() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login attempt:", { email, password });
    };

    return (
        <div className="min-h-screen w-full flex bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans">

            {/* --- Left Side: Form Section --- */}
            <div className="w-full flex flex-col justify-center items-center p-2 relative">

                {/* Mobile-only decorative gradient blob */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-amber-500 lg:hidden"></div>

                <div className="w-full max-w-md space-y-8">

                    {/* Header */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Welcome back
                        </h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Please enter your details to access your dashboard.
                        </p>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-sm font-medium">
                            <Chrome size={18} className="text-gray-900 dark:text-white" />
                            <span>Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-sm font-medium">
                            <Github size={18} className="text-gray-900 dark:text-white" />
                            <span>GitHub</span>
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white dark:bg-[#0a0a0a] px-2 text-gray-500">Or login with email</span>
                        </div>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Email Field */}
                        <div className="space-y-1.5">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email Address
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-orange-500 transition-colors">
                                    <Mail size={18} />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 sm:text-sm"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Password
                                </label>
                                <Link href="#" className="text-xs font-medium text-orange-600 hover:text-orange-500 dark:text-orange-400">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-orange-500 transition-colors">
                                    <Lock size={18} />
                                </div>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-10 py-2.5 bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 sm:text-sm"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me Checkbox */}
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 dark:bg-gray-900 dark:border-gray-700"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 dark:text-gray-400">
                                Remember me for 30 days
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 py-2.5 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-gray-900/20 dark:shadow-white/10 hover:shadow-xl hover:scale-[1.01]"
                        >
                            Sign In <ArrowRight size={18} />
                        </button>
                    </form>

                    {/* Footer Sign Up Link */}
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                        Don't have an account?{" "}
                        <Link href="#" className="font-semibold text-orange-600 hover:text-orange-500 dark:text-orange-400 transition-colors">
                            Start your 14-day free trial
                        </Link>
                    </p>
                </div>

                {/* Footer text */}
                <div className="absolute bottom-6 text-xs text-gray-400 dark:text-gray-600">
                    © {new Date().getFullYear()} Acme Corp. All rights reserved.
                </div>
            </div>

        </div>
    );
}