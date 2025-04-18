"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function getGuilds() {
  const session = await auth();

  // Check if the user is authenticated
  if (!session?.user) {
    redirect("/");
  }

  // Load the user's guilds from the Discord API
  const res = await fetch("https://discord.com/api/v10/users/@me/guilds", {
    headers: {
      Authorization: `Bearer ${session.user.accessToken}`,
    },
  });

  // Check if the response is ok
  if (!res.ok) {
    return null;
  }

  return await res.json();
}
