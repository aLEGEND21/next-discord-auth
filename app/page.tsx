import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 py-24 text-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          NextJS + Discord OAuth Test
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          A simple application to test Discord&apos;s OAuth2 functionality.
          Login with your Discord account to see your servers and profile
          information.
        </p>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="rounded-lg border border-border bg-card p-8">
          <h2 className="mb-4 text-2xl font-bold">What this demo includes:</h2>
          <ul className="list-inside list-disc space-y-2 text-left text-muted-foreground">
            <li>Discord OAuth2 authentication flow (simulated)</li>
            <li>View your Discord servers (guilds)</li>
            <li>Inspect server details and metadata</li>
            <li>View your Discord profile information</li>
          </ul>
        </div>
      </div>

      <Button
        size="lg"
        onClick={async () => {
          "use server";
          await signIn("discord", { redirectTo: "/dashboard" });
        }}
      >
        Get Started
      </Button>
    </div>
  );
}
