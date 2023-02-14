import {createSlice} from "@reduxjs/toolkit";
import adminQueue_project from "../assets/admin-queue_project.png";
import adminQueue_project2 from "../assets/admin-queue_project2.png";
import queueFront_project from '../assets/project_queue-front.png'

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
            image: queueFront_project,
            title: 'an application that serve for restaurants',
            github: 'https://github.com/azizavant/queue-front',
            demo: 'https://dribbble.com/shots/20281973-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
        },
        {
            id: 2,
            image: adminQueue_project,
            title: 'an Administration for Managing the app',
            github: 'https://github.com/shoqqan/admin-queue',
            demo: 'https://dribbble.com/shots/20282089-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
        },
        {
            id: 3,
            image: adminQueue_project2,
            title: 'an API for creating a restaurant for the app',
            github: 'https://github.com/shoqqan/admin-queue',
            demo: 'https://dribbble.com/shots/20333536-Component-library-for-data-visualization'
        }
    ]
}

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {}
})

export default portfolioSlice.reducer