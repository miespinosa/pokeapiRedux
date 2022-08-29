import React from "react";
import PokeCard from "./PokeCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return (
          <PokeCard
            name={pokemon.name}
            key={pokemon.name}
            image={pokemon.sprites.front_default}
            pokemonTypes={pokemon.types.map((type) => {
              return type.type.name
            }).join(',')}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
