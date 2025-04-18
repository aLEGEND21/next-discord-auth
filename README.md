# NextJS + Discord OAuth Test

A modern web application demonstrating Discord OAuth2 integration with Next.js and ShadCN components. This project showcases secure authentication, API usage, and a clean user interface with dark mode aesthetics and green accent colors.

## Overview

This application features:

- Discord OAuth2 authentication flow
- User session management
- Display of Discord server (guild) information
- Modern UI built with ShadCN components

## Features

- **Landing Page**: Clean introduction with call-to-action button
- **Navigation Bar**: Dynamic rendering based on authentication state
  - Login button for unauthenticated users
  - Logout button for authenticated users
  - Session details modal for authenticated users
- **Dashboard**: Displays all Discord servers the user belongs to
  - Server cards showing icon, name, and ownership status
  - Detailed server information modal on click

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Authentication**: NextAuth.js (Auth.js) v5
- **UI Components**: ShadCN/UI
- **Styling**: TailwindCSS with dark mode
- **Theme**: Modern minimalist design with green accents

## Getting Started

First, set up your Discord OAuth2 application:

1. Visit the [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application and set up OAuth2
3. Add the redirect URI: `http://localhost:3000/api/auth/callback/discord`
4. Copy your Client ID and Client Secret

Next, configure your environment variables:

```bash
# Create a .env.local file with the following:
AUTH_SECRET="your-generated-secret"
DISCORD_CLIENT_ID="your-client-id"
DISCORD_CLIENT_SECRET="your-client-secret"
NEXTAUTH_URL="http://localhost:3000"
```

Then, run the development server:

```
npm run dev
```

Open http://localhost:3000 with your browser to see the result.
