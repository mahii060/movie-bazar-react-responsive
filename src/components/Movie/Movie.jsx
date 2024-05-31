/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';


const Movie = ({ movie, handleWatchTime }) => {
    const { movieName, poster, watchTime, description, imdbRating } = movie;
    const defaultImage = "https://image.tmdb.org/t/p/original/c8xgxYJHmIHHREFxlNqUD23kvvc.jpg";


    const handleImageError = (event) => {
        event.target.src = defaultImage;
    }





    return (
        <>
            <div className="card w-full bg-base-100 shadow-2xl border border-gray-300">
                <figure><img className='w-48' src={poster} alt={movieName} onError={handleImageError} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{movieName}</h2>
                    <p>{description}</p>
                    <div className='flex justify-between'>
                        <p>Watch Time: {watchTime}</p>
                        <p>Rating: {imdbRating}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleWatchTime(watchTime)} className="btn btn-info w-3/4">Watch now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Movie;