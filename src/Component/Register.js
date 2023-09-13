import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { First } from "react-bootstrap/esm/PageItem";
import { render } from "react-dom";
import { Dialog } from 'primereact/dialog';
import "./Register.css";
import { Tabs, Tab, AppBar } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/tab";
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { TabView, TabPanel } from 'primereact/tabview';

const Register = () => {
  const [Username, setUserName] = useState("")
  const [Email, setEmail] = useState("")
  const [Phonenumber, setPhonenumber] = useState("")
  const [Country, setCountry] = useState("")
  const [City, setCity] = useState("")
  const [Address, setAddress] = useState("")
  const [Password, setPassword] = useState("")
  const [TotalNeeds, setTotalNeeds] = useState("")
  const [WhatYouWant, setWhatYouWant] = useState("")
  const [PaymentDetails, setPaymentDetails] = useState("")
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const onLoadingClick1 = () => {
    setLoading1(true);

    setTimeout(() => {
      setLoading1(false);
    }, 2000);
  }



  return (
    <div className="container-fluid">

      <div className="card-1">
        <TabView className="tabview " activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
          <TabPanel header="Doner">

            <div className=" tab-content  tab-pane fade show active" id="pills-Register" role="tabpanel" aria-labelledby="pills-Register-tab">
              <form className="form-items" onClick="Register">
                <h1 className="Heading"> <b> Doner </b>  </h1>

                <input type="text" className="form-control " value={Username} onChange={(e) => setUserName(e.target.value)} placeholder="Username" id="validationCustom01" required />
                <div className="valid-feedback">
                  Looks good!
                </div>
                <br />


                <div className="row contact-details">

                  <input type="text" className="form-control input-box" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" id="validationCustom03" required />
                  <div className="invalid-feedback">
                    Please provide a valid Email.
                  </div>
                  <br />

                  <input type="text" className="form-control phone-number input-box" value={Phonenumber} onChange={(e) => setPhonenumber(e.target.value)} placeholder="Enter Your Phone Number" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                  <div className="invalid-feedback">
                    Please provide a valid Phone Number.
                  </div>
                  <br />
                </div>

                <select className="form-select state margin " value={Country} onChange={(e) => setCountry(e.target.value)} id="inputGroupSelect02" placeholder="Enter Your State" required>
                  <option selected>Choose Your State</option>
                  <option value="Pakistan"> Pakistan </option>
                  <option value="Bangladesh"> Bangladesh </option>
                  <option value="Sirilanka"> Sirilanka </option>
                  <option value="Pakistan">India </option>
                  <option value="Bangladesh"> Afghanistan </option>
                  <option value="Sirilanka"> New zeland</option>
                  <option value="Sirilanka">England</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
                <br />



                <input type="text" className="form-control " id="validationCustom02" value={City} onChange={(e) => setCity(e.target.value)} placeholder="Enter Your City" required />
                <div className="valid-feedback">
                  Looks good!
                </div>
                <br />

                <h6>Address</h6>
                <InputTextarea value={Address} onChange={(e) => setAddress(e.target.value)} rows={2} cols={54} autoResize />

                <input type="Password" className="form-control margin" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" id="validationCustom03" required />
                <div className="invalid-feedback">
                  Please provide a valid Password.
                </div>
                <br />

                <div className="form-check check-box">
                  <input className="form-check-input " type="checkbox" value="" id="invalidCheck" required />
                  <label className="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>


                <Button label="Register" className="p-button-warning" loading={loading1} onClick={onLoadingClick1} />

              </form>
            </div>
          </TabPanel>

          <TabPanel header="Needy Person">
            <div className="tab-content tab-pane fade show active" id="pills-needyperson" role="tabpanel" aria-labelledby="pills-needyperson-tab">
              <form className="form-items" onClick="Register">
                <h1 className="Heading"> <b> Needy Person </b>  </h1>

                <input type="text" className="form-control " value={Username} onChange={(e) => setUserName(e.target.value)} placeholder="Username" id="validationCustom01" required />
                <div className="valid-feedback">
                  Looks good!
                </div>
                <br />


                <div className="row contact-details">

                  <input type="text" className="form-control input-box" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" id="validationCustom03" required />
                  <div className="invalid-feedback">
                    Please provide a valid Email.
                  </div>
                  <br />

                  <input type="text" className="form-control phone-number input-box" value={Phonenumber} onChange={(e) => setPhonenumber(e.target.value)} placeholder="Enter Your Phone Number" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                  <div className="invalid-feedback">
                    Please provide a valid Phone Number.
                  </div>
                  <br />
                </div>

                <select className="form-select state " value={Country} onChange={(e) => setCountry(e.target.value)} id="inputGroupSelect02" placeholder="Enter Your State" required>
                  <option selected>Select Your Country</option>
                  <option value="Pakistan"> Pakistan </option>
                  <option value="Bangladesh"> Bangladesh </option>
                  <option value="Sirilanka"> Sirilanka </option>
                  <option value="Pakistan">India </option>
                  <option value="Bangladesh"> Afghanistan </option>
                  <option value="Sirilanka"> New zeland</option>
                  <option value="Sirilanka">England</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
                <br />



                <input type="text" className="form-control " id="validationCustom02" value={City} onChange={(e) => setCity(e.target.value)} placeholder="Enter Your City" required />
                <div className="valid-feedback">
                  Looks good!
                </div>
                <br />

                <h6>Total Needs</h6>
                <InputTextarea value={TotalNeeds} onChange={(e) => setTotalNeeds(e.target.value)} rows={1} cols={54} autoResize />

                <h6>Address</h6>
                <InputTextarea value={Address} onChange={(e) => setAddress(e.target.value)} rows={1} cols={54} autoResize />

                <h6>What You Wants</h6>
                <InputTextarea value={WhatYouWant} onChange={(e) => setWhatYouWant(e.target.value)} rows={1} cols={54} autoResize />


                <input id="file-input" className="fileInput margin form-control" type="file" accept=".png,.jpg,.jpeg,.gif,.jfif,.svg,.pjp,.pjpeg" />
                <div className="invalid-feedback">
                  Please provide a valid Image.
                </div>
                <br />

                <h6>Payment Details</h6>
                <InputTextarea value={PaymentDetails} onChange={(e) => setPaymentDetails(e.target.value)} rows={1} cols={54} autoResize />

                <input type="Password" className="form-control margin " value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" id="validationCustom03" required />
                <div className="invalid-feedback">
                  Please provide a valid Password.
                </div>
                <br />

                <div className="form-check check-box">
                  <input className="form-check-input " type="checkbox" value="" id="invalidCheck" required />
                  <label className="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>


                <Button label="Register" className="p-button-warning" loading={loading1} onClick={onLoadingClick1} />


              </form>
            </div>

          </TabPanel>
        </TabView>

      </div>
    </div>

  )
}

export default Register;