import React from 'react'
import css from './HeroList.module.css'
import korben from '../../../assets/images/korben.jpg'
import { Link } from 'react-router'

const HeroList = () => {
    return (
        <div className={css.container}>
            <h2 className={css.title}>Films list</h2>
            <ul className={css.list}>
                <li className={css.list_item}>
                    <div>
                        <Link to="/movies/"> 
                            <img src={korben} alt="Korben Dallas" />
                        </Link>

                        <div className={css.list_content}>
                            <h3>5th element</h3>
                            <span>Action, Drama</span>
                            <span>8.3</span>
                        </div>
                    </div>
                </li>
                <li className={css.list_item}>
                    <div>
                        <Link to="/movies/">
                            <img src={korben} alt="Korben Dallas" />
                        </Link>

                        <div className={css.list_content}>
                            <h3>5th element</h3>
                            <span>Action, Drama</span>
                            <span>8.3</span>
                        </div>
                    </div>
                </li>
                <li className={css.list_item}>
                    <div>
                        <Link to="/movies/">
                            <img src={korben} alt="Korben Dallas" />
                        </Link>

                        <div className={css.list_content}>
                            <h3>5th element</h3>
                            <span>Action, Drama</span>
                            <span>8.3</span>
                        </div>
                    </div>
                </li>
                <li className={css.list_item}>
                    <div>
                        <Link to="/movies/">
                            <img src={korben} alt="Korben Dallas" />
                        </Link>

                        <div className={css.list_content}>
                            <h3>5th element</h3>
                            <span>Action, Drama</span>
                            <span>8.3</span>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default HeroList