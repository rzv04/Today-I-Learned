import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://auzgrgpcgmljmknrxfwj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1emdyZ3BjZ21sam1rbnJ4ZndqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NTc1NzAsImV4cCI6MjA0MjMzMzU3MH0.njaFfwgjCKukAttOuZBG1gSFD8c8v98Vo0aZDHxxVl0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
