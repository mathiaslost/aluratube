import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://xqcafhinwyplyttnrpbj.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxY2FmaGlud3lwbHl0dG5ycGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMjEwMzYsImV4cCI6MTk4Mzc5NzAzNn0.wHcrXplJw5fEPmtOIj0wob9ZREYQu7Bjc-OHmucWOZQ";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video").select("*");
        }
    }
}