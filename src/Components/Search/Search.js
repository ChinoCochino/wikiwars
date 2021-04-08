import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <form>
            <label htmlFor="character-search">
                <span className="label-search">Search Whomever</span>
            </label><p />
            <input 
             type="text"
             id="character-search"
             placeholder="Whom would you like to read about?"
             name="s"
            />
            <button type="submit" className="button">Search</button>
        </form>
    )
}

export default Search
