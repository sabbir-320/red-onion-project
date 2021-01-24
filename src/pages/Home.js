import React from 'react'
import Banner from '../Components/HomePageComponents/Banner/Banner'
import Facility from '../Components/HomePageComponents/Facility/Facility'
import Foods from '../Components/HomePageComponents/Foods/Foods'
import Footer from '../Components/HomePageComponents/Footer/Footer'
import Navbar from '../Components/HomePageComponents/Navbar/Navbar'

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Foods></Foods>
            <Facility></Facility>
            <Footer></Footer>
        </div>
    )
}
