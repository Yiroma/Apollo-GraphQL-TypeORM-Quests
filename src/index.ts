/** Import des librairies */
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

/** Création du serveur */
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

/** Fonction auto appellée (évite la mise en constante) permettant de lancer le serveur */
(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
