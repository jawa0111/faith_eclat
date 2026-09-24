import { createClient } from "@supabase/supabase-js";

// Server-only client using the service role key — bypasses RLS, so it must
// never be imported into client components or exposed to the browser.
export function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "Missing Supabase env vars: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set."
    );
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}
