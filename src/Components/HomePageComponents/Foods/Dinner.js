import React from 'react'
import { foodsMenu } from '../../../FakeData/FakeData'
import DinnerInfo from './DinnerInfo'

export default function Dinner() {
    const dinnerData = foodsMenu.slice(12, 18)
    return (
        <div className="row">
            {
                dinnerData.map(x => <DinnerInfo dinnerInfo={x}></DinnerInfo>)
            }
        </div>
    )
}
