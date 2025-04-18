"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, ShieldCheck } from "lucide-react";

interface GuildCardProps {
  guild: {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
  };
  onClick: () => void;
}

export function GuildCard({ guild, onClick }: GuildCardProps) {
  return (
    <Card
      className="overflow-hidden transition-all hover:border-[#26ba9c]/50 hover:shadow-md hover:shadow-[#26ba9c]/10"
      onClick={onClick}
    >
      <CardContent className="flex cursor-pointer flex-col items-center p-6">
        <div className="mb-4 h-16 w-16 overflow-hidden rounded-full">
          <Image
            src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
            alt={guild.name}
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="text-center">
          <h3 className="mb-2 text-lg font-semibold">{guild.name}</h3>

          {guild.owner ? (
            <Badge className="bg-[#26ba9c] hover:bg-[#1fa58a]">
              <ShieldCheck className="mr-1 h-3 w-3" />
              Owner
            </Badge>
          ) : (
            <Badge variant="outline">
              <Shield className="mr-1 h-3 w-3" />
              Member
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
