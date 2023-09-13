import info from "./NeedyPersons/info.jpg";
import adrs from "./NeedyPersons/adrs.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";



const Contact = () => {

    let navigate = useNavigate();

    return (
        <div className="container-fluid background" >
            <div className="row">
                <div className="col-md">
                    <img src={info} className="about-img" />
                    <div className="contact-headingtext">
                        <h1 className="contact-Text1">
                            <b>Contact Us </b>
                        </h1>
                        <h5 className="contact-Text2">We're here to help & answer any question you might have. <br />
                            We look forward to hearing from you </h5>
                    </div>
                </div>
            </div>

            <div className="container-fluid background">
                <div id="work-section" className="container section">
                    <div className="row">
                        <div className="col-md-12 section">
                            <h2 className="section-heading">Reach Out To Us On Social Media</h2>
                        </div>

                        <div className="col">

                            <div className="card text-align background card-hover" onClick={()=>window.open("https://www.facebook.com/SangatWelfareSociety?mibextid=ZbWKwL")}>
                                <span className="icon">
                                    <FaFacebookSquare />
                                </span>

                                <div className="card-body">
                                    <p className='white-text'>
                                        According to the need of the times Sangat Welfare Society
                                        official Facebook page has been created
                                        which helps to bring you the new activities of
                                        Sangat Welfare Society and through this
                                        you can easily stay in touch with us.
                                        So visit Sangat Welfare Facebook page.
                                    </p>
                                    <h4 className='yellow-text'>Facebook</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-align background card-hover" onClick={()=>window.open("https://www.instagram.com/sangatwelfaresociety/")}>
                                <span className="icon">
                                    <BsInstagram />
                                </span>

                                <div className="card-body">
                                    <p className='white-text'>
                                        According to the need of the times Sangat Welfare Society
                                        official Instagram account has been created
                                        which helps to bring you the new activities of
                                        Sangat Welfare Society and through this
                                        you can easily stay in touch with us.
                                        So visit Sangat Welfare Instagram account.
                                    </p>
                                    <h4 className='yellow-text'>Instagram</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-align background card-hover" onClick={()=>window.open("https://chat.whatsapp.com/K7b9tQ6bYlrKn7MszYDmDL")}>
                                <span className="icon">
                                    <BsWhatsapp />
                                </span>

                                <div className="card-body">
                                    <p className='white-text'>
                                        According to the need of the times Sangat Welfare Society
                                        official WhatsApp Group has been created
                                        which helps to bring you the new activities of
                                        Sangat Welfare Society and through this
                                        you can easily stay in touch with us.
                                    </p><br />
                                    <h4 className='yellow-text'>WhatsApp </h4>
                                </div>
                            </div>

                        </div>
                        <div className="col">
                            <div className="card text-align background card-hover" onClick={()=>window.open("https://mail.google.com/mail/u/0/#inbox")}>
                                <span className="icon">
                                    <BsEnvelopeFill />
                                </span>
                                <div className="card-body">
                                    <p className='white-text'>
                                        SANGAT WELFARE Team is working day and night for
                                        helping the people and provide
                                        proper chanel to the both parties .
                                        our team is available for all time so you can get information
                                        by contacting via Email.

                                    </p><br />
                                    <h4 className='yellow-text'> Email </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 section">
                    <div className="text-section">
                        <h1 className="address-heading"> Campaign </h1>
                        <br />
                        <address className="pra-about">
                            The campaign of Sangat Welfare Society is mostly <br />
                            carried out through social media which gets a lot <br />
                            of exposure and also creates advertisements of <br />
                            Sangat Welfare Society which are distributed in <br />
                            different places in different areas and mostly <br />
                            regarding the fund. The campaign is <br />
                            conducted in the month of Ramadan.
                        </address>

                    </div>
                    <div className="btn-about section">
                        <button type="button" onClick={() => navigate("/About")} className="btn btn-outline-warning btn-lg">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="col-md-6 section">
                    <div className="image-section">
                        <img className="about-image" src={adrs} />
                    </div>
                </div>
            </div>

            <div className="footer-sidebar custom-2">
                <div className="container background">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-widget">
                                <h4 className="footer-headings"> Our Purpose </h4>
                                <p className="purpose-text">  Our purpose is to present actual needy<br /> persons to the doners with their<br />
                                    authentic information and their needs<br /> for easy the work of both parties.<br />
                                    information 100% authenticated by <br />SANGAT WELFARE Society.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-widget">
                                <h4 className="footer-headings"> Resources </h4>
                                <ul className="custom-1">
                                    <li><a className="Home-page" href="#"> Home </a> </li>
                                    <li><a className="our-Project" href="Ourproject">Our Project</a> </li>
                                    <li><a className="About-Sangat" href="About">About Us</a> </li>
                                    <li><a className="Contact-us" href="Contact"> Contact</a> </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-widget">
                                <h4 className="footer-headings"> Address </h4>
                                <address className="address-text">
                                    <b> Sangat Welfare Society</b> <br />
                                    Tank Road Chahikan, <br />
                                    District, Dera Ismail Khan <br />
                                    Phone : +92343-9026890
                                </address>
                            </div>
                        </div>
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

export default Contact;