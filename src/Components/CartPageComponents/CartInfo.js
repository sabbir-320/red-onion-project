import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App';

export default function CartInfo({ item }) {
    const [foodId, setFoodId] = useContext(UserContext)
    const [showProduct, setShowProduct] = useState({})

    useEffect(() => {
        if (foodId === item.id) {
            setShowProduct(item)
        }
    }, [item]);
    console.log(showProduct.length);
    const { img, name, description, price, id } = showProduct;
    return (
        <div className="row">
            <div>
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p>{price}</p>
            </div>
        </div>
    )
}
