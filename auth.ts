import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      authorization:
        "https://discord.com/api/oauth2/authorize?scope=identify+email+guilds", // This is undocumented, but it allows us to access guilds
    }),
  ],
  callbacks: {
    // Store the access token in a JWT token since it is unaccessible in the session by default
    async jwt({ token, account }) {
      if (token && account?.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    // Add the access token from the JWT token to the session
    async session({ session, token }) {
      session.user.accessToken = token.accessToken as string;
      return session;
    },
  },
});
