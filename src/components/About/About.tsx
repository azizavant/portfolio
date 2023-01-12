import React from 'react';
import s from './About.module.css'
import ME from '../../assets/photo_2022-12-20_20-51-24.jpg'
import {FaAward} from "react-icons/fa";
import {RiFolder3Fill} from "react-icons/ri";
import {SlGraduation} from "react-icons/sl";


export const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className={`container ${s.about__container}`}>
                <div className={s.about__me}>
                    <div className={s.about__me_image}>
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>
                <div className={s.about__content}>
                    <div className={s.about__cards}>
                        <article className={s.about__card}>
                            <SlGraduation className={s.about__icon}/>
                            <h5>Education</h5>
                            <small>University Education at the Moscow Polytechnic University(didn't graduate)</small>
                        </article>

                        <article className={s.about__card}>
                            <FaAward className={s.about__icon}/>
                            <h5>Experience in IT</h5>
                            <small>8 Months of Studying</small>
                        </article>

                        <article className={s.about__card}>
                            <RiFolder3Fill className={s.about__icon}/>
                            <h5>Projects</h5>
                            <small>3 Completed</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        molestie eget nec ante, donec iaculis tempus mattis in
                        tristique vel ultrices quisque porttitor nunc, vivamus porta
                        viverra dictumst fermentum dictum quam facilisis nisi facilisi.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};


