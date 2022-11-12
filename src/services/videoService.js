import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://xqcafhinwyplyttnrpbj.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxY2FmaGlud3lwbHl0dG5ycGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMjEwMzYsImV4cCI6MTk4Mzc5NzAzNn0.wHcrXplJw5fEPmtOIj0wob9ZREYQu7Bjc-OHmucWOZQ";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video").select("*").order("created_at", {ascending: false});
        }
    }
}

/* Realizava o insert de todos os vídeos do json no supabase.
insertFromJson(playlists) {
    const playlistNames = Object.keys(playlists);
    
    playlistNames.map((playlistName) => {
        const videos = playlists[playlistName];
        videos.map((video) => {

            supabase.from("video").insert({
                title: video.title,
                url: video.url,
                thumb: video.thumb,
                playlist: playlistName
            })
            .then((oqueveio) => {
                // console.log(oqueveio);
            })
            .catch((err) => {
                // console.log(err);
            })

        });
    });
}
*/