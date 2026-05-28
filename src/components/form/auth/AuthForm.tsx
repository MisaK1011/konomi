"use client";

import clsx from "clsx";
import Image from "next/image";

import TextInput from "@/src/components/form/auth/TextInput";
import ErrorMessage from "@/src/components/form/ErrorMessage";
import { useAuthForm } from "@/src/hooks/useAuthForm";
import { Loader2 } from "lucide-react";

type Tab = "signin" | "signup";

export default function AuthForm() {
  const {
    tab,
    setTab,
    showPassword,
    togglePassword,
    registerFields,
    signUpForm,
    errors,
    onSubmit,
    errorMessage,
    isSigningIn,
    isSigningUp,
    isPending,
  } = useAuthForm();

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

        {isSigningIn ? "Continue with Google" : "Sign up with Google"}
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400 whitespace-nowrap">
          {isSigningIn ? "or sign in with email" : "or sign up with email"}
        </span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Forms */}
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        {isSigningUp && (
          <TextInput
            id="name"
            label="Name"
            type="text"
            placeholder="Your name"
            register={signUpForm.register("name")}
            error={signUpForm.formState.errors.name?.message}
          />
        )}

        <TextInput
          id="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          register={registerFields("email")}
          error={errors.email?.message}
        />

        <TextInput
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          register={registerFields("password")}
          error={errors.password?.message}
          onTogglePassword={togglePassword}
          showPassword={showPassword}
        />

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        {/* Submit */}
        <button
          className={clsx(
            "w-full mt-4 py-2.5 bg-text-default text-white text-sm font-medium rounded-lg",
            isPending && "opacity-70 cursor-not-allowed",
          )}
          type="submit"
          title="Submit authentication form"
          disabled={isPending}
        >
          {isPending ? (
            <Loader2 className="animate-spin size-5 mx-auto" />
          ) : isSigningIn ? (
            "Sign in"
          ) : (
            "Create account"
          )}
        </button>
      </form>
    </div>
  );
}
