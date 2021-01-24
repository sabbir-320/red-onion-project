import React from 'react'
import { foodsMenu } from '../../../FakeData/FakeData'
import BreakfastInfo from './BreakfastInfo'
   
export default function Breakfast() {
   const breakfast = foodsMenu.slice(0, 6)
    return (
        <div className="row">
            {
                breakfast.map(x => <BreakfastInfo breakfastInfo={x}></BreakfastInfo>)
            }
        </div>
    )
}
