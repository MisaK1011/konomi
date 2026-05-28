"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { login } from "@/src/lib/actions/auth/login";
import { signUp } from "@/src/lib/actions/auth/signUp";

import {
  signInSchema,
  signUpSchema,
  SignInData,
  SignUpData,
} from "@/src/schemas/auth";

type Tab = "signin" | "signup";

export function useAuthForm() {
  const [tab, setTab] = useState<Tab>("signin");
  const [showPassword, setShowPassword] = useState(false);

  const [loginResult, setLoginResult] = useState<any>(null);
  const [signUpResult, setSignUpResult] = useState<any>(null);

  const [isPending, startTransition] = useTransition();

  // ------------------------
  // form
  // ------------------------
  const signInForm = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
  });

  const signUpForm = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
  });

  // ------------------------
  // submit
  // ------------------------
  const onSubmitLogin = (data: SignInData) => {
    startTransition(async () => {
      const result = await login(undefined, data);
      setLoginResult(result);
    });
  };

  const onSubmitSignUp = (data: SignUpData) => {
    startTransition(async () => {
      const result = await signUp(undefined, data);
      setSignUpResult(result);
    });
  };

  // ------------------------
  // helpers
  // ------------------------
  const isSigningIn = tab === "signin";
  const isSigningUp = tab === "signup";

  const registerFields = isSigningIn
    ? signInForm.register
    : signUpForm.register;

  const errors = isSigningIn
    ? signInForm.formState.errors
    : signUpForm.formState.errors;

  const errorMessage = isSigningIn ? loginResult?.error : signUpResult?.error;

  const onSubmit = isSigningIn
    ? signInForm.handleSubmit(onSubmitLogin)
    : signUpForm.handleSubmit(onSubmitSignUp);

  const togglePassword = () => setShowPassword((v) => !v);

  return {
    // state
    tab,
    setTab,
    showPassword,
    togglePassword,
    isPending,

    // form
    signInForm,
    signUpForm,
    registerFields,
    errors,
    onSubmit,

    // server errors
    errorMessage,

    // other
    isSigningIn,
    isSigningUp,
  };
}
