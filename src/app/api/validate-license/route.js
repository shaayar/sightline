import { Redis } from '@upstash/redis';

function getRedis() {
  return Redis.fromEnv();
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function POST(req) {
  try {
    const { key } = await req.json();
    if (!key || !key.startsWith('SL-')) {
      return Response.json({ valid: false }, { status: 200, headers: corsHeaders });
    }

    const redis = getRedis();
    const record = await redis.get(`license:${key}`);
    if (!record) return Response.json({ valid: false }, { headers: corsHeaders });

    const data = typeof record === 'string' ? JSON.parse(record) : record;
    return Response.json({ valid: data.valid === true }, { headers: corsHeaders });
  } catch (err) {
    console.error('validate-license error:', err);
    // On error, return valid: null so extension can fall back to cache
    return Response.json({ valid: null }, { status: 200, headers: corsHeaders });
  }
}
