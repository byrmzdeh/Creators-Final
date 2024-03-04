import React, { useState } from 'react'
import './style.scss'

const Content = () => {
    const [show, setShow] = useState(false);

    function playVideo() {
        setShow(true);
    }

    function closeVideo() {
        setShow(false);
    }
    return (
        <div className='content'>
            <div className="do">
                <img className='star-img' src="https://shtheme.com/demosd/upcreatorswp/wp-content/uploads/2023/05/rotate-shape.svg" alt="err" />
                <h1>WE DO</h1>
                <h2>CAREFULLY SELECTED AND <br /> ENGAGING CONTENT</h2>
                <p>Praesent eu erat vitae enim tempor interdum quis eget magna. <br /> Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam <br /> massa ante, placerat sit amet augue id, ultrices faucibus</p>
            </div>


            <div className='Video'>
                <div className={`video ${show ? "video-show" : ""}`}>
                    {!show && (
                        <div className="play" onClick={playVideo}>
                            <div className="border">
                                <i className="fa-solid fa-play"></i>
                            </div>
                        </div>
                    )}

                    {show && (
                        <>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/WY2rTDaPpjI?si=0PfH3q17iSqymc3V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className="close" onClick={closeVideo}>
                                <i className="fa-solid fa-x"></i>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Content
