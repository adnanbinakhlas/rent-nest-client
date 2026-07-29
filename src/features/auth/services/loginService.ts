"use server";

import { env } from "@/config/env";
import { LoginFormValues } from "../schemas/loginSchema";

export const loginService = async (values: LoginFormValues): Promise<void> => {
  const url = `${env.api_url_v1}/auth/login`;
  const loginResponse = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const loginResult = await loginResponse.json();
  console.log("Login Result: ", loginResult);
};
