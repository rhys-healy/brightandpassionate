/* Now‑playing (single‑user, Last.fm) */
const API_KEY = "YOUR_LASTFM_API_KEY";   // ← paste yours
const USER    = "riseofrhys";            // Last.fm username

async function fetchTrack(){
  const url = "https://api.allorigins.win/raw?url=" + encodeURIComponent(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USER}&api_key=${API_KEY}&format=json&limit=1`
  );
  try{
    const r = await fetch(url);
    const j = await r.json();
    const t = j.recenttracks.track[0];
    return {
      isPlaying: t["@attr"]?.nowplaying === "true",
      title: `${t.name} – ${t.artist["#text"]}`,
      art: t.image.pop()["#text"] || "placeholder.png"
    };
  }catch(e){return null;}
}

async function updateNP(){
  const box = document.getElementById("np-track");
  const img = document.getElementById("np-img");
  const d = await fetchTrack();
  if(!d){ box.textContent="—"; return; }
  box.textContent = d.isPlaying ? d.title : "Nothing playing";
  img.src = d.art;
}
updateNP();
setInterval(updateNP, 30000);
