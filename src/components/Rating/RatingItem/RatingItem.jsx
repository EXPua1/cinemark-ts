import { Link, useLocation } from 'react-router';
import { GoInfo } from "react-icons/go";
import css from './RatingItem.module.css';

const RatingItem = ({ title, films }) => {
  const location = useLocation();

  // const slisedfilms = films.filter((film, index) => index < 10);
  const slisedfilms = films.slice(0, 10);
  return (
    <div>
      <h2>{title}</h2>
      <div className={css.container}>
        <ul className={css.list}>
          {slisedfilms.map((film, index) => {
            const type = film.media_type || 'movie';

            return (
              <li className={css.item} key={film.id}>
                <div className={css.itemCont}>
                  <div className={css.imgCont}>
                    <img className={css.img} src={
                      film.poster_path
                        ? `https://image.tmdb.org/t/p/w200${film.poster_path}`
                        : defImg
                    }></img>
                  </div>
                  <div>

                    <p>{index + 1}. {film.title || film.name}</p>
                    <div className={css.year}>
                      <p>{film.release_date?.split('-')[0] || film.first_air_date?.split('-')[0]}</p>
                      <p>{film.runtime}</p>
                      {console.log(film)}
                    </div>

                    <p className={css.rating}>{film.vote_average.toFixed(1)} ({film.vote_count })</p>
                  </div>

                </div>
                <Link from={location} to={`/${type}/${film.id}`}>

                  <GoInfo size={25}  />
                </Link>


              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RatingItem;
