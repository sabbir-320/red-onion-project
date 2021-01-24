import React, { useContext, useState } from 'react'
import { UserContext } from '../../../App'

export default function LunchInfo({ lunchInfo }) {
    const [food, setFood] = useContext(UserContext)
    const [transform, setTransform] = useState(false)

    const { img, name, details, price, id } = lunchInfo
    const handleTransitionOpen = () => {
        setTransform(true)
    }
    const handleTransitionClose = () => {
        setTransform(false)
    }
    const handleId = () => {
        setFood(id)
    }
    return (
        <div className="col-md-4">
            <div className="card d-flex align-items-center" onMouseEnter={handleTransitionOpen} onMouseLeave={handleTransitionClose}>
                <img className="img-fluid" src={img} alt="" />
                {
                    transform ?
                        <div className="card-body trans-style text-center ">
                            <h3 className="mt-5">{name}</h3>
                            <p>{details}</p>
                            <h4 className="mt-5">{price}</h4>
                            <button onClick={handleId} className="mt-2">Add to cart</button>
                        </div>
                        : null
                }
            </div>
        </div>
    )
}
