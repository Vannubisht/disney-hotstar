import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import google1 from '../assets/Images/google1.webp'
import google2 from '../assets/Images/google2.webp'


/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div>
                    <h3>Company</h3>
                    <a href=""><p>About us</p></a>
                    <a href=""><p>Careers</p></a>
                    <p style={{ marginTop: "20px" }}>&copy;2023 STAR . All rights reserved</p>
                    <a href=''><p>Terms of Use &nbsp; Privacy  Policy &nbsp; FAQ </p></a>
                </div>

                <div>
                    <h3>View website in</h3>
                    <a href=""><p><FontAwesomeIcon className='mx-5' icon={faCheck} />English</p></a>

                </div>

                <div>
                    <h3>Need help ?</h3>
                    <a href=""><p>Visit Help center</p></a>
                    <a href=""><p>Share feedback</p></a>

                </div>

                <div>
                    <h3 style={{ textAlign: "center" }}>Connect with Us</h3>

                    <div className='ic text-white pb-4'>
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </div>
                    <div className='emg flex px-4 '>
                        <img className='px-2' src={google1} alt="" />
                        <img className='px-1' src={google2} alt="" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
