"use server";

import { env } from "@/config/env";
import { LoginFormValues } from "../schemas/loginSchema";
import { ApiResponse } from "@/types/apiResponse";
import { LoginData } from "../types/login";
import { cookies } from "next/headers";
import { token } from "../constant/token";

export const loginService = async (values: LoginFormValues): Promise<void> => {
  const url = `${env.api_url_v1}/auth/login`;
  const loginResponse = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const loginResult = (await loginResponse.json()) as ApiResponse<LoginData>;

  if (loginResult.success) {
    const data = loginResult.data;
    const cookieStore = await cookies();
    cookieStore.set(token.accessToken, data.accessToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });
    cookieStore.set(token.refreshToken, data.refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
  }
  console.log("Login Result: ", loginResult);
};
