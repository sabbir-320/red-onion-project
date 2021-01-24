import React from 'react'
import { foodsMenu } from '../../../FakeData/FakeData'
import LunchInfo from './LunchInfo'

export default function Lunch() {
    const lunchData = foodsMenu.slice(6, 13)
    return (
        <div className="row">
            {
                lunchData.map(x => <LunchInfo lunchInfo={x}></LunchInfo>)
            }
        </div>
    )
}
