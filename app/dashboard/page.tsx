// import { redirect } from "next/navigation";
// import { auth, signOut } from "@/auth";
// import { getGuilds } from "@/lib/utils";

// export default async function Dashboard() {
//   const session = await auth();
//   if (!session?.user) {
//     redirect("/");
//   }

//   // Load the user's guilds from the Discord API
//   const guilds = await getGuilds(session.user.accessToken as string);
//   if (!guilds) {
//     redirect("/");
//   }

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <p>Welcome to your dashboard!</p>
//       <form
//         action={async () => {
//           "use server";
//           await signOut({ redirectTo: "/" });
//         }}
//       >
//         <button type="submit" className="p-2 bg-blue-700 rounded-lg">
//           Sign out
//         </button>
//       </form>
//       <div>
//         <h2>User Info</h2>
//         <pre>{JSON.stringify(session.user, null, 2)}</pre>
//       </div>

//       <div>
//         <h2>Your Guilds</h2>
//         <ul>
//           {guilds.map((guild: any) => (
//             <li key={guild.id}>
//               <img
//                 src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
//                 alt=""
//               />
//               {guild.name}
//               <pre>{JSON.stringify(guild, null, 2)}</pre>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { GuildCard } from "@/components/guild-card";
import { GuildDetailsModal } from "@/components/guild-details-modal";
import { getGuildsAction } from "./actions";

export default function Dashboard() {
  const { data: session } = useSession();
  const [selectedGuild, setSelectedGuild] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guilds, setGuilds] = useState<any[]>([]);

  const handleGuildClick = (guild: any) => {
    setSelectedGuild(guild);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const load = async () => {
      let data = await getGuildsAction();
      setGuilds(data);
    };
    load();
  }, []);

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Your Discord Servers</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {guilds.map((guild: any) => (
          <GuildCard
            key={guild.id}
            guild={guild}
            onClick={() => handleGuildClick(guild)}
          />
        ))}
      </div>

      {selectedGuild && (
        <GuildDetailsModal
          guild={selectedGuild}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
