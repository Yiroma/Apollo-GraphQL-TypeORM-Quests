import { useQuery } from "@apollo/client";
import GET_ALL_CARTOONS from "./schemas/cartoon.schema";
import Cartoon from "./types/cartoon.type";

function App() {
  const { data, loading, error } = useQuery(GET_ALL_CARTOONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen gap-8">
        <h1 className="h-16 mt-8 text-3xl font-bold">Mon app de Cartoons</h1>

        <section className="container flex flex-wrap gap-4 justify-center mb-8">
          {data.getCartoons.map((cartoon: Cartoon) => (
            <article
              className="w-full lg:w-1/3 xl:w-1/4 flex flex-col gap-4 bg-gray-100 p-4 rounded-md"
              key={cartoon.id}
            >
              <h2 className="text-2xl font-bold">{cartoon.name}</h2>

              <p className="italic">{cartoon.description}</p>

              <ul className="flex flex-col gap-2">
                <li className="text-sm">{cartoon.nb_of_episodes} épisodes</li>
                <li className="text-sm">{cartoon.nb_of_seasons} saisons</li>
                <li className="text-sm">🎬 {cartoon.realisator}</li>
                <li className="text-sm">👤 {cartoon.author}</li>
                <li className="text-sm">📅 {cartoon.ft_diffusion}</li>
              </ul>

              <ul className="flex flex-wrap gap-2">
                {cartoon.genres.map((genre) => (
                  <li className="text-sm border border-gray-300 rounded-md px-2 py-1" key={genre}>
                    {genre}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
