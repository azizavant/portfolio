import React from 'react';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'

import Dev1ceImg from '../../assets/dev1ce.jpg'
import NikoImg from '../../assets/niko.jpeg'
import TwistzzImg from '../../assets/twistzz.jpg'
import s from './Testimonials.module.css'

export const Testimonials = () => {
    const arr = [
        {
            id: 1,
            avatar: NikoImg,
            name: 'Abzal Kozhakhmet',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit molestie eget nec ante, donec iaculis tempus'
        },
        {
            id: 2,
            avatar: Dev1ceImg,
            name: 'dev1ce',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit molestie eget nec ante, donec iaculis tempus'
        },
        {
            id: 3,
            avatar: TwistzzImg,
            name: 'twistzz',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit molestie eget nec ante, donec iaculis tempus'
        }
    ]

    return (
        <section id='testimonials'>
            <h5>Review from Abzal</h5>
            <h2>Review</h2>

            <Swiper className={`container ${s.testimonials__container}`}
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {arr.map(el => {
                    return <SwiperSlide key={el.id} className={s.testimonial}>
                        <div className={s.avatar}>
                            <img src={el.avatar} alt="niko"/>
                        </div>
                        <h5 className={s.name}>{el.name}</h5>
                        <small className={s.review}>{el.review}</small>
                    </SwiperSlide>
                })}
            </Swiper>
        </section>
    );
};
