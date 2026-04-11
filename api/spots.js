// api/spots.js — Vercel serverless function
// Returns remaining founding member spots
// Uses Vercel KV store if available, falls back to a static count

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

  let remaining = 247; // Starting count — update manually or wire to Stripe webhook

  // If you add Vercel KV later, replace above with:
  // const { kv } = await import('@vercel/kv');
  // remaining = await kv.get('spots_remaining') ?? 247;

  res.status(200).json({
    remaining,
    total: 300,
    sold: 300 - remaining
  });
}
