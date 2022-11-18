import React from 'react'

export function PokemonList({pokemones=[]}) {
  return (
    <ul>
        {/* recorro pokemones y extraigo name para imprimirlo en una lista */}
        {pokemones.map((pokemon, index)=>{
            return <li key={index}>{pokemon.name}</li>
        })}
      </ul>
  )
}
