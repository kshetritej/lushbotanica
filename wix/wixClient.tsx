import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products } from "@wix/stores";
import { currentCart } from "@wix/ecom";
import { redirects } from "@wix/redirects";

export const myWixClient = createClient({
  modules: { products, currentCart, redirects },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: JSON.parse(
      Cookies.get("session") || '{"accessToken": {}, "refreshToken": {}}'
    ),
  }),
});
