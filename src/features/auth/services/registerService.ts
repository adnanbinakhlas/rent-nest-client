"use server";

import { env } from "@/config/env";

export const registerService = async (values: FormData): Promise<void> => {
  const url = `${env.api_url_v1}/users`;
  const registerResponse = await fetch(url, {
    method: "POST",
    body: values,
  });

  const registerResult = await registerResponse.json();
  console.log("Register Result:", registerResult);
};
