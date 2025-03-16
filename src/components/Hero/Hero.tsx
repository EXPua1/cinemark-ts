import React, { useEffect, useState } from 'react'
import css from './Hero.module.css'
import HeroList from './HeroList/HeroList'
import FilmType from '../../types/Film';

interface HeroListProps {
    films: FilmType[];
}


const Hero: React.FC<HeroListProps> = ({ films }) => {


    return (
        <section className={css.hero}>
            <div className={css.container}>
                <HeroList films={films} />
            </div>
        </section>
    )
}

export default Hero