import MovieCard from "../components/MovieCard"

import { useState } from "react"

function Home() {
    
    const [searchQuery, setSearchQuery] = useState(""); 


    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Blade runner", release_date: "1982"},
        {id: 3, title: "The Matrix", release_date: "1999"},
    ]

    function handleSearch(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                ></input>

                <button type="submit" className="search-btn">Search</button>
            </form>
            
            
            <div className="movie-grid">
                {movies.map(movie => (
                    movie.title.toLowerCase().startsWith(searchQuery)
                ) && <MovieCard movie={movie} key={movie.id}/>)}
            </div>
        </div>
    )
}

export default Home