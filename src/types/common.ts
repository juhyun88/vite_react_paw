import type { Database } from './supabase.types';

export type Menu = Database['public']['Tables']['menu']['Row'];
