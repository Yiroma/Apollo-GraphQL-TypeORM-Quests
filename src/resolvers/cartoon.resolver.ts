import { default as cartoons } from "../../dataset.json";
import { Cartoon } from "../types/cartoon.type";

type GetOneCartoonByIdArgs = {
  id: number;
};

const getCartoons = (): Cartoon[] => {
  return cartoons;
};

const getOneCartoonById = (_: unknown, args: GetOneCartoonByIdArgs): Cartoon => {
  return cartoons.find((cartoon) => cartoon.id === +args.id) as Cartoon;
};

const createCartoon = (_: unknown, args: { inputCartoon: Cartoon }): number => {
  // Extraction des personnages et conservation du reste des propriétés
  const { personnages, ...rest } = args.inputCartoon;

  // Ajout d'un ID (string) unique opur chaque nouveau personnages
  const newPersonnages = personnages.map((personnage) => ({
    ...personnage,
    id: Math.random() * 1000000,
  }));

  const id = cartoons[cartoons.length - 1].id + 1; // ID incrementation du dernier ID du tableau
  const newCartoon: Cartoon = {
    ...rest,
    personnages: newPersonnages,
    id,
  };

  cartoons.push(newCartoon);
  return id;
};

export { getCartoons, getOneCartoonById, createCartoon };
