import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import Content from './Content'
import Footer from './Footer'
import MainText from './MainText'

function App() {
  const API_URL = "https://pokeapi.co/api/v2/pokemon"
  const IMAGE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

  const [pokemons, setPokemons] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPokemons = [];
      for (let i = 1; i < 6; i++) {
        try {
          const response = await fetch(`${API_URL}/${i}`);
          if (!response.ok) {
            throw new Error("Did not get any cards!")
          }
          const data = await response.json();
          const newPokemon = {
            id: data.id,
            name: data.name,
            image: `${IMAGE_URL}/${i}.png`,
            stats: data.stats.map(stat => ({
              base_stat: stat.base_stat,
              stat_name: stat.stat.name
            }))
          };

          fetchedPokemons.push(newPokemon);
        } catch (error) {
          console.error("Error fetching Pokémon:", error);
        }

      }
      setPokemons(fetchedPokemons);
    }

    fetchData()

  }, [])

  useEffect(() => {
    console.log(pokemons);
  }, [pokemons]);

  async function fetchPokemonByName(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}/`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching data for ${name}: ${response.statusText}`);
      }
      const data = await response.json();
      const newPokemon = {
        id: data.id,
        name: data.name,
        image: `${IMAGE_URL}/${data.id}.png`,
        stats: data.stats.map(stat => ({
          base_stat: stat.base_stat,
          stat_name: stat.stat.name
        }))
      };
      setPokemons(prevPokemons => {
        if (!prevPokemons.some(pokemon => pokemon.id === newPokemon.id)) {
          return [...prevPokemons, newPokemon];
        }
        return prevPokemons;
      });

      console.log('pik', pokemons);
      return data;
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div>
      <SearchBar searchText={searchText} setSearchText={setSearchText} fetchPokemonByName={fetchPokemonByName} />
      <MainText />
      <Content pokemons={pokemons} />
      <Footer />
    </div>
  )
}

export default App
