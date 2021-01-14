import { strEnum } from "./helpers";

/*
Instead of writing const objects where the key === value

export const MarvelHeros = {
    Daredevil: "Daredevil",
    ["Ghost Rider"]: "Ghost Rider",
    Quake: "Quake",
    ["Misty Knight"]: "Misty Knight",
    Medusa: "Medusa",
    ["Jessica Jones"]: "Jessica Jones",
    ["Madame Hydra"]: "Madame Hydra"
};
*/

export const MarvelHeros = strEnum([
    "Daredevil",
    "Ghost Rider",
    "Quake",
    "Misty Knight",
    "Medusa",
    "Jessica Jones",
    "Madame Hydra"
]);

export type MarvelHerosKeys = keyof typeof MarvelHeros;

const hero: MarvelHerosKeys = "Daredevil";
