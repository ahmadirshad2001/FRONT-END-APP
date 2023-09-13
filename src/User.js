import React, { useEffect } from 'react';
import "./User.css";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { TabView, TabPanel } from 'primereact/tabview';
import 'bootstrap-icons/font/bootstrap-icons.css'
import pngegg from "./images/pngegg.png";
import { Routes, Link, Route } from 'react-router-dom';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import Content from './Content';
import ListOfNeedyPersons from "./Component/NeedyPersons/ListOfNeedyPersons"
import Ourproject from './Component/Ourproject';
import About from './Component/About';
import Contact from './Component/Contact';
import DonationMethods from './Component/NeedyPersons/Donatiomethods';
import { useNavigate } from "react-router-dom";
import { Calendar } from 'primereact/calendar';


function User() {

  const toast = React.useRef(null);
  const [open, setOpen] = React.useState(false)
  const [Username, setUserName] = React.useState("")
  const [Email, setEmail] = React.useState("")
  const [Phonenumber, setPhonenumber] = React.useState("")
  const [Country, setCountry] = React.useState("")
  const [City, setCity] = React.useState("")
  const [Address, setAddress] = React.useState("")
  const [Password, setPassword] = React.useState("")
  const [TotalNeeds, setTotalNeeds] = React.useState("")
  const [WhatYouWant, setWhatYouWant] = React.useState("")
  const [PaymentTab, setPaymentTab] = React.useState(0)
  const [BankAccount, setBankAccount] = React.useState("")
  const [date, setDate] = React.useState(null)
  const [EasypaisaAccount, setEasypaisaAccount] = React.useState("")
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [loading1, setLoading1] = React.useState(false);

  const [openLoginDialog, setOpenLoginDialog] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(null);
  const [openList, setOpenList] = React.useState(false);
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [idForEdit] = React.useState(null);


  const headerTemplate = () => {

    return (
      <div>
        <span className='Bank-text'> Bank Account</span>
      </div>
    )
  }


  useEffect(() => {

    var res = JSON.parse(localStorage.getItem("isLoggedIn"))
    console.log(res)
    if (res) {
      setLoggedIn(res)
    }
  }, [])

  const clearFields = () => {
    setUserName("")
    setEmail("")
    setPhonenumber("")
    setDate("")
    setCountry("")
    setCity("")
    setAddress("")
    setPassword("")
    setWhatYouWant("")
    setBankAccount("")
    setEasypaisaAccount("")
  }

  const saveNeedyUser = async () => {
    if (Username != "" && Email != "" && Password != "" && Phonenumber != "" && Country != "" && City != "" && Address != "") {
      setLoading1(true);
      let obj = {
        name: Username,
        email: Email,
        password: Password,
        phonenumber: Phonenumber,
        date: date,
        Country: Country,
        City: City,
        Address: Address,
        TotalNeeds: TotalNeeds,
        WhatYouWant: WhatYouWant,
        BankAccount: BankAccount,
        EasypaisaAccount: EasypaisaAccount,
        Type: "needy"
      }
console.log(date)
      var response = null;

      if (isEditMode) {
        response = await axios.put(`http://localhost:5000/api/users/` + idForEdit, obj);
      }
      else {
        response = await axios.post(`http://localhost:5000/api/users/`, obj);
      }

      if (response.data.isSaved) {
        toast.current.show({ severity: 'success', summary: 'Success Message', detail: 'Your information has been saved', life: 3000 });
        setOpen(false)
        setIsEditMode(false)
        clearFields()
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


  const saveDonerUser = async () => {
    if (Username != "" && Email != "" && Password != "" && Phonenumber != "" && Country != "" && City != "" && Address != "") {
      setLoading1(true);
      let obj = {
        name: Username,
        email: Email,
        password: Password,
        phonenumber: Phonenumber,
        date: date,
        Country: Country,
        City: City,
        Address: Address,
        TotalNeeds: TotalNeeds,
        WhatYouWant: WhatYouWant,
        BankAccount: BankAccount,
        EasypaisaAccount: EasypaisaAccount,
        Type: "doner"
      }
      console.log(date)
      var response = null;

      if (isEditMode) {
        response = await axios.put(`http://localhost:5000/api/users/` + idForEdit, obj);
      }
      else {
        response = await axios.post(`http://localhost:5000/api/users/`, obj);
      }

      if (response.data.isSaved) {
        toast.current.show({ severity: 'success', summary: 'Success Message', detail: 'Your information has been saved', life: 3000 });
        setOpen(false)
        setIsEditMode(false)
        clearFields()
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




  const loginUser = async () => {
    setLoading1(true);

    if (Email != "" && Password != "") {
      let obj = {
        email: Email,
        password: Password
      }

      var response = await axios.post(`http://localhost:5000/api/users/login`, obj);
      if (response.data.isAuthenticated) {

        localStorage.setItem("isLoggedIn", JSON.stringify(response.data.data[0]))
        setLoggedIn(response.data.data[0])
        toast.current.show({ severity: 'success', summary: 'Success Message', detail: 'Successfully LoggedIn', life: 3000 });
        setOpenLoginDialog(false)
      }
      else {
        toast.current.show({ severity: 'error', summary: 'Success Message', detail: 'Please enter correct email and password', life: 3000 });

      }
      setLoading1(false);

    }
  }

  const logout = () => {
    localStorage.clear()
    setLoggedIn(false)
  }

  const renderListButtons = () => {
    if (loggedIn?.Type == "doner") {
      return <div className='display'>
        <button type="button" onClick={() => setOpenList(true)} className="btn btn-custom btn-outline-success">
          <b> Needy Persons </b>
        </button>
        <button type="button" onClick={() => logout()} className="btn btn-custom btn-outline-success">
          <b> Log Out </b>
        </button>
      </div>
    }
    else if (loggedIn?.Type == "needy") {
      return <div className='display'>
        <button type="button" onClick={() => setOpenList(true)} className="btn btn-custom btn-outline-success">
          <b> Doners </b>
        </button>
        <button type="button" onClick={() => logout()} className="btn btn-custom btn-outline-success">
          <b> Log Out </b>
        </button>
      </div>
    }
    else {
      return <div className='display'>
        <button type="button" onClick={() => setOpen(true)} className="btn btn-custom btn-outline-warning">
          <b> Register </b>
        </button>
        <button type="button" onClick={() => setOpenLoginDialog(true)} className="btn btn-custom btn-outline-warning">
          <b> Log in </b>
        </button>

      </div>




    }
  }

  return (
    <div>
      <Toast ref={toast} />
      <ListOfNeedyPersons openModal={openList} closeModal={() => setOpenList(false)} loggedIn={loggedIn} />





      <Dialog onHide={() => setOpenLoginDialog(false)} visible={openLoginDialog} >
        <input type="text" className="form-control input-box" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" id="validationCustom03" required />
        <div className="invalid-feedback">
          Please provide a valid Email.
        </div>
        <br />

        <input type="Password" className="form-control margin" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" id="validationCustom03" required />
        <div className="invalid-feedback">
          Please provide a valid Password.
        </div> <br />
        <Button label="Login" className="p-button-success" loading={loading1} onClick={loginUser} />

      </Dialog>


      <Dialog showHeader={false} visible={open} >
        <TabView className="tabview " activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
          <TabPanel header="Doner">
            <div className=" tab-content  tab-pane fade show active" id="pills-Register" role="tabpanel" aria-labelledby="pills-Register-tab">

              <input type="text" className="form-control " value={Username} onChange={(e) => setUserName(e.target.value)} placeholder="Username" id="validationCustom01" required />
              <div className="valid-feedback">
                Looks good!
              </div>
              <br />

              <input type="text" autoComplete='false' className="form-control input-box" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" id="validationCustom03" required />
              <div className="invalid-feedback">
                Please provide a valid Email.
              </div>
              <br />


              <input type="Password" className="form-control margin" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" id="validationCustom03" required />
              <div className="invalid-feedback">
                Please provide a valid Password.
              </div>
              <br />

              <input type="text" className="form-control phone-number input-box" value={Phonenumber} onChange={(e) => setPhonenumber(e.target.value)} placeholder="Enter Your Phone Number" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
              <div className="invalid-feedback">
                Please provide a valid Phone Number.
              </div>
              <br />

              <div className="flex justify-content-center ">
                <Calendar className='p-component1 calendar' placeholder='Enter Date' value={Date} onChange={(e) => setDate(e.target.value)} dateFormat="dd/mm/yy" />
              </div>
              <br />

              <select className="form-select state margin " value={Country} onChange={(e) => setCountry(e.target.value)} id="inputGroupSelect02" placeholder="Enter Your State" required>
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

              <h6>Address</h6>
              <InputTextarea value={Address} onChange={(e) => setAddress(e.target.value)} rows={2} cols={54} autoResize />


              <br />
              <br />

              <button type="button" loading={loading1} onClick={saveDonerUser} className="btn btn-custom btn-outline-success">
                <b> Submit </b>
              </button>
              <button type="button" onClick={() => setOpen(false)} className="btn btn-custom btn-outline-success">
                <b> Cancel </b>
              </button>

            </div>
          </TabPanel>

          <TabPanel header="Needy Person">
            <div className="tab-content tab-pane fade show active" id="pills-needyperson" role="tabpanel" aria-labelledby="pills-needyperson-tab">

              <input type="text" className="form-control " value={Username} onChange={(e) => setUserName(e.target.value)} placeholder="Username" id="validationCustom01" required />
              <div className="valid-feedback">
                Looks good!
              </div>
              <br />

              <input type="text" className="form-control input-box" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" id="validationCustom03" required />
              <div className="invalid-feedback">
                Please provide a valid Email.
              </div>
              <br />

              <input type="Password" className="form-control margin " value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" id="validationCustom03" required />
              <div className="invalid-feedback">
                Please provide a valid Password.
              </div>
              <br />


              <input type="text" className="form-control phone-number input-box" value={Phonenumber} onChange={(e) => setPhonenumber(e.target.value)} placeholder="Enter Your Phone Number" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
              <div className="invalid-feedback">
                Please provide a valid Phone Number.
              </div>
              <br />

              <div className="flex justify-content-center ">
                <Calendar className='p-component1 calendar' placeholder='Enter Date' value={Date} onChange={(e) => setDate(e.target.value)} dateFormat="dd/mm/yy" />
              </div>
              <br />

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
              <input type="number" className="form-control " id="validationCustom02" value={TotalNeeds} onChange={(e) => setTotalNeeds(e.target.value)} placeholder="Total needs" required />
              <br />
              <h6>Address</h6>
              <InputTextarea value={Address} onChange={(e) => setAddress(e.target.value)} rows={1} cols={59} autoResize />
              <br />
              <br />
              <h6>More Details</h6>
              <InputTextarea value={WhatYouWant} onChange={(e) => setWhatYouWant(e.target.value)} rows={1} cols={59} autoResize />



              <br />
              <br />
              <TabView className="tabview " activeIndex={PaymentTab} onTabChange={(e) => setPaymentTab(e.index)}>

                <TabPanel header={headerTemplate()}>

                  <h6>Enter Your Bank Account</h6>
                  <InputTextarea value={BankAccount} onChange={(e) => setBankAccount(e.target.value)} rows={1} cols={54} autoResize />
                </TabPanel>


                <TabPanel header="Easypaisa Account">
                  <h6>Enter Your Easypaisa Account</h6>
                  <InputTextarea value={EasypaisaAccount} onChange={(e) => setEasypaisaAccount(e.target.value)} rows={1} cols={54} autoResize />
                </TabPanel>
              </TabView>

            </div>

            <button type="button" loading={loading1} onClick={saveNeedyUser} className="btn btn-custom btn-outline-success">
              <b> Submit </b>
            </button>
            <button type="button" onClick={() => setOpen(false)} className="btn btn-custom btn-outline-success">
              <b> Cancel </b>
            </button>


          </TabPanel>
        </TabView>
      </Dialog>

      <div className="container-fluid background">
        <div className="container-fluid background">
          <div className="row">
            <div className="col-md-5">
              <img className="logo-image" src={pngegg} alt="logo" />
              <h4 className="logo-text">Sangat Welfare Society</h4>
            </div>
            <div className="col-md-7">
              <ul className="Menus">
                <Link className='Home' to='/' > Home </Link>
                <Link className='our-project' to='/Ourproject' > Our Project </Link>
                <Link className='About' to='/About' > About Us </Link>
                <Link className='Contact' to='/Contact' > Contact </Link>

              </ul>
              <div>
              </div>
              {renderListButtons()}


            </div>

          </div>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/Ourproject' element={<Ourproject />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>



  );
}

export default User;
