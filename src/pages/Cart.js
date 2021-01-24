import React, { useState } from 'react'
import CartInfo from '../Components/CartPageComponents/CartInfo';
import { foodsMenu } from '../FakeData/FakeData';

export default function Cart() {

    return (
        <div className="container">
            {
                foodsMenu.map(x => <CartInfo item={x}></CartInfo>)
            }
        </div>
    )
}
