import React from 'react';
import s from './Services.module.css'
import {BsCheck} from "react-icons/bs";

export const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className={`container ${s.services__container}`}>
                <article className={s.service}>
                    <div className={s.service__head}>
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className={s.service__list}>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </li>
                    </ul>
                </article>
                {/*END OF UI/UX*/}
                <article className={s.service}>
                    <div className={s.service__head}>
                        <h3>Web Development</h3>
                    </div>
                    <ul className={s.service__list}>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </li>
                    </ul>
                </article>
                {/*END OF WEB DEVELOPMENT*/}
                <article className={s.service}>
                    <div className={s.service__head}>
                        <h3>Content Creation</h3>
                    </div>
                    <ul className={s.service__list}>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </li>
                        <li>
                            <BsCheck className={s.service__list_icon}/>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
};

