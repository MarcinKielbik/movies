interface Movie {
    //url: string;
    title: string;
    release_date: string;
}

function MovieCard({ movie }: { movie: Movie }) {


    function onFavourite() {
        alert("work!")
    }


    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src="{movie.url}" alt="movie.title" />
                <div className="ovie-overlay">
                    <button className="favorite-btn" onClick={onFavourite}>
                        fav
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard