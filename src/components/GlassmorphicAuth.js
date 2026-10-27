import React, { useState } from "react";

/**
 * GlassmorphicAuth – a reusable authentication form with a glass‑morphism UI.
 *
 * Props:
 *   onLogin: (email: string, password: string) => void
 *   // Optional callback invoked when the form is submitted.
 */
export default function GlassmorphicAuth({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) {
      onLogin(email, password);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-6 rounded-xl bg-white/10 p-8 backdrop-blur-lg backdrop-saturate-150 border border-white/20 shadow-2xl"
      >
        <h2 className="text-center text-2xl font-semibold text-white">
          Sign In
        </h2>
        <div>
          <label className="block text-sm font-medium text-white mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md bg-white/20 px-3 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md bg-white/20 px-3 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-white/30 py-2 font-medium text-white transition-colors hover:bg-white/40"
        >
          Login
        </button>
      </form>
    </div>
  );
}
