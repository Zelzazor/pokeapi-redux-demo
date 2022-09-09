import axios from 'axios';

export const getPokemon = async (limit: number, offset: number) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${limit*offset}`);
    return response.data;
}

export const getPokemonById = async (id: string) => {
    console.log(id);
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
}
