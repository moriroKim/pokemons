import { useEffect } from 'react';
import './App.css';
import client from './client';

function App() {
    useEffect(() => {
        const numberArray = Array.from({ length: 151 }, (_, idx) => idx + 1);
        const fetchPokemonAPI = async (pokemonId) => {
            try {
                const pokemonTextResponse = await client.get(`/pokemon-species/${pokemonId}`);
                const pokemonImgResponse = await client.get(`/pokemon-form/${pokemonId}`);
                const textData = pokemonTextResponse.data;
                const imgData = pokemonImgResponse.data.sprites;
                const pokemonData = {
                    id: pokemonId,
                    name: textData.names.find((el) => el.language.name === 'ko').name,
                    description: textData.flavor_text_entries.find((el) => el.language.name === 'ko').flavor_text,
                    frontImg: imgData.front_default,
                    backImg: imgData.back_default,
                };
                return pokemonData;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const fetchPokemonData = async () => {
            const pokemonInfo = await Promise.all(numberArray.map((el) => fetchPokemonAPI(el)));
            console.log(pokemonInfo);
        };

        fetchPokemonData();
    }, []);

    return <></>;
}

export default App;
