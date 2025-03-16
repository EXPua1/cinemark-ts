import { useRef } from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Swiper as SwiperType } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { genres } from '../../../constants/genres';


import css from './HeroList.module.css';
import { Icon } from '@iconify/react';
import FilmType from '../../../types/Film';

const defImg = 'https://via.placeholder.com/200';

interface HeroListProps {
  films: FilmType[];
}

const HeroList: React.FC<HeroListProps> = ({ films }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const getGenres = (genreIds: number[]): string => {
    return genreIds
      .map(id => genres.find(genre => genre.id === id)?.name)
      .filter(Boolean)
      .join(', ');
  };

  if (!Array.isArray(films) || films.length === 0) {
    return <p>No films available.</p>;
  }

  return (
    <div className={css.container}>
      <div className={css.btn_swipe}>
        <h2 className={css.title}>Films list</h2>
        <div className={css.customNavigation}>
          <button
            className={css.prevButton}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            &#8592;
          </button>
          <button
            className={css.nextButton}
            onClick={() => swiperRef.current?.slideNext()}
          >
            &#8594;
          </button>
        </div>
      </div>

      <Swiper
        className={css.swiper_slide}
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={5}
        pagination={{
          clickable: true,
          type: 'bullets'
        }}
        loop={true}
        onSwiper={swiper => (swiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }}
        style={{
          "--swiper-pagination-color": "#F49300",
        } as React.CSSProperties}
      >
        {films.map(film => (
          <SwiperSlide className={css.swiperSlide} key={film.id}>
            <Link className={css.link} to={`/${film.media_type}/${film.id}`}>
              <div className={css.slide}>
                <img
                  src={film.poster_path
                    ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                    : defImg
                  }
                  alt={film.title}
                  width={200}
                />
                <div className={css.info}>
                  <p>{film.title}</p>
                  <span className={css.film_genres}>
                    {getGenres(film.genre_ids)}
                  </span>
                  <span>{film.vote_average.toFixed(1)}</span>
                  <div className={css.rating_Container}>
                    <div className={css.rating_Count}>
                      <span className={css.rating}>
                        {film.vote_average.toFixed(1)}
                      </span>
                      <span>({film.vote_count})</span>
                    </div>
                    <Icon className={css.icon} icon="material-symbols:arrow-forward-ios-rounded" width="12" height="26" />
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroList;
