import React, { useEffect, useState } from 'react'
import css from './Hero.module.css'
import HeroList from './HeroList/HeroList'
import { getTrendingMovies } from '../../utils/api';

const Hero = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTrendingMovies();
                setFilms(data);

            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);


    return (
        <section className={css.hero}>
            <div className={css.container}>
                <HeroList films={films} />
            </div>
        </section>
    )
}

export default Hero