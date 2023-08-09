import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fmggwikrusxsmyiwiwqu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtZ2d3aWtydXN4c215aXdpd3F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzMjkwNTIsImV4cCI6MjAwNTkwNTA1Mn0.l3OfJBz7N6AI2SF-9DuQicwgfNLPeIekS6qwyYt25Ng";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
