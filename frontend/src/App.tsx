import { useQuery } from "@apollo/client";
import GET_ALL_CARTOONS from "./schemas/cartoon.schema";
import Cartoon from "./types/cartoon.type";
import CartoonCard from "./components/CartoonCard";
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
            <CartoonCard key={cartoon.id} cartoon={cartoon} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
