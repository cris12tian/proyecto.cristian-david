
    import React from "react"

const games = [
  {
    id: 1,
    title: "Eclipse: Shadow Ops",
    genre: "Acción / Sigilo",
    platform: "PC / Consolas",
    players: "1 - 4",
    release: "2023-11-10",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1606813902893-9f74f9e4f4b3?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Neon Drift: Turbo",
    genre: "Carreras / Arcade",
    platform: "PC / Consolas",
    players: "1 - 8",
    release: "2024-06-21",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Leyendas de Arkan",
    genre: "RPG / Fantasía",
    platform: "PC",
    players: "1",
    release: "2022-09-15",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Skyfront Defenders",
    genre: "Estrategia / Multijugador",
    platform: "PC / Móvil",
    players: "2 - 16",
    release: "2021-03-02",
    rating: 3.7,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    title: "Circuit Breaker: Odyssey",
    genre: "Aventura / Puzzle",
    platform: "Consolas",
    players: "1",
    release: "2020-12-09",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1511512578047-5f3c6b0b0c49?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    title: "Cyber Harbor: Reload",
    genre: "Shooter / Sci‑Fi",
    platform: "PC / Consolas",
    players: "1 - 12",
    release: "2025-02-14",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&q=60",
  },
];

function Star({ filled }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={`w-4 h-4 inline-block mr-0.5 ${filled ? "text-yellow-400" : "text-gray-300"}`}>
      <path
        fill="currentColor"
        d="M10 15.27l-5.18 3.06 1.4-6.01L1.64 7.97l6.08-.53L10 1.5l2.28 5.94 6.08.53-4.58 4.35 1.4 6.01z"
      />
    </svg>
  );
}

function Stars({ value }) {
  // value puede ser decimal, mostramos 5 estrellas y media si toca
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < full) stars.push(<Star key={i} filled={true} />);
    else if (i === full && half) stars.push(<Star key={i} filled={true} />);
    else stars.push(<Star key={i} filled={false} />);
  }
  return <div className="flex items-center">{stars}<span className="ml-2 text-sm text-gray-600">{value.toFixed(1)}</span></div>;
}

export default function GameCards() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Catálogo - REACH (6 juegos)</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((g) => (
          <article key={g.id} className="bg-white rounded-2xl shadow-md overflow-hidden ring-1 ring-gray-100">
            <div className="relative">
              <img src={g.image} alt={`${g.title} cover`} className="w-full h-48 object-cover" />
              <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg">
                <span className="text-sm font-medium">{g.genre}</span>
              </div>
              <div className="absolute top-3 right-3">
                <div className="bg-white/90 px-2 py-1 rounded-lg shadow-sm">
                  <Stars value={g.rating} />
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <ul className="mt-2 text-sm text-gray-700 space-y-1">
                <li><strong>Plataforma:</strong> {g.platform}</li>
                <li><strong>Jugadores:</strong> {g.players}</li>
                <li><strong>Fecha de lanzamiento:</strong> {g.release}</li>
              </ul>

              <div className="mt-4 flex items-center justify-between">
                <button className="text-sm px-3 py-1 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">Ver especificaciones</button>
                <button className="text-sm px-3 py-1 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">Agregar al servidor</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <footer className="mt-6 text-sm text-gray-500">* Imágenes de ejemplo (Unsplash). Cambia las URLs por las que prefieras.</footer>
    </div>
  );
}

