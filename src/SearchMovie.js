import React, {useState} from "react";
import MovieCard from "./MovieCard";
// import { render } from "@testing-library/react";

function SearchMovie(props) {

//states- input query, movies
const [query, setQuery] = useState("");

//create the state for movies, and update that state as appropriate
const [movies, setMovies] = useState([]);

const searchMovie = async (e) => {
    e.preventDefault()
    console.log("submitting");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=ec600c302d27132b9fb5bf1617ffd8d8&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.results);
        setMovies(data.results);
    } catch(err) {
        console.log(err);
    }
}




    return(
        <>
        <form className="form" onSubmit={searchMovie}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="i.e. Jurassic Park"
            value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button className="button" type="submit">Search</button>
        </form>
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
        </>
    )
}

export default SearchMovie