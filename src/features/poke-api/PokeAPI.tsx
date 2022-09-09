import { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getPokemonsAsync } from "./poke.slices";
import { Link } from "react-router-dom";


export function PokeAPI() {
  
    const pokemon = useAppSelector((state) => state.pokemon);
    const dispatch = useAppDispatch();
    const [limit] = useState(9);
    const [offset, setOffset] = useState(0);
    
    useEffect(()=>{
        if(offset !== undefined || limit !== undefined || offset !== null || limit !== null) dispatch(getPokemonsAsync({limit, offset}))
    }, [offset])


  return (
    <div className="font-sans">
        <h1 className="text-6xl font-bold text-center">PokéAPI</h1>
            {pokemon.status === "loading" && <p className="text-center">Loading...</p>}
            <div className="flex flex-wrap justify-center">
                <button className="bg-indigo-500 text-white p-2 m-2 rounded" onClick={()=>setOffset(prev => {return prev - 1 < 0 ? prev : prev - 1})}>Previous</button>
                <button className="bg-indigo-500 text-white p-2 m-2 rounded" onClick={()=>{setOffset(prev => prev + 1)}}>Next</button>
            </div>
            <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-20 lg:grid lg:grid-cols-3 pb-40">
                {pokemon.items.map((item) => (
                    <div key={item.id} className="w-full rounded">
                        <Link to={`/pokemon/${item.id}`}>
                            <h2 className="text-4xl text-center m-5">{item.name[0].toUpperCase() + item.name.substring(1)}</h2>
                            <img  src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${item.image_id}.png`} alt={item.name} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
  );
}