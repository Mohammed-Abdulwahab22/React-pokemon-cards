import React from 'react'

export default function Card({ pokemon }) {
    return (
        <div className="card">
            <img src={pokemon.image} alt={pokemon.name} className="card-image" />
            <div className="card-body">
                <h3 className="card-title">{pokemon.name}</h3>
                <ul className="card-stats">
                    {pokemon.stats.map((stat, index) => (
                        <li key={index} className="card-stat">
                            <span className="stat-name">{stat.stat_name}:</span>
                            <span className="stat-value">{stat.base_stat}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
