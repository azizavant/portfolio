import {createSlice} from "@reduxjs/toolkit";
import img1 from "../assets/original-9dc0bd65acf7116936129f746636852e.webp";
import img2 from "../assets/original-b36feac28402ab8d26742760432658a1.webp";
import img3 from "../assets/original-e272ddaa6a380c4ecbb3d18faf9b3be4.webp";
import img4 from "../assets/original-6b4b465972b68f484b2192917ae923ef.webp";
import img5 from "../assets/original-4d7608821594a40fefabc0f5240f4787.webp";
import img6 from "../assets/original-8af648a2974d8ac06c0877f9bdaae1ef.webp";

export interface PortfolioDataType {
    id: number
    image: any
    title: string
    github: string
    demo: string
}

export interface PortfolioOtherInfoType {
    title: string
    name: string
    github: string
    liveDemo: string
}

export interface PortfolioType {
    otherInfo: PortfolioOtherInfoType
    portfolioData: PortfolioDataType[]
}

const initialState: PortfolioType = {
    otherInfo: {
        title: "My Recent Work",
        name: "Portfolio",
        github: "GitHub",
        liveDemo: "Live Demo"
    },
    portfolioData: [
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
}

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {}
})

export default portfolioSlice.reducer