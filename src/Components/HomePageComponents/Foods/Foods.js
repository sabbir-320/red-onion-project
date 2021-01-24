import React, { useState } from 'react'
import './Foods.css'
import Breakfast from './Breakfast'
import Dinner from './Dinner'
import Lunch from './Lunch'

export default function Foods() {
    const [breakfast, setBreakfast] = useState(true)
    const [lunch, setLunch] = useState(false)
    const [dinner, setDinner] = useState(false)

    const handleBreakfast = () => {
        setBreakfast(true)
        setLunch(false)
        setDinner(false)
    }
    const handleLunch = () => {
        setLunch(true)
        setBreakfast(false)
        setDinner(false)
    }
    const handleDinner = () => {
        setDinner(true)
        setBreakfast(false)
        setLunch(false)
    }
    return (
        <div className="container">
            <div className="d-flex justify-content-center btn-style">
                <button onClick={handleBreakfast} >Breakfast</button>
                <button onClick={handleLunch}>Lunch</button>
                <button onClick={handleDinner}>Dinner</button>
            </div>
            <div>
                {
                    breakfast ? <Breakfast></Breakfast> : null
                }
                {
                    lunch ? <Lunch></Lunch> : null
                }
                {
                    dinner ? <Dinner></Dinner> : null
                }
            </div>
        </div>
    )
}
