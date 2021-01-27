import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App';

import { foodsMenu } from '../../FakeData/FakeData';

export default function CartInfo() {
    const [foodId, setFoodId] = useContext(UserContext)

    const [showProduct, setShowProduct] = useState({})
    console.log(foodId);
    

    // console.log(foodId);
    // const pd = {}
    // const product = foodsMenu.find(product => product.id === foodId)

    
    
    // console.log(product);
    




  
    // const { img, name, description, price, id } = showProduct;
    return (
        <div className="row">
            <div>
            </div>
        </div>
    )
}
