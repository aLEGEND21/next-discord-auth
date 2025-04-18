import { redirect } from "next/navigation";
import { auth, signOut } from "@/auth";
import { getGuilds } from "@/lib/utils";

export default async function Dashboard() {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  // Load the user's guilds from the Discord API
  const guilds = await getGuilds(session.user.accessToken as string);
  if (!guilds) {
    redirect("/");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/" });
        }}
      >
        <button type="submit" className="p-2 bg-blue-700 rounded-lg">
          Sign out
        </button>
      </form>
      <div>
        <h2>User Info</h2>
        <pre>{JSON.stringify(session.user, null, 2)}</pre>
      </div>

      <div>
        <h2>Your Guilds</h2>
        <ul>
          {guilds.map((guild: any) => (
            <li key={guild.id}>
              <img
                src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                alt=""
              />
              {guild.name}
              <pre>{JSON.stringify(guild, null, 2)}</pre>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
