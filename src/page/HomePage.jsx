import Chosen from "../component/Chosen"
import Button, { ChosenOneTitle, Image, Title } from "../component/Others"
import React, { useEffect, useState } from 'react'
import PokemonList from "../component/PokemonList"
import { Link } from "react-router-dom";

const BoxContent = ({ name, url, onBoxClick }) => {
    const handleButtonClick = () => {
        onBoxClick({ name, url });
    }
    return (
        <>
            <Title title={name} />
            <Image url={url} />
            <Button onClick={handleButtonClick} />
        </>
    );
};

const HomePage = () => {
    const [items, setItems] = useState([]);
    // const [image, setImage]= useState([]);
    // const [name, setName] =useState([]);
    const [chosenPokemon, setChosenPokemon] = useState({});
    const getItems = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const FinalData = await response.json();
        const pokemons = FinalData.results.map(async (pokemon) => {
            const responsePokemon = await fetch(pokemon.url);
            const dataPokemon = await responsePokemon.json();
            return dataPokemon
        })
        setItems(await Promise.all(pokemons))
    }

    useEffect(() => {
        getItems();
    }, [])
//  function handleClick(image,name){
//     setImage(image)
//     setName(name)
    
//     const pokemos={
//         name:name,
//         image:image,
//     } 
//     localStorage.setItems('pokemons',JSON.stringify(pokemos))
//  }

    return (
        <div className="p-6 ">
            <div className="p-8 grid grid-cols-12 ">
                <Link to={`/`}>
                    <button className="bg-indigo-500 text-white p-2">Home</button>
                </Link>
                <Link to={`/location`}>
                    <button className="bg-indigo-500 text-white p-2">Location</button>
                </Link>
            </div>
            <Chosen >
                <ChosenOneTitle />
                <Image
                    url={chosenPokemon?.url
                        ? chosenPokemon?.url
                        : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"} />
                <Title
                    title={chosenPokemon?.name ? chosenPokemon?.name : "ivysaur"} />
            </Chosen>
            <div id="pokemon-list" className="grid grid-cols-4 gap-4">
                {
                    items.map((e) => {
                        return (
                            <PokemonList key={e.id}>
                                <BoxContent
                                    name={e.name}
                                    url={e.sprites.other.dream_world.front_default}
                                    onBoxClick={setChosenPokemon} />
                            </PokemonList>
                        )
                    })
                }
            </div>
        </div>
    )
}



export default HomePage
