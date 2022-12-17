
import { Title } from "../component/Others"
import React, { useEffect, useState } from 'react'
import PokemonList from "../component/PokemonList"
import { Link } from "react-router-dom"


const BoxContent = ({ name }) => {
    return (
        <>
            <Title title={name} />
        </>
    );
};

const Page = () => {
    const [location, setLocation] = useState([]);

    const getItems = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/location-area");
        const FinalData = await response.json();
        const pokemons = FinalData.results.map(async (pokemon) => {
            const responsePokemon = await fetch(pokemon.url);
            const dataPokemon = await responsePokemon.json();
            return dataPokemon
        })
        setLocation(await Promise.all(pokemons))
    }

    useEffect(() => {
        getItems();
    }, [])

    return (
        <div className="p-6">
            <div>
                <Link to={`/`}>
                    <button className="bg-indigo-500 text-white p-2">Home</button>
                </Link>
                <h1 className="font-bold text-xl text-center p-8">Choose Location</h1>
            </div>
            <div id="pokemon-list" className="grid grid-cols-4 gap-4">
                {
                    location.map((e) => {
                        return (
                            <PokemonList key={e.id}>
                                <BoxContent
                                    name={e.name}
                                />
                                <Link to={`/location/${e.id}`}>
                                    <button className="rounded bg-indigo-500 text-white p-4 w-full">Choose Area</button>
                                </Link>
                            </PokemonList>
                        )
                    })
                }
            </div>
        </div>
    )
}



export default Page
