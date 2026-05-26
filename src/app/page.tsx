"use client";

import { Utensils, Calendar1, ShoppingCart, Globe } from "lucide-react";

import AuthForm from "../components/login/authForm";
import { useAuthForm } from "../hooks/useAuthForm";
export default function Page() {
  const { tab, setTab, showPassword, togglePassword } = useAuthForm();
  return (
    <div className="min-h-screen bg-bg-default border-t border-gray-300">
      <div className="grid md:grid-cols-2 min-h-[calc(100vh-52px)]">
        <div className="flex flex-col justify-center gap-8 px-8 py-12 bg-bg-default mx-auto">
          <div>
            <h1 className="text-2xl md:text-3xl font-medium text-text-default leading-snug mb-3">
              Plan your meals,
              <br />
              simplify your week.
            </h1>
            <p className="text-base text-text-secondary leading-relaxed max-w-sm">
              Save recipes, build weekly meal plans, and generate your shopping
              list automatically.
            </p>
          </div>
          <ul className="flex flex-col gap-3">
            {[
              { icon: <Utensils />, text: "Save and organise your recipes" },
              { icon: <Calendar1 />, text: "Build weekly meal plans" },
              { icon: <ShoppingCart />, text: "Auto-generate shopping lists" },
              { icon: <Globe />, text: "Share with your household" },
            ].map((f) => (
              <li
                key={f.text}
                className="flex items-center gap-3 text-sm text-text-secondary"
              >
                <span className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-sm shrink-0">
                  {f.icon}
                </span>
                {f.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border-t md:border-t-0 md:border-l border-gray-200 flex items-center justify-center px-8 py-12">
          <AuthForm
            tab={tab}
            setTab={setTab}
            showPassword={showPassword}
            onTogglePassword={togglePassword}
          />
        </div>
      </div>
    </div>
  );
}
