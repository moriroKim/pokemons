import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectPokemonById } from '../RTK/selector';

function Detail() {
    const { pokemonId } = useParams();
    const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
    console.log(pokemon);
    return (
        <div className="flex flex-col items-center justify-center border border-[gray] p-[30px] rounded-[10px]">
            <div className="text-[28px] mb-[10px]">{pokemon.name}</div>
            <div className="text-center whitespace-pre-wrap">{pokemon.description}</div>
            <img className="w-[200px]" src={pokemon.frontImg} />
        </div>
    );
}

export default Detail;
