import React from 'react'
import css from './Hero.module.css'
import HeroList from './HeroList/HeroList'

const Hero = () => {
    return (
        <section className={css.hero}>
            <div className={css.container}>
                <HeroList />
            </div>
        </section>
    )
}

export default Hero