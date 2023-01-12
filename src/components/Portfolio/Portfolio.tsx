import React from 'react';
import s from './Portfolio.module.css'
import img4 from '../../assets/original-6b4b465972b68f484b2192917ae923ef.webp'
import img5 from '../../assets/original-4d7608821594a40fefabc0f5240f4787.webp'
import img6 from '../../assets/original-8af648a2974d8ac06c0877f9bdaae1ef.webp'
import img2 from '../../assets/original-b36feac28402ab8d26742760432658a1.webp'
import img3 from '../../assets/original-e272ddaa6a380c4ecbb3d18faf9b3be4.webp'
import img1 from '../../assets/original-9dc0bd65acf7116936129f746636852e.webp'

export const Portfolio = () => {
    const arr = [
        {
            id: 1,
            image: img1,
            title: 'Data Visualization and Charts Templates for Figma',
            github: 'https://github.com/azizavant',
            demo: 'https://dribbble.com/shots/20281973-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
        },
        {
            id: 2,
            image: img2,
            title: 'Data Visualization and Charts Templates for Figma',
            github: 'https://github.com/azizavant',
            demo: 'https://dribbble.com/shots/20282089-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
        },
        {
            id: 3,
            image: img3,
            title: 'Component library for data visualization',
            github: 'https://github.com/azizavant',
            demo: 'https://dribbble.com/shots/20333536-Component-library-for-data-visualization'
        },
        {
            id: 4,
            image: img4,
            title: 'Data Visualization and Charts Templates for Figma',
            github: 'https://github.com/azizavant',
            demo: 'https://dribbble.com/shots/19314544-Orion-UI-kit-for-Figma-has-been-updated'
        },
        {
            id: 5,
            image: img5,
            title: 'Data Visualization and Charts Templates for Figma',
            github: 'https://github.com/azizavant',
            demo: 'https://dribbble.com/shots/19314598-Orion-UI-kit-for-Figma'
        },
        {
            id: 6,
            image: img6,
            title: 'Data Visualization and Charts Templates for Figma',
            github: 'https://github.com/azizavant',
            demo: 'https://dribbble.com/shots/19609295-Orion-UI-kit-for-Figma'
        },
    ]

    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className={`container ${s.portfolio__container}`}>
                {arr.map(el => {
                    return <article key={el.id} className={s.portfolio__item}>
                        <div className={s.portfolio__item_image}>
                            <img src={el.image} alt=""/>
                        </div>
                        <h3>{el.title}</h3>
                        <div className={s.portfolio__item_cta}>
                            <a href={el.github} className='btn' target='_blank'>GitHub</a>
                            <a href={el.demo} className='btn btn-primary' target='_blank'>Live
                                Demo</a>
                        </div>
                    </article>
                    })
                }
            </div>
        </section>
    );
};

