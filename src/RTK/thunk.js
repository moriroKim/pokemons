import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMultiplePokemonById = createAsyncThunk('pokemon/fetchMultiplePokemonById', async (maxPokemonId) => {
    const numberArray = Array.from({ length: maxPokemonId }, (_, idx) => idx + 1);

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
            return null;
        }
    };

    return (pokemonInfo = await Promise.all(numberArray.map((el) => fetchPokemonAPI(el))));
});
