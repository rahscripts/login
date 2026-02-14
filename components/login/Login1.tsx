
"use client";

import { useState } from "react";

export default function Login1() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        // replace with your api
        await new Promise((res) => setTimeout(res, 1000));

        console.log(form);
        setLoading(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-black px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl shadow"
            >
                <h1 className="text-xl font-semibold mb-5">Login</h1>

                <div className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={form.password}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-5 bg-black text-white py-2 rounded-md hover:opacity-90 transition"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                <p className="text-sm text-neutral-500 mt-4 text-center">
                    Don’t have an account?{" "}
                    <a href="/signup" className="underline">
                        Sign up
                    </a>
                </p>
            </form>
        </div>
    );
}