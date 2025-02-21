import React, { useEffect, useState } from 'react'
import css from './Hero.module.css'
import HeroList from './HeroList/HeroList'

import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesDay } from '../../redux/movies/moviesSlice';


const Hero = () => {
    const dispatch = useDispatch()
    const { films, status, error } = useSelector((state) => state.movies);


    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchMoviesDay());
        }
    }, [status, dispatch]);

    if (status === "loading") return <p>Loading...</p>;
    if (status === "failed") return <p>Error: {error}</p>;

    return (
        <section className={css.hero}>
            <div className={css.container}>
                <HeroList films={films} />
            </div>
        </section>
    )
}

export default Hero