import {createClient, SupabaseClient} from '@supabase/supabase-js'
import {Database} from "@/database.types";

if (typeof process.env.SUPABASE_URL === 'undefined') {
    throw new Error('Environment variable SUPABASE_URL is undefined.')
}
if (typeof process.env.SUPABASE_KEY === 'undefined') {
    throw new Error('Environment variable SUPABASE_KEY is undefined.')
}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase: SupabaseClient<Database> = createClient
(supabaseUrl,
    supabaseKey);