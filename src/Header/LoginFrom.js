import React, { useState } from "react";
import "./Heder.css"; 
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ClearIcon from '@mui/icons-material/Clear';
import { Container } from "@mui/material";

function Form({ CloseBtn }) {
  const [active, setActive] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [login, setLogin] = useState(true);

  const setForm = (tabIndex) => {
    setActive(tabIndex);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setButtonDisabled(e.target.value.length <= 4);
  };

  const handleLoginPage = () => {
    setLogin(true);
  };

  const handleMyBiz = () => {
    setLogin(false);
  };

  return (
    <div className="form">
      <ClearIcon className="closeBtn" onClick={CloseBtn} />
      <div className="cursor">
        
      </div>
      <div className="personal">
        <div className="form-tabs">
          <div className={`btn ${active === 0 ? 'active' : ''}`} onClick={() => setForm(0)}>
            <p onClick={handleLoginPage}>PERSONAL Account</p>
          </div>
          <div className={`btnTwo ${active === 1 ? 'active' : ''}`} onClick={() => setForm(1)}>
            <p onClick={handleMyBiz}>BIZ Account</p>
          </div>
        </div>

        {login ? (
          <div className="number">
            <form>
              <label>Mobile Number</label>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter your mobile number"
                className="input"
              />
              <button
                disabled={buttonDisabled}
                style={{ backgroundColor: buttonDisabled ? "gray" : "blue", color: "white" }}
                className="submit-btn"
              >
                Submit
              </button>
            </form>
            <div className="login">
              <p className="login-heading"><span>Or Login/Signup With</span></p>
              <div className="Login-btn">
                <div className="login-btn-icon">
                  <img style={{ width: "20px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAMAAABuU5ChAAAA+VBMVEX////pQjU0qFNChfT6uwU0f/O4zvs6gfSJr/j6twDoOisjePPoNSXpPjDrWU/oLRr+9vZ7pff/vAAUoUAkpEn0ran619b82pT7wgD+68j947H/+e7//PafvPm/0vuBw5Df7+P63tz3xcPxl5HnJQ7qUEXxj4n4z83zoJzqSz/vgXrucWrsY1r1tbHrSBPoOjbvcSr0kx74rRH80XntZC3xhSPmGRr86+r4sk/936EJcfPS3/yowvnbwVKjsTjx9f5urEjkuBu9tC+ErkJyvoRRpj2az6hWs23j6/0emX2z2btAiuI8k8AyqkE5nZU1pGxCiOxVmtHJ5M+PSt3WAAACGElEQVRIieWSa3fSQBCGk20CJRcW2AWKxgJtqCmieNdatV5SUtFq5f//GJeE7CXJJOT4TZ+PO+c58+7MaNr/SWd60mecTDs1pMFp28dODPZnZw/369TXseXqHNfCblDdte84krTDwUFFwnMnJyXm+bSsmZ/vlcb1+6A2x5C1xYeyPgIyJlhtYDjzjOYyZA3oFighLYxni8UMY6dCG/jy9KzTQfI8DXSnTNN0kcl1lNE9dlxYC8TnnEVmAJ02qHlPllyb58vgmQ2Np0tYgzGMo2ex6IKRihi1mPhcZyYuO8McL4yYl0vrrI6mJZpx9Or1mzqa10rFt8p7o5ArXh+lXutC8d6ZBdiXvH6PeyPFsw8KMBu8fsG9+3t473l9yD1vD+/BX3v1cgqv3lzE/8A9NCUK5sn33vugeN1DQTcVTbG/9M56H+lEAzg2d54t7iW5657xCdEx5PF+B9Lj9oO9z4hBgIZX6YyaXfmZaV9QQkU781h+Hra+7jQaFv6Or8RW3r1rhErES641D9XKigox8jJaQxyAfZOpIQm6kiuT6BvfujqVuEpkkY43u+d1RBBF35v55aVJidKSEBRFiJAk/+0PM3NjgjFFMLc/WVYzlzImLBPprzvzrlBjHUmZSH8DmqatS0QSZtcjTxUBWSlZw1bckhaYlISTcm1rIqKolJJxtRWnXUVscTFsjWFFwoy7WTM2+zX69/gDaLcy7SET9nsAAAAASUVORK5CYII=" />
                </div>
                <div className="login-btn-icon">
                  <MailOutlineIcon />
                </div>
              </div>
            </div>
            <div className="login-fotter">
              <div className="fotter-Heding">
                <p className="fotter-text">By proceeding, you agree to MakeMyTrip's &nbsp;
                  <span>Privacy Policy</span>, 
                  <span>User Agreement</span>,
                  <span>T&amp</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <MyBiz/>
        )}
      </div>
    </div>
  );
}

export default Form;



export function MyBiz() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setButtonDisabled(e.target.value.length <= 4);
  };

  return (
    <>
      <div className="MyBiz">
        <div className="">
          <div className="heading" style={{margin:"10px 0"}}>
            <h1 style={{fontSize:"25px", fontWeight:"900"}}>Login/Sign up</h1>
          </div>
          <div className="flex" style={{justifyContent:"space-between", margin:"10px 0"}}>
            <p style={{fontSize:"18px", fontWeight:"500"}}>Work Email</p>
            <p style={{color:"#ff664b"}}>Forgot Login Id?</p>
          </div>

          <div className="" style={{display:"flex", gap:"10px", margin:"10px 0"}}>
            <input type="gmail" placeholder="Enter Your Work Email Id"
                value={inputValue}
                onChange={handleInputChange}
                className="input"
             style={{color:"#ff664b", backgroundColor: '#ffffff',padding: '12px',border:"1px solid #ff664b",width:'100%'}}/>
            <button  className="submit-btn-Two" disabled={buttonDisabled} style={{ backgroundColor: buttonDisabled ? "gray" : "#ff664b", color: "white" }}>CONTINUE</button>
          </div>

          <div style={{display:"flex", flexDirection:"column", gap:"10px",margin:"10px 0", alignItems:"center", justifyContent:"space-evenly"}}>
            <p>OR USE YOUR BUSINESS ACCOUNT WITH</p>
            <div className="login-btn-icon">
            <img  style={{width:"20px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA4CAMAAABuU5ChAAAA+VBMVEX////pQjU0qFNChfT6uwU0f/O4zvs6gfSJr/j6twDoOisjePPoNSXpPjDrWU/oLRr+9vZ7pff/vAAUoUAkpEn0ran619b82pT7wgD+68j947H/+e7//PafvPm/0vuBw5Df7+P63tz3xcPxl5HnJQ7qUEXxj4n4z83zoJzqSz/vgXrucWrsY1r1tbHrSBPoOjbvcSr0kx74rRH80XntZC3xhSPmGRr86+r4sk/936EJcfPS3/yowvnbwVKjsTjx9f5urEjkuBu9tC+ErkJyvoRRpj2az6hWs23j6/0emX2z2btAiuI8k8AyqkE5nZU1pGxCiOxVmtHJ5M+PSt3WAAACGElEQVRIieWSa3fSQBCGk20CJRcW2AWKxgJtqCmieNdatV5SUtFq5f//GJeE7CXJJOT4TZ+PO+c58+7MaNr/SWd60mecTDs1pMFp28dODPZnZw/369TXseXqHNfCblDdte84krTDwUFFwnMnJyXm+bSsmZ/vlcb1+6A2x5C1xYeyPgIyJlhtYDjzjOYyZA3oFighLYxni8UMY6dCG/jy9KzTQfI8DXSnTNN0kcl1lNE9dlxYC8TnnEVmAJ02qHlPllyb58vgmQ2Np0tYgzGMo2ex6IKRihi1mPhcZyYuO8McL4yYl0vrrI6mJZpx9Or1mzqa10rFt8p7o5ArXh+lXutC8d6ZBdiXvH6PeyPFsw8KMBu8fsG9+3t473l9yD1vD+/BX3v1cgqv3lzE/8A9NCUK5sn33vugeN1DQTcVTbG/9M56H+lEAzg2d54t7iW5657xCdEx5PF+B9Lj9oO9z4hBgIZX6YyaXfmZaV9QQkU781h+Hra+7jQaFv6Or8RW3r1rhErES641D9XKigox8jJaQxyAfZOpIQm6kiuT6BvfujqVuEpkkY43u+d1RBBF35v55aVJidKSEBRFiJAk/+0PM3NjgjFFMLc/WVYzlzImLBPprzvzrlBjHUmZSH8DmqatS0QSZtcjTxUBWSlZw1bckhaYlISTcm1rIqKolJJxtRWnXUVscTFsjWFFwoy7WTM2+zX69/gDaLcy7SET9nsAAAAASUVORK5CYII="/>
            </div>
            <p>By proceeding, you agree to MakeMyTrip's<span style={{color:" #ff664b"}}>T&Cs</span>and<span  style={{color: "#ff664b"}}>Privacy</span></p>
          </div>
        </div>
      </div>
    </>
  );
}




















export function Language (){
  return(
    <>
    <Container maxWidth="xl">
        <div className="z-10 w-72 p-4 rounded-md shadow-md bg-white animate-fadeInDown absolute top-17 right-40 left-auto">
          <div>
  <select className="text-lg font-bold text-black border-b border-solid border-gray-300 px-15 py-4 w-full outline-none sticky top-0 z-10 mr-72">
        <option className="Language" >English</option>
        <option lassName="text-black border-b border-solid border-gray-300 px-15 py-4 w-full outline-none sticky top-0 z-10 mr-72">UAE</option>
        <option lassName="text-black border-b border-solid border-gray-300 px-15 py-4 w-full outline-none sticky top-0 z-10 mr-72">USA</option>
</select>
          </div>

          <div className="Lenguage-Seleact z-666 text-black flex justify-between">
                <div>
                <p className="p-2 mb-8 text-xs">Seleact Language</p>

                <div className="z-999">
                <div className="">
                  <div className="pb-3">
                    <input type="radio"/>
                    <label>English</label>
                  </div>
                    <div className="pb-3">
                    <input type="radio"/>
                    <label>हिंदी</label></div>
                    <div className="pb-3">
                    <input type="radio"/>
                    <label>தமிழ்</label>
                    </div>
                    </div>
                  </div>
                </div>
                <div>
                <div>
                <div className="p-2">
                <p  className="mb-8 text-xs ">Seleact Currency</p>
                <input type="radio"/>
                    <label>INR</label></div>
                    </div>
                </div>
          </div>
        </div>
        </Container>
    </>
  )
}