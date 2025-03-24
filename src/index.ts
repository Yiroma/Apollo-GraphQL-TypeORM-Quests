/** Import des librairies */
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import {
  getCartoons,
  getOneCartoonById,
  createCartoon,
  deleteCartoon,
} from "./resolvers/cartoon.resolver";

import { PersonnageSchema, PersonnageInputSchema } from "./schemas/personnage.schema";
import { CartoonSchema, CartoonInputSchema } from "./schemas/cartoon.schema";

/** Définition des types de données */
// un schéma est une collection de définitions de type (d'où "typeDefs")
const typeDefs = `#graphql
  type Cartoon ${CartoonSchema}
  type Personnage ${PersonnageSchema}

  input PersonnageInput ${PersonnageInputSchema}
  input CartoonInput ${CartoonInputSchema}

  type Mutation {
    createCartoon(inputCartoon: CartoonInput): ID
    deleteCartoon(id: ID!): Boolean
  }

  # The "Query" type is special: it lists all of the available queries
  type Query {
    getCartoons: [Cartoon]
    getOneCartoonById(id: ID!): Cartoon
  }
`;

/** Création des résolvers */
// Les résolvers sont des fonctions qui permettent de récupérer les données
// Ce résolveur récupère les livres du tableau « cartoons » ci-dessus.
const resolvers = {
  Query: {
    getCartoons,
    getOneCartoonById,
  },
  Mutation: {
    createCartoon,
    deleteCartoon,
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
