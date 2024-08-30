import React from 'react'

export default function SearchBar({ searchText, setSearchText, fetchPokemonByName }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPokemonByName(searchText);
    };

    return (
        <header className='header' >
            <form className='search-bar' onSubmit={handleSubmit}>
                <input id='SearchCard' type='text' placeholder='Type a pokemon name here...' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button type='submit' >Search</button>
            </form>
        </header>
    )
}
