import React from 'react'
import FacilityInfo from './FacilityInfo'

export default function Facility() {
    const facilityData = [
        {
            img: "image/adult-blur-blurred-background-687824.png",
            icon: "ICON/group204.png",
            title: "Fast Delivery",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nihil vero ipsum provident molestias, assumenda vel quaerat fuga et cupiditate ullam repudiandae quibusdam possimus expedita. A nulla asperiores minus soluta quas ipsum iste totam, molestiae commodi nostrum pariatur, assumenda ipsam!"
        },        
        {
            img: "image/chef-cook-food-33614.png",
            icon: "ICON/group204.png",
            title: "A Good Auto Responder",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nihil vero ipsum provident molestias, assumenda vel quaerat fuga et cupiditate ullam repudiandae quibusdam possimus expedita. A nulla asperiores minus soluta quas ipsum iste totam, molestiae commodi nostrum pariatur, assumenda ipsam!"
        },        
        {
            img: "image/architecture-building-city-2047397.png",
            icon: "ICON/group 245.png",
            title: "Home Delivery",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nihil vero ipsum provident molestias, assumenda vel quaerat fuga et cupiditate ullam repudiandae quibusdam possimus expedita. A nulla asperiores minus soluta quas ipsum iste totam, molestiae commodi nostrum pariatur, assumenda ipsam!"
        },
    ]
    return (
        <div className="container">
            <div></div>
            <div className="row">
                {
                    facilityData.map(x => <FacilityInfo facilityInfo={x}></FacilityInfo>)
                }
            </div>
            
        </div>
    )
}
