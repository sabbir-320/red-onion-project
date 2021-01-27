import React, { useState } from 'react'
import CartInfo from '../Components/CartPageComponents/CartInfo';
import Checkout from '../Components/CartPageComponents/Checkout/Checkout';

export default function Cart() {

    return (
        <div className="container">
            <div className="rew">
                <div className="col-md-8">
                    {
                         <CartInfo></CartInfo>
                    }
                </div>
                <div className="col-md-4">
                    {
                         <Checkout></Checkout>
                    }
                </div>
            </div>

        </div>
    )
}
