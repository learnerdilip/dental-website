import React from 'react'
import Button from '@material-ui/core/Button'
import dentistryBanner from '../../resources/dentistryBanner.jpg'
import Modal from '@material-ui/core/Modal';
import { Fragment } from 'react';

export default function Banner() {
    return (
        <Fragment>
            <div className="banner-section">
                <div className="banner-container">
                    <img className="banner-image" alt="image for clinic" src={dentistryBanner} alt={dentistryBanner}/>
                </div>
            </div>
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdZwSZ-v_zTvgc5XCyvtOcPuzJJaKmiQikXHGeIP_vpXwXOkQ/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
        </Fragment>
    )
}
