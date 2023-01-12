import React from 'react';
import s from './Header.module.css'
//TODO: import CV from ''

export const CTA = () => {
    return (
        <div className={s.cta}>
            <a href={'CV'} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
    );
};

