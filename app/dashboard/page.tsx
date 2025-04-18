"use client";

import { GuildCard } from "@/components/guild-card";
import { GuildDetailsModal } from "@/components/guild-details-modal";
import { useEffect, useState } from "react";

import { getGuilds } from "./actions";

export default function Dashboard() {
  const [selectedGuild, setSelectedGuild] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guilds, setGuilds] = useState<any[]>([]);

  const handleGuildClick = (guild: any) => {
    setSelectedGuild(guild);
    setIsModalOpen(true);
  };

  useEffect(() => {
    getGuilds().then((data) => {
      if (data) {
        setGuilds(data);
      } else {
        console.log("Failed to fetch guilds"); // Due to rerenders in dev this will be logged as Discord throws a Too Many Requests error
      }
    });
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
