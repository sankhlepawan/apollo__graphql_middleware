import { createClient } from "@supabase/supabase-js";

const supabase = (serverApiUrl, supabaseKey) => {
  return createClient(serverApiUrl, supabaseKey);
};

export default supabase;
