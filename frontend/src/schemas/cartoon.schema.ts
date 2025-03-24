import { gql } from "@apollo/client";

const GET_ALL_CARTOONS = gql`
  query GetCartoons {
    getCartoons {
      id
      name
      description
      nb_of_episodes
      nb_of_seasons
      genres
      realisator
      author
      ft_diffusion
    }
  }
`;

export default GET_ALL_CARTOONS;
