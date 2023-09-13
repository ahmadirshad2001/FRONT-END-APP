import React from 'react';
import img from './NeedyPersons/img.jpg';
import Feature from './NeedyPersons/Feature.jpg';
import { BsCheckLg } from "react-icons/bs";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsFillBarChartFill } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import pngegg from "./NeedyPersons/pngegg.png";
import FB from "./NeedyPersons/FB.jpg";
import { useNavigate } from "react-router-dom";


function Ourproject() {

    let navigate = useNavigate();

    return (
        <div className="container-fluid background">
            <div className="row">
                <div className="col-md">
                    <img src={img} className="our-project-img" />
                    <div className='project-text'>
                        <div className='display'>
                            <img className="logo-img" src={pngegg} />
                            <h1 className='project-heading'> <b>Sangat Welfare Society </b></h1>
                        </div>
                        <span className="Project-content"> <b> Sangat Welfare Society is to provide ease to facilitate all NEEDY <br /> person,
                            DONERS & NGO's to find out the authentic person.  <br /> Sangat Welfare is very friendly and help them find out  <br />
                            the NEEDY person with their location.  <br /> Sangat welfare will provide benefit by looking at the  <br /> NEEDY person data
                            shown to the users on their screen.  <br /> & also NEEDY person find out the NGO's details etc.</b>
                        </span>
                    </div>
                </div>
            </div>

            <div className="container-fluid background">
                <div id="work-section" className="container section">
                    <div className="row">
                        <div className="col-md-12 section">
                            <h2 className="section-heading">How It Work</h2>
                        </div>

                        <div className="col">

                            <div className="card text-align background card-hover">
                                <span className="icon">
                                    <BsCheckLg />
                                </span>

                                <div className="card-body">
                                    <p className='white-text'>
                                        Needy person must be registered with their complete informations
                                        name ,email etc,
                                        SANGAT WELFARE will be authenticate this person by visiting physically,
                                        if SANGAT WELFARE satisfied then we will present this person to the Doners.

                                    </p>
                                    <h4 className='yellow-text'>Needy Person</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-align background card-hover">
                                <span className="icon">
                                    <BsFillBriefcaseFill />
                                </span>

                                <div className="card-body">
                                    <p className='white-text'>
                                        DONERS must be registered with required information,
                                        registered DONERs login the portal and can visit the list of Needy person.
                                        if any DONER have any confusion then he/she can easily contact with SANGAT WELFARE on their given contact details.
                                    </p>
                                    <h4 className='yellow-text'>Doners</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-align background card-hover">
                                <span className="icon">
                                    <BsFillBarChartFill />
                                </span>

                                <div className="card-body">
                                    <p className='white-text'>
                                        NGO's must be registered with required information,
                                        registered NGO's login the portal and can visit the list of Needy person.
                                        if any NGO's have any confusion then they can easily contact with SANGAT WELFARE on their given contact details.
                                    </p><br />
                                    <h4 className='yellow-text'>NGO's</h4>
                                </div>
                            </div>

                        </div>
                        <div className="col">
                            <div className="card text-align background card-hover">
                                <span className="icon">
                                    <BsGlobe2 />
                                </span>
                                <div className="card-body">
                                    <p className='white-text'>
                                        SANGAT WELFARE Team is working day and night for helping the people and provide proper chanel to the both parties .
                                        our team is available to visit the location of needy person for collectiong information.

                                    </p><br />
                                    <h4 className='yellow-text'>Our Team</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col section">
                    <div className="section-text">
                        <h1 className='Feature-head1'> Objectives: </h1>
                        <h5 className='Feature-head2'>Aims & Objectives of Sangat Welfare Society are following </h5>
                    </div>
                    <ul className='Features'>
                        <li className='feature-1'> Blood Donation  </li>
                        <li className='feature-1'> Elimination of pollution </li>
                        <li className='feature-1'> Palntation campaign </li>
                        <li className='feature-1'> Conducting various educational activities </li>
                        <li className='feature-1'> Protection of community resources </li>
                        <li className='feature-1'> Selfless service to suffering humanity </li>
                        <li className='feature-1'> Building individuals for a peaceful & prosperous society </li>
                    </ul>
                </div>
            </div>


            <div className="row">
                <div className="col-md-6 section">
                    <div className="ourteam-text">
                        <h1 className="section-heading"> Our Purpose </h1>
                        <h6 className="pra-about">
                        Our purpose is to present actual needy persons <br />
                        to the doners with their authentic information <br />
                        and their needs for easy the work of both <br />
                        parties. information 100% authenticated by <br />
                        SANGAT WELFARE Society.
                        </h6>
                    </div>
                    <div className="btn-about section">
                        <button type="button" onClick={()=> navigate("/Contact")} className="btn btn-outline-warning btn-lg">
                         Contact Us
                        </button>
                    </div>
                </div>
                <div className="col-md-6 section ">
                    <div className="image-section">
                        <img className="about-image" src={FB} />
                    </div>
                </div>
            </div>

            <div className="container-fluid background custom-2">
                <div className="footer">
                    <div className="row">
                        <div className="col-md-6">
                            <span className="footer-text">
                                copyright@2023 sangatwelfaresocity.
                            </span>
                        </div>
                        <div className="col-md-6">
                            <a className="privacy-text" href="#"> Privacy Policy </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Ourproject;