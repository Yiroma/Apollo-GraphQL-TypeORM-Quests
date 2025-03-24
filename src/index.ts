/** Import des librairies */
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

/** Fonction auto appellée (évite la mise en constante) permettant de lancer le serveur */
(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
