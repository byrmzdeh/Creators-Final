import React from 'react'
import './style.scss'
import { Helmet } from 'react-helmet'
import Map from '../../components/Map'

const Contact = () => {
    return (
        <>
            <div className='contact'>
                <Helmet>
                    <title>Contact</title>
                    <link
                        rel="icon"
                        href="https://static.thenounproject.com/png/79102-200.png"
                    />
                </Helmet>
                <div className="get">
                    <img width={75} className='star-img' src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/rotate-shape.svg" alt="err" />
                    <h1>GET IN TOUCH</h1>
                    <h2>NOW WE ARE READY TO COMMUNICATE</h2>
                    <div className="follow">
                        <div className='us'>
                            <h3>FOLLOW US</h3>
                            <div className="icon">
                                <a href="https://www.instagram.com/"><i className="fa-brands fa-square-instagram"></i></a>
                                <a href="https://www.tiktok.com/"><i className="fa-brands fa-tiktok"></i></a>
                                <a href="https://www.youtube.com/"><i className="fa-brands fa-square-youtube"></i></a>
                                <a href="https://www.facebook.com/"><i className="fa-brands fa-square-facebook"></i></a>

                            </div>
                        </div>

                        <div className='us'>
                            <h3>BUSINESS ENQUIRIES</h3>
                            <p>@upcreators_info</p>
                        </div>

                        <div className='us'>
                            <h3>FGET IN TOUCH</h3>
                            <p>+1-202-555-0180</p>
                            <p>email@emailaddress.com</p>
                        </div>

                        <div className='us'>
                            <h3>LOCATION</h3>
                            <p>40 Clark Court</p>
                            <p>Dearborn Heights, MI 48127</p>
                        </div>
                    </div>
                </div>

                <img className='girls' src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/media.jpg" alt="err" />


            </div>

            <Map />

        </>

    )
}

export default Contact
