import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import css from "./HeroList.module.css";
import { genres } from "../../constants/genres";

const defImg = "https://via.placeholder.com/200";




const HeroList = ({ films }) => {
    console.log(films)
    const swiperRef = useRef(null);

    const getGenres = (genreIds) => {
        return genreIds
            .map((id) => genres.find((genre) => genre.id === id))  // Находим жанры по ID
            .map((genre) => genre?.name)  // Извлекаем имя жанра
            .join(', ');  // Объединяем жанры в строку
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
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                    >
                        &#8592; {/* Стрелка влево */}
                    </button>
                    <button
                        className={css.nextButton}
                        onClick={() => swiperRef.current.swiper.slideNext()}
                    >
                        &#8594; {/* Стрелка вправо */}
                    </button>
                </div>
            </div>

            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={4}
                pagination={{ clickable: true }}
                loop={true}
            >
                {films.map((film) => (
                    <SwiperSlide key={film.id}>
                        <div className={css.slide}>
                            <img
                                src={film.poster_path ? `https://image.tmdb.org/t/p/w500${film.poster_path}` : defImg}
                                alt={film.title}
                                width={200}
                            />
                            <div className={css.info}>
                                <p>{film.title}</p>

                                <span className={css.rating}>{film.vote_average}</span>
                                <span>{film.rating}</span>
                                <span>{getGenres(film.genre_ids)}</span>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroList;
