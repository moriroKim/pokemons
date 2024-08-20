import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectPokemonById } from '../RTK/selector';
import FavoriteButton from '../components/FavoriteButton';
import FlipCard from '../components/FlipCard';

function Detail() {
    const { pokemonId } = useParams();
    const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
    console.log(pokemon);
    return (
        <div className="flex flex-col items-center justify-center border border-[black] border-b-[5px] border-r-[5px] py-[30px] px-[60px] rounded-[10px] bg-white">
            <div className="text-[28px] mb-[10px]">
                {pokemon.name}
                <FavoriteButton pokemonId={Number(pokemonId)} />
            </div>
            <div className="text-center whitespace-pre-wrap">{pokemon.description}</div>
            <FlipCard front={pokemon.frontImg} back={pokemon.backImg} />
        </div>
    );
}

export default Detail;
