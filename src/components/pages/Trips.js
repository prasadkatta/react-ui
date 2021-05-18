import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Data from './data'
function Trips() {

    return (
        <div>
            <div className="middle-content">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h3 className="pb-4">Courses</h3>
                        <Tabs>
                            <TabList>
                                <Tab>All</Tab>
                                <Tab>Graphics</Tab>
                                <Tab>UI/UX</Tab>
                                <Tab>Branding</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="row">
                                    {
                                        Data.alllist.map((item, i) => {
                                            return (
                                                <div className="col-xl-3 col-md-4 col-sm-6 mt-4" key={i}>
                                                    <a href="javascript:void(0)" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                                                        <img className="service card-img" src={`${process.env.PUBLIC_URL}/${item.cardImage}`} alt="Card image"></img>
                                                        <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                                                            <div className="service-work-content text-left text-light">
                                                                <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">{item.cardbtn}</span>
                                                                <p className="card-text">{item.cardText}</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }


                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="row">
                                {
                                        Data.graphics.map((item, i) => {
                                            return (
                                                <div className="col-xl-3 col-md-4 col-sm-6 mt-4" key={i}>
                                                    <a href="javascript:void(0)" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                                                        <img className="service card-img" src={`${process.env.PUBLIC_URL}/${item.cardImage}`} alt="Card image"></img>
                                                        <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                                                            <div className="service-work-content text-left text-light">
                                                                <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">{item.cardbtn}</span>
                                                                <p className="card-text">{item.cardText}</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }                                 
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="row">
                                {
                                        Data.uiUx.map((item, i) => {
                                            return (
                                                <div className="col-xl-3 col-md-4 col-sm-6 mt-4" key={i}>
                                                    <a href="javascript:void(0)" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                                                        <img className="service card-img" src={`${process.env.PUBLIC_URL}/${item.cardImage}`} alt="Card image"></img>
                                                        <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                                                            <div className="service-work-content text-left text-light">
                                                                <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">{item.cardbtn}</span>
                                                                <p className="card-text">{item.cardText}</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }                                 
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="row">
                                {
                                        Data.branding.map((item, i) => {
                                            return (
                                                <div className="col-xl-3 col-md-4 col-sm-6 mt-4" key={i}>
                                                    <a href="javascript:void(0)" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                                                        <img className="service card-img" src={`${process.env.PUBLIC_URL}/${item.cardImage}`} alt="Card image"></img>
                                                        <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                                                            <div className="service-work-content text-left text-light">
                                                                <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">{item.cardbtn}</span>
                                                                <p className="card-text">{item.cardText}</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }                                 
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trips
