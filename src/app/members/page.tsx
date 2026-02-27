"use client";

import { useState, useEffect, type FormEvent } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  type User,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

/* ═══════════════════════════════════════════════════
   MEMBERS PORTAL — /members
   Firebase Auth integrated
   ═══════════════════════════════════════════════════ */

const dashboardCards = [
  {
    emoji: "📋",
    title: "Cell Group Materials",
    desc: "Access your DNG and cell group resources",
  },
  {
    emoji: "📅",
    title: "Ministry Schedule",
    desc: "View upcoming ministry assignments",
  },
  {
    emoji: "📄",
    title: "Pastoral Forms",
    desc: "Submit and track pastoral service requests",
  },
  {
    emoji: "📣",
    title: "Announcements",
    desc: "Internal JRM announcements for members",
  },
];

/* ── Login Gate ────────────────────────────────────── */
function LoginGate() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      if (code === "auth/invalid-credential" || code === "auth/user-not-found" || code === "auth/wrong-password") {
        setError("Invalid email or password. Please try again.");
      } else if (code === "auth/too-many-requests") {
        setError("Too many attempts. Please try again later.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleReset() {
    if (!email) {
      setError("Enter your email address first, then click Forgot Password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
      setError("");
    } catch {
      setError("Could not send reset email. Check your email address.");
    }
  }

  return (
    <div className="max-w-[440px] mx-auto text-center py-20 px-6">
      <div className="text-[56px] mb-6">🔐</div>
      <h2 className="font-serif text-[32px] text-white mb-3">
        Members Portal
      </h2>
      <p className="text-sm text-white/[0.45] leading-[1.7] mb-8">
        This area is for JRM members and ministry leaders. Sign in with your JRM
        account to access cell group materials, ministry schedules, pastoral
        forms, and internal documents.
      </p>

      <form onSubmit={handleSubmit} className="text-left">
        {/* Error message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/25 text-red-400 text-sm p-3 rounded-sm mb-5">
            {error}
          </div>
        )}

        {/* Reset confirmation */}
        {resetSent && (
          <div className="bg-amber/10 border border-amber/25 text-amber text-sm p-3 rounded-sm mb-5">
            Password reset email sent. Check your inbox.
          </div>
        )}

        {/* Email */}
        <div className="mb-5">
          <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full py-3 px-4 bg-white/[0.06] border border-white/[0.15] rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-white/30"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full py-3 px-4 bg-white/[0.06] border border-white/[0.15] rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-white/30"
          />
        </div>

        {/* Sign In button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber text-charcoal font-bold text-[13.5px] py-3.5 rounded-[3px] cursor-pointer border-none transition-all duration-200 hover:bg-amber-light hover:-translate-y-px mb-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Signing in..." : "Sign In →"}
        </button>

        {/* Helper links */}
        <p className="text-xs text-white/30 text-center mb-2">
          <button
            type="button"
            onClick={handleReset}
            className="text-amber cursor-pointer hover:underline bg-transparent border-none font-sans text-xs"
          >
            Forgot your password?
          </button>
        </p>
        <p className="text-xs text-white/30 text-center">
          Don&apos;t have an account?{" "}
          <span className="text-amber cursor-pointer hover:underline">
            Request access from your pastor.
          </span>
        </p>
      </form>
    </div>
  );
}

/* ── Dashboard (logged-in state) ──────────────────── */
function Dashboard({ user }: { user: User }) {
  async function handleSignOut() {
    await signOut(auth);
  }

  const displayName = user.displayName || user.email?.split("@")[0] || "Member";

  return (
    <div className="max-w-[720px] mx-auto py-20 px-6">
      <h2 className="font-serif text-[32px] text-white mb-2">
        Welcome back, {displayName} 👋
      </h2>
      <p className="text-sm text-white/[0.45] mb-10">
        Your member dashboard is coming soon.
      </p>

      <div className="grid grid-cols-2 gap-[2px] max-[900px]:grid-cols-1">
        {dashboardCards.map((card) => (
          <div
            key={card.title}
            className="bg-charcoal-3 p-7 border-t-[3px] border-t-amber"
          >
            <div className="text-[28px] mb-3">{card.emoji}</div>
            <h4 className="text-[15px] font-semibold text-white mb-1.5">
              {card.title}
            </h4>
            <p className="text-xs text-white/40 mb-4">{card.desc}</p>
            <span className="inline-block text-[10px] font-semibold tracking-[1px] uppercase text-white/25 bg-white/[0.06] py-1 px-2.5 rounded-sm">
              Coming Soon
            </span>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleSignOut}
          className="text-sm text-amber cursor-pointer bg-transparent border-none hover:underline"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

/* ── Page Export ───────────────────────────────────── */
export default function MembersPage() {
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setChecking(false);
    });
    return unsubscribe;
  }, []);

  if (checking) {
    return (
      <section className="bg-charcoal min-h-[80vh] flex items-center justify-center">
        <div className="text-white/30 text-sm">Loading...</div>
      </section>
    );
  }

  return (
    <section className="bg-charcoal min-h-[80vh] flex items-center justify-center">
      {user ? <Dashboard user={user} /> : <LoginGate />}
    </section>
  );
}
