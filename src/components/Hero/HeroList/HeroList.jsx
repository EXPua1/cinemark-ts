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
    console.log(films);
    const swiperRef = useRef(null);

    const getGenres = (genreIds) => {
        return genreIds
            .map((id) => genres.find((genre) => genre.id === id)?.name) // Извлекаем имя жанра
            .filter(Boolean) // Исключаем undefined
            .join(', '); // Объединяем в строку
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
                slidesPerView={4}
                pagination={{
                    clickable: true,
                    type: 'bullets',
                }}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {films.map((film) => (
                    <SwiperSlide className={css.swiperSlide} key={film.id}>
                        <div className={css.slide}>
                            <img
                                src={film.poster_path ? `https://image.tmdb.org/t/p/w500${film.poster_path}` : defImg}
                                alt={film.title}
                                width={200}
                            />
                            <div className={css.info}>
                                <p>{film.title}</p>
                                <span className={css.film_genres}>{getGenres(film.genre_ids)}</span>
                                <span>{film.rating}</span>
                                <span className={css.rating}>{film.vote_average.toFixed(1)}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroList;
