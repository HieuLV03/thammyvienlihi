import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oboqzcharenqexcjaugz.supabase.co";
const supabaseKey = "sb_publishable_CNaEkeImWeHCsoa5MWVqjA_57KSs71N";

export const supabase = createClient(supabaseUrl, supabaseKey);