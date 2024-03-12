import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dfdhwxciihvhyijkbsub.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmZGh3eGNpaWh2aHlpamtic3ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAxNDU2NDIsImV4cCI6MjAyNTcyMTY0Mn0._mRKPWNUPXxuR7sBcDQhkbUoofG9IC0fqYtT58XpOv8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
