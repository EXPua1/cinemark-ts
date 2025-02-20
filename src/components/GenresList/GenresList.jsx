import React from 'react'
import css from './GenresList.module.css'
import { genres } from '../constants/genres'
import { useDispatch, useSelector } from 'react-redux'
import { getSelectedGenre } from '../../redux/genres/selectors'
import { setSelectedGenre } from '../../redux/genres/genresSlice'

const GenresList = () => {
    const dispatch = useDispatch()
    const selectedGenre = useSelector(getSelectedGenre)



    return (
        <div className={css.container}>
            <div>
                <h2>Genres</h2>

                <ul className={css.list}>
                    {genres.map((genre) => (
                        <li
                            key={genre.id}
                            className={`${css.list_item} ${selectedGenre === genre.id ? css.active : ""
                                }`}
                            onClick={() => dispatch(setSelectedGenre(genre.id))}
                        >
                            {genre.name}
                        </li>
                    ))}
                </ul>
          </div>



        </div>

    )
}

export default GenresList