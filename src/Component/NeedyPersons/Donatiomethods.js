import React from "react";
import { InputTextarea } from 'primereact/inputtextarea';

function DonationMethods() {

    const [Username, setUserName] = React.useState("")
    const [Email, setEmail] = React.useState("")
    const [Phonenumber, setPhonenumber] = React.useState("")
    const [Country, setCountry] = React.useState("")
    const [City, setCity] = React.useState("")
    const [Address, setAddress] = React.useState("")
    const [Password, setPassword] = React.useState("")


    return (
        <div className="center">
            <div className=" tab-content  tab-pane fade show active" id="pills-Register" role="tabpanel" aria-labelledby="pills-Register-tab">

                <input type="text" className="Donation-form " value={Username} onChange={(e) => setUserName(e.target.value)} placeholder="Username" id="validationCustom01" required />
                <div className="valid-feedback">
                    Looks good!
                </div>
                <br />

                <input type="text" autoComplete='false' className="Donation-form input-box" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" id="validationCustom03" required />
                <div className="invalid-feedback">
                    Please provide a valid Email.
                </div>
                <br />


                <input type="Password" className="Donation-form margin" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" id="validationCustom03" required />
                <div className="invalid-feedback">
                    Please provide a valid Password.
                </div>
                <br />

                <input type="text" className="Donation-form phone-number input-box" value={Phonenumber} onChange={(e) => setPhonenumber(e.target.value)} placeholder="Enter Your Phone Number" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                <div className="invalid-feedback">
                    Please provide a valid Phone Number.
                </div>
                <br />

                <input type="text" className="Donation-form " id="validationCustom02" value={City} onChange={(e) => setCity(e.target.value)} placeholder="Enter Your City" required />
                <div className="valid-feedback">
                    Looks good!
                </div>
                <br />

                <h6>Address</h6>
                <InputTextarea className="Donation-form" value={Address} onChange={(e) => setAddress(e.target.value)} rows={2} cols={54} autoResize />


                <br />
                <br />

                <button type="button" className="btn btn-custom btn-outline-success">
                    <b> Submit </b>
                </button>
                <button type="button" className="btn btn-custom btn-outline-success">
                    <b> Cancel </b>
                </button>

            </div>


            {/* <div className="display">
                    <div className="padding ">
                        <div className="card Card-color style">
                            <img className="card-img-top" src={Meezan} />
                            <div className="card-body">
                                <h1 className="card-title"> Meezan Bank <br/> Account</h1>
                                <p className="card-text">A wire
                                    transmitting money to someone
                                    else bank account.Wire transfers
                                    can be done at banks,
                                    credit unions,or providers such
                                    as Western Union or Wise.</p>
                                  
                                    <a href="" className="browse-btn mt-20">Donate Now</a>
                            </div>
                        </div>
                    </div>
                    {/* .............. */}

            {/* <div className="padding">
                        <div className="card Card-color style">
                            <img className="card-img-top" src={EasyPaisa} />
                            <div className="card-body">
                                <h1 className="card-title"> EasyPaisa <br/> Account</h1>
                                <p className="card-text">It is part of central bank's long-term
                                    goals to facilitate e-money.
                                    Daily
                                    transfer limit for Easypaisa mobile accountholders
                                    from the current Rs15,000 to Rs50,000.</p>
                                    <a href="#" className="browse-btn mt-20">Donate Now</a>
                            </div>
                        </div>
                    </div> */}

            {/* ................ */}
            {/* 
                    <div className="padding">
                        <div className="card Card-color style">
                            <img className="card-img-top" src={JazzCash} />
                            <div className="card-body">
                                <h1 className="card-title"> JazzCash <br/> Account</h1>
                                <p className="card-text">You can transfer funds through inter-bank fund
                                 transfer option.  
                                 enter your registered JazzCash mobile number as your
                                  account number and enter the amount you wish to transfer.</p>
                                  <a href="BankAccount" className="browse-btn mt-20">Donate Now</a>
                            </div>
                        </div>
                    </div> */}


            {/* ................. */}

            {/*<div className="padding">
                         <div className="card Card-color style">
                            <img className="card-img-top" src={OtherWay} />
                            <div className="card-body">
                                <h1 className="card-title"> Other Ways for Donation</h1>
                                <p className="card-text">You can Donation the funds 
                                through the cash and bank account check option. You can contact the our mobile number and 
                                 other social media accounts.
                           
                                 
                                  </p>
                                  <a href="#" className="browse-btn mt-20">Donate Now</a>
                            </div>
                        </div>
                    </div>

                </div> 
*/}
        </div>

    );
};


export default DonationMethods;