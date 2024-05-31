/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    const [movies, setMovies] = useState([])

    const [watchTime, setWatchTime] = useState('');

    const [time, setTime] = useState('')


    const handleWatchTime = (watchTime) => {
        const previousTime = JSON.parse(localStorage.getItem('WatchTime'))
        // console.log(storedTime)
        if (previousTime) {
            const totalTime = previousTime + watchTime;
            localStorage.setItem('WatchTime', totalTime)
            setWatchTime(totalTime)
        }
        else {
            localStorage.setItem('WatchTime', watchTime)
            setWatchTime(watchTime)
        }
        // console.log(storedTime)
    }


    const handleToast = (time) => toast(`Total Time: ${time}`);

    useEffect(() => {
        const localStorageWatchTime = localStorage.getItem('WatchTime');
        setTime(localStorageWatchTime)
    }, [watchTime])


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])
    return (
        <div className='grid md:grid-cols-5 px-2 md:px-6 lg:px-12 my-5'>
            <div className='col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 '>
                {
                    movies.map((movie, index) =>
                        <Movie
                            key={index}
                            movie={movie}
                            handleWatchTime={handleWatchTime}
                        ></Movie>)
                }
            </div>
            <div className='col-span-1 cart-container text-center'>
                <h1 className='text-3xl underline'>Movie Summary</h1>
                <p className='text-xl my-5'>Total watch time</p>
                <input type="text" value={time} disabled className='py-2 text-center rounded border border-green-600' />
                <button onClick={() => handleToast(time)} className='btn btn-info w-4/5 my-3'>Complete</button>
            </div>
        </div>
    );
};

export default Home;