"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type LoginData = {
  email: string;
  password: string;
};

export const login = async (_prevState: any, formData: LoginData) => {
  const { email, password } = formData;

  const response = await fetch(`${process.env.API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email, password }),
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
  redirect("/meal-plan");
};
