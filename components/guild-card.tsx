"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ShieldCheck } from "lucide-react";
import Image from "next/image";

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
      className="hover:border-primary/50 hover:shadow-primary/10 overflow-hidden transition-all hover:shadow-md"
      onClick={onClick}
    >
      <CardContent className="flex cursor-pointer flex-col items-center p-6">
        <div className="mb-4 h-16 w-16 overflow-hidden rounded-full">
          {guild.icon === null ? (
            <div className="bg-primary flex h-full w-full items-center justify-center rounded-full font-bold text-white">
              {guild.name
                .split(" ")
                .map((word) => word.charAt(0))
                .join("")}
            </div>
          ) : (
            <Image
              src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
              alt={guild.name}
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        <div className="text-center">
          <h3 className="mb-2 text-lg font-semibold">{guild.name}</h3>

          {guild.owner ? (
            <Badge className="bg-primary">
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
