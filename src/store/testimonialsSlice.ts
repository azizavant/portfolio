import {createSlice} from "@reduxjs/toolkit";
import NikoImg from "../assets/niko.jpeg";
import Dev1ceImg from "../assets/dev1ce.jpg";
import TwistzzImg from "../assets/twistzz.jpg";

export type TestimonialsDataType = {
    id: number
    name: string
    avatar: string
    review: string
}
const initialState = {
    testimonialsData: [
        {
            id: 1,
            name: 'Abzal Kozhakhmet',
            avatar: NikoImg,
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit molestie eget nec ante, donec iaculis tempus'
        },
        {
            id: 2,
            name: 'dev1ce',
            avatar: Dev1ceImg,
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit molestie eget nec ante, donec iaculis tempus'
        },
        {
            id: 3,
            name: 'twistzz',
            avatar: TwistzzImg,
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit molestie eget nec ante, donec iaculis tempus'
        }
    ] as TestimonialsDataType[]
}

export const testimonialsSlice = createSlice({
    name: 'testimonials',
    initialState,
    reducers: {}
})

export default testimonialsSlice.reducer