import kids from "./NeedyPersons/kids.jpg";
import slider6 from "./NeedyPersons/slider6.jpg";
import Team from "./NeedyPersons/Team.jpg";
import pngegg from "./NeedyPersons/pngegg.png";
import { useNavigate } from "react-router-dom";


function About() {


    let navigate = useNavigate();

    return (
        <div className="container-fluid background" >
            <div className="row">
                <div className="col-md">
                    <img src={slider6} className="about-img" />
                    <div className='about-text'>
                        <div className='display'>
                            <img className="logo-img" src={pngegg} />
                            <h1 className='about-heading'> <b>Sangat Welfare Society </b></h1>
                        </div>
                        <span className="about-content"> <b>  Sangat Welfare Society is an organization of educated and <br />
                            committed youth of village Chahikan whose aim is to serve <br />
                            the societybeyond the discrimination of religion, creed, <br />
                            language and nation. It is a non-profit and <br />
                            non-political organization.<br /></b>
                        </span>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="image-section">
                        <img className="about-image" src={kids} />
                    </div>
                </div>
                <div className="col-md-6 section">
                    <div className="text-section">
                        <h1 className="section-heading">ABOUT SANGAT</h1>
                        <h6 className="pra-about">
                            Sangat Welfare Society was founded in March 2018 <br />
                            with the aim of serving the society beyond the <br />
                            discrimination of religion, creed, language and nation. <br />
                            Organizing activities, and assisting the victims in <br />
                            the recent floods. Funding of Sangat Welfare is not <br />
                            affiliated to any political party or any other party <br />
                            but the members of Sangat Welfare run Sangat Welfare <br />
                            by collecting their monthly contribution.
                        </h6>
                    </div>
                    <div className="btn-about section">
                        <button type="button" onClick={()=> navigate("/Contact")} className="btn btn-outline-warning btn-lg">
                         Contact Us
                        </button>
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
                        <h1 className="section-heading"> Our Team </h1>
                        <h6 className="pra-about">
                            The team of Sangat Welfare Society
                            consists of <br /> about 15 people who
                            perform their work with <br /> great
                            effort and passion. The team has
                            a monthly <br /> meeting in which the next
                            plan of action and <br /> monthly donation
                            is collected. Apart from this, <br /> a post
                            regarding the meeting is run on
                            social media,<br /> due to which it gets a
                            lot of exposure from outside.
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
                        <img className="about-image" src={Team} />
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

export default About;