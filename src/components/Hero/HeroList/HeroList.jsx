import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import css from "./HeroList.module.css";

const defImg = "https://via.placeholder.com/200"; 

const HeroList = ({ films }) => {
   
    if (!Array.isArray(films) || films.length === 0) {
        return <p>No films available.</p>; 
    }

    return (
        <div className={css.container}>
            <h2 className={css.title}>Films list</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0} 
                slidesPerView={4}
                navigation
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
                            <p>{film.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroList;
