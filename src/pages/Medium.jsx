import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../App.css';

// Function to fetch movies from the API
const fetchMovies = async (searched, apiKey, baseApiUrl, authHeader, setMovies, setError) => {
    try {
        // Construct the API request URL with the searched query
        const url = `${baseApiUrl}/search/movie?query=${searched}&api_key=${apiKey}`;
        // Config object for axios request, including the authorization header
        const config = {
            headers: { 'Content-Type': 'application/json', Authorization: authHeader }
        };
        // Making the API request
        const response = await axios.get(url, config);
        // Update the movies state with the fetched data
        setMovies(response.data.results);
    } catch (err) {
        // Update the error state in case of an error
        setError('Error fetching data');
    }
};

// Component to render each movie item
const MovieItem = ({ movie }) => (
    <section className='search-container'>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`Poster of ${movie.original_title}`} />
        <p>{movie.original_title}</p>
        <section className='description'>
            <p>{movie.overview}</p>
            <p id='movieDate'>Release date: {movie.release_date}</p>
        </section>
    </section>
);

// Main component for the movie search functionality
export default function Medium() {
    const [movies, setMovies] = useState([]);
    const [searched, setSearched] = useState('');
    const [error, setError] = useState('');

    // API credentials and base URL
    const apiKey = '085eb9367e5fbee0e0f71e77ac2e53ad';
    const baseApiUrl = 'https://api.themoviedb.org/3';
    const authHeader = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjY5YzdjYTI1YWY5OGUwNDIwOGNkNjcyMTljMzIxMyIsInN1YiI6IjY1NzdhMGY0OTQ1MWU3MGZlYTZlODI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.waXvvnV7RZ375e17_ZCcBrH13zU1RMFAX0j86oINe18';

    // useEffect hook to perform API call when `searched` changes
    useEffect(() => {
        if (searched) {
            fetchMovies(searched, apiKey, baseApiUrl, authHeader, setMovies, setError);
        }
    }, [searched]);

    // Handler for search input changes
    const handleInput = (e) => {
        setSearched(e.target.value);
    };

    return (
        <div>
            <Link to="/">
                <p>Home</p>
            </Link>
            <section className='searchBar'>
                <input 
                    type='text' 
                    value={searched} 
                    onChange={handleInput}
                />
            </section>

            {error && <p className="error">{error}</p>}

            <section className='grid'>
                {/* Mapping over movies state to render each movie */}
                {movies.map(movie => <MovieItem key={movie.id} movie={movie} />)}
            </section>
        </div>
    );
}

