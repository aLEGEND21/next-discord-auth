"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getGuilds } from "@/lib/utils";

export async function getGuildsAction() {
  const session = await auth();

  // Check if the user is authenticated
  if (!session?.user) {
    redirect("/");
  }

  // Load the user's guilds from the Discord API
  const guilds = await getGuilds(session.user.accessToken as string);
  if (!guilds) {
    redirect("/");
  }

  return guilds;
}
