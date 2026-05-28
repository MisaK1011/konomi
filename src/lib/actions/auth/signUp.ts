"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { PATHS } from "@/src/constants/paths";

type registerData = {
  name: string;
  email: string;
  password: string;
};

export const signUp = async (_prevState: any, formData: registerData) => {
  const { name, email, password } = formData;

  const response = await fetch(`${process.env.API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      password_confirmation: password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    return { error: data.message };
  }

  const cookieStore = await cookies();
  cookieStore.set("token", data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  //   return { success: true, data };
  redirect(PATHS.mealPlan);
};
