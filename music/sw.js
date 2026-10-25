const CACHE = "pashto-music-v3";
const CORE = ["./", "./index.html", "./manifest.json", "./icon.svg",
  "./tracks/anar_anar.mp3", "./tracks/az_shawq_e_gul.mp3", "./tracks/beraw_ay_shokh.mp3",
  "./tracks/gul_ke_ba_bulbul.mp3", "./tracks/qafela_e_omr.mp3", "./tracks/zawq_haram.mp3"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, {ignoreSearch: true}).then(hit => hit || fetch(e.request)));
});
