
import { useEffect, useState } from 'react';
import './App.css'
import MovieCard from './MovieCard.jsx'
import SearchIcon from './search.svg'
//830ba576

const API_URL = 'http://www.omdbapi.com?apikey=830ba576'


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        searchMovies('Shrek');
    }, [])

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);

    }
    
    return (
        <div className="app">
            <h1>Movieland</h1>

            <div className="search">
                <input placeholder="Search for movies" 
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value)}}>

                </input>
                <img src={SearchIcon} 
                alt="search icon" 
                onClick={() => { searchMovies(searchTerm) }}>
                </img>
            </div>

            {
                movies?.length > 0 ?
                    (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}

                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
            }

        </div>

    )
}

export default App;