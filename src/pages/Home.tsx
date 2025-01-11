import MovieCard from "../components/MovieCard"

function Home() {
    
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Blade runner", release_date: "1982"},
        {id: 3, title: "The Matrix", release_date: "1999"},
    ]

    function handleSearch() {

    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search"
                className="search-input"
                ></input>

                <button type="submit" className="search-btn">Search</button>
            </form>
            
            
            <div className="movie-grid">
                {movies.map(movie => 
                    <MovieCard movie={movie} key={movie.id}/>
                )}
            </div>
        </div>
    )
}

export default Home