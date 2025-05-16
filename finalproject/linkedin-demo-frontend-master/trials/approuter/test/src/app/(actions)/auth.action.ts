"use server";

import { cookies } from "next/headers";
import { kv } from "@vercel/kv";
import { z, ZodError } from "zod";

// Define Zod Schema
const User = z.object({
  id: z.string(),
  password: z.string(),
});

export default async function auth(id: string, password: string) {
  const token = (await cookies()).get("auth-token")?.value;
  if (!token) return { error: "No token found" };

  try {
    // Fetch user data from Vercel KV
    const userData = await kv.get(`user:${id}`);

    // Validate user data with Zod
    const user = User.parse(userData); // Ensures proper type structure

    if (user.password !== password) return { error: "Invalid password" };

    return { user };
  } catch (error) {
    if (error instanceof ZodError) {
      return { error: "Invalid user data structure", details: error.errors };
    }
    return { error: "Error retrieving user" };
  }
}
