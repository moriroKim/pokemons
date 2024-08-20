import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoritePokemons } from '../RTK/selector';
import { Card } from '../components/Card';

function Favorite() {
    const pokemon = useSelector(selectFavoritePokemons);
    return (
        <>
            {pokemon.map((el) => (
                <Card key={el.id} pokemon={el} />
            ))}
        </>
    );
}

export default Favorite;
