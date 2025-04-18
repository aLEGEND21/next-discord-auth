export async function getGuilds(accessToken: string) {
  const res = await fetch("https://discord.com/api/v10/users/@me/guilds", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch guilds");
  }
  const guilds = await res.json();
  return guilds;
}
