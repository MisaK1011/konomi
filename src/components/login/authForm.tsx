"use client";

import clsx from "clsx";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

type Tab = "signin" | "signup";

type Props = {
  tab: Tab;
  setTab: (tab: Tab) => void;
  showPassword: boolean;
  onTogglePassword: () => void;
};

export default function AuthForm({
  tab,
  setTab,
  showPassword,
  onTogglePassword,
}: Props) {
  const inputCls =
    "w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm bg-[#f5f4ed] text-text-default";

  return (
    <div className="w-full max-w-85">
      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-6">
        {(["signin", "signup"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={clsx(
              "flex-1 pb-2 text-sm border-b-2 transition-colors",
              tab === t
                ? "border-text-default text-text-default font-medium"
                : "border-transparent text-gray-400",
            )}
          >
            {t === "signin" ? "Sign in" : "Create account"}
          </button>
        ))}
      </div>

      {/* Google */}
      <button className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-text-default bg-white mb-5">
        <Image
          src="/icon/google-icon.svg"
          width={18}
          height={18}
          alt="Google"
        />

        {tab === "signin" ? "Continue with Google" : "Sign up with Google"}
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400 whitespace-nowrap">
          {tab === "signin" ? "or sign in with email" : "or sign up with email"}
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Forms */}
      <div className="flex flex-col gap-3">
        {tab === "signup" && (
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">
              Name
            </label>
            <input className={inputCls} type="text" placeholder="Your name" />
          </div>
        )}
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">
            Email
          </label>
          <input
            className={inputCls}
            type="email"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">
            Password
          </label>
          <div className="relative">
            <input
              className={`${inputCls} pr-10`}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={onTogglePassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </div>
          {tab === "signin" && (
            <button className="text-xs text-gray-500 mt-1 block ml-auto">
              Forgot password?
            </button>
          )}
        </div>
      </div>

      {/* Submit */}
      <button className="w-full mt-4 py-2.5 bg-text-default text-white text-sm font-medium rounded-lg">
        {tab === "signin" ? "Sign in" : "Create account"}
      </button>
    </div>
  );
}
