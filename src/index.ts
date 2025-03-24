/** Import des librairies */
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

/** Définition des types de données */
// un schéma est une collection de définitions de type (d'où "typeDefs")
const typeDefs = `#graphql
  # This "Cartoon" type defines the queryable fields for every cartoon in our data source.
  type Cartoon {
    id: ID
    name: String
    description: String
  }

  # The "Query" type is special: it lists all of the available queries
  type Query {
    getCartoons: [Cartoon]
  }
`;

/** Création des résolvers */
// Les résolvers sont des fonctions qui permettent de récupérer les données
// Ce résolveur récupère les livres du tableau « cartoons » ci-dessus.
const resolvers = {
  Query: {
    getCartoons: () => cartoons,
  },
};

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
