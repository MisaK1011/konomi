"use client";

import { useState } from "react";

type Tab = "signin" | "signup";

export function useAuthForm() {
  const [tab, setTab] = useState<Tab>("signin");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((v) => !v);

  return {
    tab,
    setTab,
    showPassword,
    togglePassword,
  };
}
