import Login1 from "@/components/login/Login1";
import Login2 from "@/components/login/Login2";

export const components = [
  {
    slug: "login1",
    title: "login 1",
    code: `"use client";

import { useState } from "react";

export default function LoginPage() {
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
`,
    preview: Login1
  },
  {
    slug: "cards",
    title: "Glass Cards",
    code: `"use client";

import { useState } from "react";

export default function LoginPage2() {
  const [form, setForm] = useState({ email: "", password: "" });
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
    <div className="min-h-screen grid md:grid-cols-2 bg-white dark:bg-black">
      
      {/* left side */}
      <div className="hidden md:flex flex-col justify-center px-12 bg-gradient-to-br from-black to-neutral-800 text-white">
        <h1 className="text-3xl font-bold mb-4">Welcome back</h1>
        <p className="text-neutral-300">
          Build, ship, and grow your ideas. Login to continue your journey.
        </p>
      </div>

      {/* right side */}
      <div className="flex items-center justify-center px-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold mb-6">Login</h2>

          <div className="space-y-5">
            <div>
              <label className="text-sm text-neutral-500">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full border-b border-neutral-300 dark:border-neutral-700 bg-transparent px-1 py-2 focus:outline-none focus:border-black dark:focus:border-white transition"
              />
            </div>

            <div>
              <label className="text-sm text-neutral-500">Password</label>
              <input
                type="password"
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                className="mt-1 w-full border-b border-neutral-300 dark:border-neutral-700 bg-transparent px-1 py-2 focus:outline-none focus:border-black dark:focus:border-white transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 bg-black text-white py-2.5 rounded-lg hover:opacity-90 transition"
          >
            {loading ? "Please wait..." : "Sign in"}
          </button>

          <div className="flex justify-between text-sm mt-4">
            <a href="/forgot" className="underline text-neutral-500">
              Forgot password?
            </a>
            <a href="/signup" className="underline text-neutral-500">
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
`,
    preview: Login2,
  },
];
