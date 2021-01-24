import React from 'react'

export default function FacilityInfo({ facilityInfo }) {
    const { img, icon, title, description } = facilityInfo;
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="d-flex justify-content-center">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-start">
                        <img className="img-fluid" src={icon} alt="" style={{ width: "14%", marginRight: "10px" }} />
                        <h5>{title}</h5>
                    </div>
                    <p>{description}</p>
                </div>
            </div>

        </div>
    )
}
