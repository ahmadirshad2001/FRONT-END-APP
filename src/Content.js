import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import slider4 from "./images/slider4.jpg";
import slider2 from "./images/slider2.jpg";
import slider3 from "./images/slider3.jpg";
import kids from "./images/kids.jpg"
import { BsCheckLg } from "react-icons/bs";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsFillBarChartFill } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import pngegg from "./images/pngegg.png";
import { useNavigate } from "react-router-dom";
import Meezan from './Component/NeedyPersons/Meezan.png';
import EasyPaisa from './Component/NeedyPersons/EasyPaisa.png';
import JazzCash from './Component/NeedyPersons/JazzCash.png';
import { useState } from "react";
import React from "react";
import { Dialog } from 'primereact/dialog';
import { TabView, TabPanel } from 'primereact/tabview';
import { InputTextarea } from 'primereact/inputtextarea';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { Calendar } from 'primereact/calendar';


function Content() {
    const toast = React.useRef(null);
    const [Username, setUserName] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [Phonenumber, setPhonenumber] = React.useState("");
    const [Address, setAddress] = React.useState("");
    const [Donation, setDonation] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [isEditMode, setIsEditMode] = React.useState(false);
    const [loading1, setLoading1] = React.useState(false);
    const [idForEdit] = React.useState(null);
    const [date, setDate] = React.useState(null)
    
    const [date1, setDate1] = React.useState(null)
    let navigate = useNavigate();



    const clearFields = () => {
        setUserName("")
        setEmail("")
        setPhonenumber("")
        setDate("")
        setAddress("")
        setDonation("")
       
      }
     


    const saveUserDonations = async () => {
        if (Username != "" && Email != "" && Phonenumber != "" && Donation != "" && Address != "" && date !="") {
          setLoading1(true);
          let obj = {
            name: Username,
            email: Email,
            phonenumber: Phonenumber,
            date :date,
           Donation: Donation,
            Address: Address,
           
          }
    
          var response = null;
    
          if (isEditMode) {
            response = await axios.put(`http://localhost:5000/api/Donation/` + idForEdit, obj);
          }
          else {
            response = await axios.post(`http://localhost:5000/api/Donation/`, obj);
          }
    
          if (response.data.isSaved) {
           
            console.log("Your information has been saved");
            // toast.current.show({ severity: 'success', summary: 'Success Message', detail: 'Your information has been saved', life: 3000 });
            setOpen(false)
            setIsEditMode(false)
            clearFields()
            console.log(response)
          }
          else {
            toast.current.show({ severity: 'error', summary: 'Error Message', detail: 'data has not been saved successfully', life: 3000 });
          }
          setLoading1(false);
        }
        else {
          toast.current.show({ severity: 'warn', summary: 'Validation Message', detail: 'Please complete required fields', life: 3000 });
        }
      }
    

    return (







        <div>
            <Dialog showHeader={false} visible={open} >

                <div className=" tab-content top  tab-pane fade show active" id="pills-Register" role="tabpanel" aria-labelledby="pills-Register-tab">
                    <input type="text" className="form-control input-box" value={Username} onChange={(e) => setUserName(e.target.value)} placeholder="Username" id="validationCustom01" required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                    <br />

                    <input type="text" autoComplete='false' className="form-control input-box" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" id="validationCustom03" required />
                    <div className="invalid-feedback">
                        Please provide a valid Email.
                    </div>
                    <br />

                    <input type="Numbers" className="form-control phone-number input-box" value={Phonenumber} onChange={(e) => setPhonenumber(e.target.value)} placeholder="Enter Your Phone Number" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                    <div className="invalid-feedback">
                        Please provide a valid Phone Number.
                    </div>
                    <br />

                    <div className="flex justify-content-center ">
                <Calendar className='p-component1 calendar' placeholder='Enter Date' value={Date} onChange={(e) => setDate(e.target.value)} dateFormat="dd/mm/yy" />
              </div>
              <br />

                    <input type="Numbers" className="form-control margin" value={Donation} onChange={(e) => setDonation(e.target.value)} placeholder="How Much To Donate" id="validationCustom03" required />
                    <div className="invalid-feedback">
                        Please provide a valid Donation.
                    </div>
                    <br />

                    <h6>Address</h6>
                    <InputTextarea value={Address} onChange={(e) => setAddress(e.target.value)} rows={2} cols={54} autoResize />


                    <br />
                    <br />
                    <div className="">
                        <button type="button" loading={loading1} onClick={saveUserDonations} className="btn btn-custom btn-outline-success">
                            <b> Submit </b>
                        </button>

                        <button type="button" onClick={() => setOpen(false)} className="btn btn-custom btn-outline-success">
                            <b> Cancel </b>
                        </button>
                    </div>
                </div>
               
            </Dialog >
            <div>
                <div >
                    <div >
                        <div id="demo" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={slider4} className="d-block slider-image " />
                                </div>
                                <div className="carousel-item">
                                    <img src={slider2} className="d-block slider-image " />
                                </div>
                                <div className="carousel-item">
                                    <img src={slider3} className="d-block slider-image " />
                                </div>
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>

                        <div className="heading-text">
                            <h5 className="Text-1">WE NEED YOUR HELP TO SERVE THE PEOPLE</h5>
                            <h1 className="Text-2"> Help for victims <br /> affcted by flood </h1>
                        </div>
                    </div>

                    <div className="container-fluid background">
                        <div className="row">
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-4 section">
                                <h2 className="section-heading">Our Purpose</h2>
                                <h6 className="textp2">
                                    Our purpose is to present actual needy persons to the doners with their
                                    authentic information and their needs for easy the work of both parties.
                                    information 100% authenticated by SANGAT WELFARE Society.</h6>
                                <div className="learnMore-btn">
                                    <button type="button" onClick={() => navigate("/Ourproject")} className="btn btn-custom btn-outline-warning btn-lg">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
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
                                    <div className="card text-align background">
                                        <span className="icon">
                                            <BsFillBriefcaseFill />
                                        </span>

                                        <div className="card-body ">
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
                                    <div className="card text-align background">
                                        <span className="icon">
                                            <BsFillBarChartFill />
                                        </span>

                                        <div className="card-body ">
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
                                    <div className="card text-align background">
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
                </div>
                <div className="container-fluid background">
                    <div className="container-fluid background">
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
                                    <button type="button" onClick={() => navigate("/About")} className="btn btn-outline-warning btn-lg">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid background">
                    <div id="work-section" className="container section">
                        <div className="row">
                            <div className="col-md-12 section">
                                <h2 className="section-heading"> Donation Methods </h2>
                            </div>
                            <div className="display">
                                <div className="padding ">
                                    <div className="card Card-color style">
                                        <img className="card-img-top" src={Meezan} />
                                        <div className="card-body">
                                            <h1 className="card-title"> Meezan Bank <br /> Account</h1>
                                            <p className="card-text">A wire
                                                transmitting money to someone
                                                else bank account.Wire transfers
                                                can be done at banks,
                                                credit unions,or providers such
                                                as Western Union or Wise.</p>
                                                <div className="top-10">
                                            <button type="button" onClick={() => setOpen(true)} className="btn btn-outline-warning">
                                                <b> Donate Now </b>
                                            </button>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                                {/* .............. */}

                                <div className="padding">
                                    <div className="card Card-color style">
                                        <img className="card-img-top" src={EasyPaisa} />
                                        <div className="card-body">
                                            <h1 className="card-title"> EasyPaisa <br /> Account</h1>
                                            <p className="card-text">It is part of central bank's long-term
                                                goals to facilitate e-money.
                                                enter your registered EasyPaisa account number and
                                                amount you wish to transfer</p>
                                                <div className="top-10">
                                            <button type="button" onClick={() => setOpen(true)} className="btn btn-outline-warning">
                                                <b> Donate Now </b>
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* ................ */}

                                <div className="padding">
                                    <div className="card Card-color style">
                                        <img className="card-img-top" src={JazzCash} />
                                        <div className="card-body">
                                            <h1 className="card-title"> JazzCash <br /> Account</h1>
                                            <p className="card-text">You can transfer funds through inter-bank fund
                                                transfer option.
                                                enter your registered JazzCash account number and
                                                amount you wish to transfer.</p>
                                            <div className="top-10">
                                                <button type="button" onClick={() => setOpen(true)} className="btn  btn-outline-warning">
                                                    <b> Donate Now </b>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid background">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-logo">
                                    <img className="footer-logo-image" src={pngegg} />
                                    <h2 className="footer-logo-text"> Sangat Help center </h2>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="display">

                                    <div className="social-btn" >

                                        <span className="social-icons btn" onClick={() => window.open("https://www.facebook.com/SangatWelfareSociety?mibextid=ZbWKwL")}>
                                            <FaFacebookSquare />
                                        </span>

                                        <span className="social-icons btn" onClick={() => window.open("https://www.facebook.com/SangatWelfareSociety?mibextid=ZbWKwL")}>
                                            <BsInstagram />
                                        </span>


                                        <span className="social-icons btn" onClick={() => window.open("https://chat.whatsapp.com/K7b9tQ6bYlrKn7MszYDmDL")}>
                                            <BsWhatsapp />
                                        </span>

                                        <span className="social-icons btn" onClick={() => window.open("https://mail.google.com/mail/?tab=mm")}>
                                            <BsEnvelopeFill />
                                        </span>

                                    </div>
                                </div>
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
                                            <li><a className="our-Project" onClick={() => navigate("/Ourproject")} >Our Project</a> </li>
                                            <li><a className="About-Sangat" onClick={() => navigate("/About")} > About Us</a> </li>
                                            <li><a className="Contact-us" onClick={() => navigate("/Contact")} > Contact</a> </li>
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
            </div>
        </div >
    )
}

export default Content;