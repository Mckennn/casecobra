import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next';

export const GET = handleAuth({
  afterAuth: (req: NextApiRequest, res: NextApiResponse) => {
    // Ajout des en-têtes CORS
    res.setHeader('Access-Control-Allow-Origin', 'https://casecobra-three-hazel.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res;
  }
});

export async function OPTIONS() {
  // Répondre à la requête préflight avec les en-têtes CORS
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': 'https://casecobra-three-hazel.vercel.app',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  });
}
