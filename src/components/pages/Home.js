import React from 'react'
import Data from './data'
function Home() {
    return (
        <div className="banner-wrapper bg-light">
            <div id="index_banner" className="banner-vertical-center-index">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        {
                            Data.bannerList.map((item, i) => {
                                return (
                                    <div key={i} className={i === 0 ? "carousel-item active" : "carousel-item" }>
                                        <img src={item.bannerImage} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <div className="py-5 row d-flex align-items-center">
                                                <div className="banner-content col-lg-8 col-8 offset-2 m-lg-auto text-left py-5 pb-5">
                                                    <h1 className="banner-heading h1 text-purple-light display-5 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                                                        {item.bannerHeading}  
                                                    </h1>
                                                    <p className="banner-body text-muted py-3 mx-0 px-0">
                                                        {item.bannerBody}   
                                                    </p>
                                                    <a className="banner-button btn rounded-pill btn-outline-primary btn-lg px-4" href="#" role="button">Get Started</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }



                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
