import React, { useContext } from 'react'
import { UserContext } from '../../../App'
import './Banner.css'
import image from './bannerbackground.png'

export default function Banner() {
    const [food, setFood] = useContext(UserContext)
    return (
        <div className="banner-container" style={{ backgroundImage: `url(${image})` }}></div>

    )
}
