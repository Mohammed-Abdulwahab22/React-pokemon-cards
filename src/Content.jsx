import React, { useEffect, useRef } from 'react'
import Card from './Card'

export default function Content({ pokemons }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, [pokemons])

  return (
    <>
      <div className='content-container' ref={containerRef}>
        <div className='card-wrapper'>
          {pokemons.map(pokemon => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </>
  )
}
