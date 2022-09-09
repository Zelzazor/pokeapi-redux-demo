import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../../interfaces/Pokemon.interface";
import { getPokemon, getPokemonById } from "./poke.api";


export interface PokemonListItem {
    name: string;
    url: string;
    image_id: string;
    id: number;
}


export interface PokeState {
    items: PokemonListItem[];
    status: "idle" | "loading" | "failed";
    selectedPokemon: Pokemon | null;
}

const initialState: PokeState = {
    items: [],
    status: "idle",
    selectedPokemon: null,
}


export const getPokemonsAsync = createAsyncThunk(
    "poke/fetchPokemon",
    async ({limit, offset}: {limit: number, offset: number}) => {
        const response = await getPokemon(limit, offset);
        return response.results.map((item: any, index: number) => ({
            ...item, 
            image_id: (offset*limit + (index + 1)).toString().padStart(3, '0'),
            id: (offset*limit + (index + 1))
        }));
    }
);

export const getSelectedPokemonAsync = createAsyncThunk(
    "poke/fetchSelectedPokemon",
    async (id: string) => {
        const response = await getPokemonById(id);
        return {...response, image_id: response.id.toString().padStart(3, '0')};
    }   
);

export const pokeSlice = createSlice({
    name: "poke",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getPokemonsAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getPokemonsAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.items = action.payload;
            })
            .addCase(getPokemonsAsync.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(getSelectedPokemonAsync.pending, (state) => {
                state.selectedPokemon = null;
                state.status = "loading";
            }
            )
            .addCase(getSelectedPokemonAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.selectedPokemon = action.payload;
            }
            )
            .addCase(getSelectedPokemonAsync.rejected, (state) => {
                state.status = "failed";
            }
            )
    }
})

export default pokeSlice.reducer;