import React from 'react'
import css from './Rating.module.css'

const Rating = ({title,films}) => {
  return (
      <div className={css.container}>
          <h2>{title}</h2>
          <ul>
              {films.map((item) => (
                  <li key={item.id}>{item.title}</li>
              ))}
          </ul>
      </div>
      
      
  )
}

export default Rating