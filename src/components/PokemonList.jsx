import React from 'react'
import PokeCard from './PokeCard'
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
  return (
    <div className='PokemonList'>
        { pokemons.map((pokemon) => {
            return <PokeCard name={pokemon.name} key={pokemon.name}/>
        })}
    </div>
  )
}


export default PokemonList