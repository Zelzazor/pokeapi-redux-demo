import { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getSelectedPokemonAsync } from "./poke.slices";
import { useParams } from "react-router-dom";


export function Pokemon() {
  
    const pokemon = useAppSelector((state) => state.pokemon);
    const params = useParams<{id: string}>();
    const dispatch = useAppDispatch();

    useEffect(()=>{
        if(params.id) dispatch(getSelectedPokemonAsync(params.id))
    }, [])

  return (
    <div className="font-sans h-screen">
        {pokemon.status === "loading" && 
            <div className="h-screen flex justify-center items-center">
                <p className="text-center">Loading...</p>
            </div> 
        }
        {pokemon.status === "failed" && 
            <div className="h-screen flex justify-center items-center">
                <h1 className="font-bold text-3xl">404 | Resource Not Found</h1>
                </div> 
        }
        {pokemon.selectedPokemon && (
            <div className="flex flex-col">
                <h1 className="text-6xl font-bold p-10">{pokemon.selectedPokemon.name[0].toUpperCase() + pokemon.selectedPokemon.name.substring(1)}</h1>
                <div className="flex  justify-center lg:justify-around flex-col lg:flex-row">
                    <div className="lg:w-1/3">
                        <img src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemon.selectedPokemon.image_id}.png`} alt={pokemon.selectedPokemon.name} />
                    </div>
                    <div className="lg:w-1/3 flex flex-col justify-center mt-12 lg:mt-0">
                        <h2 className="font-bold text-xl text-center lg:text-left">Height: {pokemon.selectedPokemon.height / 10} m</h2>
                        <h2 className="font-bold text-xl text-center lg:text-left">Weight: {pokemon.selectedPokemon.weight / 10} kg</h2>
                        <h2 className="font-bold text-xl text-center lg:text-left">Base Experience: {pokemon.selectedPokemon.base_experience}</h2>
                        <h2 className="font-bold text-xl text-center lg:text-left">Abilities: </h2>
                        {pokemon.selectedPokemon.abilities.map((item) => (
                            <li className="font-bold text-xl ml-4 text-center lg:text-left" key={item.ability.name}>{(item.ability.name[0].toUpperCase() + item.ability.name.substring(1)).replaceAll('-', ' ')}</li>
                        ))}
                        <h2 className="font-bold text-xl text-center lg:text-left">Types: </h2>
                        {pokemon.selectedPokemon.types.map((item) => (
                            <li className="font-bold text-xl ml-4 text-center lg:text-left" key={item.type.name}>{(item.type.name[0].toUpperCase() + item.type.name.substring(1)).replaceAll('-', ' ')}</li>
                        ))}
                        <h2 className="font-bold text-xl text-center lg:text-left">Stats: </h2>
                        {pokemon.selectedPokemon.stats.map((item) => (
                            <li className="font-bold text-xl ml-4 text-center lg:text-left" key={item.stat.name}>{(item.stat.name[0].toUpperCase() + item.stat.name.substring(1)).replaceAll('-',' ')}: {item.base_stat}</li>
                        ))}
                    </div>
                    
                </div>
            </div>
             
        )}
       
    </div>
  );
}