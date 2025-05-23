import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const serviceRoleKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!;

export function createClient() {
  return createBrowserClient(
    supabaseUrl,
    supabaseKey
  )
}























export const supabaseAdmin = createBrowserClient(supabaseUrl, serviceRoleKey);

export const deleteUser = async (userId: string) => {
  const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);

  if (error) {
    console.error("Failed to delete user:", error.message);
  }
};
