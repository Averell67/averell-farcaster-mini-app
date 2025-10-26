import { NextResponse } from "next/server";
import { APP_URL } from "../../../lib/constants";

export async function GET() {
  const farcasterConfig = {
  // TODO: Add your own account association
  "accountAssociation": {
    "header": "eyJmaWQiOjkyNTQwMCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweGZlRmUxNzYxQmExRDllZUQ2YTExODQ4YzBlMmI2NDAzNTZFNTZmNzQifQ",
    "payload": "eyJkb21haW4iOiJhdmVyZWxsLWZhcmNhc3Rlci1taW5pLWFwcC52ZXJjZWwuYXBwIn0",
    "signature": "EoNxOcJjaqxR3g3s6gjoOiz3AP3aZROU7KnXiRjLwkQX7dzMZlJf6QtuwCbmdftDmXAdpR7HWpGCIXfRQOmr2hw="
  },
    frame: {
      version: "1",
      name: "Trankil Farcaster MiniApp",
      iconUrl: `${APP_URL}/images/icon.png`,
      homeUrl: `${APP_URL}`,
      imageUrl: `${APP_URL}/images/feed.png`,
      screenshotUrls: [],
      tags: ["Base", "farcaster", "miniapp", "template"],
      primaryCategory: "developer-tools",
      buttonTitle: "Launch Template",
      splashImageUrl: `${APP_URL}/images/splash.png`,
      splashBackgroundColor: "#ffffff",
      webhookUrl: `${APP_URL}/api/webhook`,
    },
  };

  return NextResponse.json(farcasterConfig);
}
