import React from 'react'
import css from './RatingItem.module.css'
import { Link } from 'react-router'

const RatingItem = ({title,films}) => {
  return (
      <div>
          <h2>{title}</h2>
          <div className={css.container}>
             
              <ul>
                  {films.map((film) => (
                      <li className={css.item} key={film.id}>
                          <Link to={`/${film.media_type}/${film.id}`} >
                              <p>{film.title || film.name}</p>
                          </Link>
                          
                          <p className={css.rating}>{film.vote_average.toFixed(1)}</p>
                      </li>
                  ))}
              </ul>
          </div>
         
      </div>
      
      
  )
}

export default RatingItem