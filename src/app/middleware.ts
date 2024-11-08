import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const response = NextResponse.next();

  // Appliquer les en-têtes CORS uniquement aux requêtes de l'API
  if (req.nextUrl.pathname.startsWith("/api")) {
    response.headers.set(
      "Access-Control-Allow-Origin",
      "https://casecobra-three-hazel.vercel.app"
    );
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    // Gérer les requêtes de pré-vol (OPTIONS)
    if (req.method === "OPTIONS") {
      response.headers.set(
        "Access-Control-Allow-Origin",
        "https://casecobra-three-hazel.vercel.app"
      );
      response.headers.set(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS"
      );
      response.headers.set(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );
      response.headers.set("Access-Control-Max-Age", "86400"); // Cache preflight request for 1 day
      return new Response(null, {
        status: 204,
        headers: response.headers,
      });
    }
  }

  return response;
}

// Définir les routes où le middleware doit s'appliquer
export const config = {
  matcher: "/api/:path*",
};
