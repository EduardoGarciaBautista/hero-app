import {heroes} from "../data/Heroes";

export const getHeroesByName = (name) => {
    if (name === '') {
        return [];
    }
    return heroes.filter(hero =>
        hero.superhero.toLocaleLowerCase().includes(name.toLowerCase()));
}