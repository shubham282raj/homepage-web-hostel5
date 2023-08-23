import React from "react";
import logo from './logo.png';
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";

// const boolLoginPage = false;

export const SignInPage = () => {
    const [boolLoginPage,setBoolLoginPage] = React.useState(false);

    const [boolSignUpPage, setSignUpPage] = React.useState(false);
    
    const [boolForgotPass, setForgotPass] = React.useState(false);

    const toogleLoginPage = () => {
        setBoolLoginPage(!boolLoginPage);
        setSignUpPage(false);
        setForgotPass(false);
    }

    const toogleSignUpPage = () => {
        setSignUpPage(!boolSignUpPage);
    }
    const toogleForgotPass = () => {
        setForgotPass(!boolForgotPass);
    }
    return(
        <div>
            <header>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <p style={{display: "inline"}}>Insti Ka Baap Kon? H5! H5!</p>
                </div>
                <nav className="navigation">
                    <a href="#" onClick={()=>{setBoolLoginPage(false);setSignUpPage(false)}}>Home</a>
                    <a href="https://gymkhana.iitb.ac.in/~hostel5/Tech/Tech.php">Tech</a>    
                    <a href="https://gymkhana.iitb.ac.in/~hostel5/Web/Web.php">Web</a>
                    <a href="https://gymkhana.iitb.ac.in/~hostel5/Cult/Cult.php">Cultural</a>
                    <a href="https://gymkhana.iitb.ac.in/~hostel5/Sports/Sports.php">Sports</a>
                    <a href="https://gymkhana.iitb.ac.in/~hostel5/Mess/Mess.php">Mess</a>
                    <a href="https://gymkhana.iitb.ac.in/~hostel5/Council2022/Council.php">Council</a>
                    <button className="loginBtn-popup" onClick={toogleLoginPage}>Login</button>
                </nav>
            </header>
            {boolLoginPage &&
                <div>
                    {!boolSignUpPage &&
                        <div>
                            {!boolForgotPass &&
                                <div className="loginBox" style={
                                    {width: "40vw", height: "50vh"}
                                    }>
                                    <div className="formBox">
                                        <button className="closeButton" onClick={toogleLoginPage}>
                                            X
                                        </button>
                                        <h2>Login</h2>
                                        <form action="#">
                                            <div className="input-box">
                                                <input type="email" required/>
                                                <label>Email</label>
                                            </div>
                                            <div className="input-box">
                                                <input type="password" required/>
                                                <label>Password</label>
                                            </div>
                                            <div className="remember-forget">
                                                <label>
                                                    <input type="checkbox" />
                                                    Remember Me
                                                </label>
                                                <a href="#" onClick={toogleForgotPass}>Forgot Passoword?</a>
                                            </div>
                                            <div className="signInButton">
                                                <button>Sign In</button>
                                            </div>
                                            <div className="signUp" onClick={toogleSignUpPage}>
                                                <p>Don't have an account? &nbsp;
                                                    <a href="#">Sign Up</a>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            }
                            {boolForgotPass && 
                                <div className="loginBox" style={
                            {width: "40vw", height: "50vh"}
                            }>
                            <div className="formBox">
                                <button className="closeButton" onClick={toogleLoginPage}>
                                    X
                                </button>
                                <h2>Forgot Password</h2>
                                <form action="#">
                                    <div className="input-box">
                                        <input type="email" required/>
                                        <label>Email</label>
                                    </div>
                                    
                                    <div className="sendOTP">
                                        <button>Send OTP</button>
                                    </div>
                                </form>
                                <form action="#">
                                <div className="input-box">
                                        <input type="number" required/>
                                        <label>OTP</label>
                                    </div>
                                    <div className="sendOTP">
                                        <button>Submit</button>
                                    </div>
                                    <div className="signUp">
                                        <p>Go Back to LogIn page &nbsp;
                                            <a href="#" onClick={()=>{setBoolLoginPage(true); setSignUpPage(false); setForgotPass(false);}}>Log In</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                            }
                        </div>
                    }
                    {boolSignUpPage &&
                        <div className="loginBox" style={
                            {width: "40vw", height: "70vh", top: "80px"}
                            }>
                            <div className="formBox">
                                <button className="closeButton" onClick={toogleLoginPage}>
                                    X
                                </button>
                                <h2>Sign Up</h2>
                                <form action="#">
                                    <div className="input-box">
                                        <input type="text" required/>
                                        <label>Name</label>
                                    </div>
                                    <div className="input-box">
                                        <input type="email" required/>
                                        <label>IITB LDAP Email</label>
                                    </div>
                                    <div className="input-box">
                                        <input type="number" required/>
                                        <label>Room Number</label>
                                    </div>
                                    <div className="input-box">
                                        <input type="new_password" required/>
                                        <label>Set Password</label>
                                    </div>
                                    <div className="input-box">
                                        <input type="cnf_password" required/>
                                        <label>Confirm Password</label>
                                    </div>
                                    <div className="remember-forget">
                                        <label>
                                            I agree to all terms and conditions.
                                            <input type="checkbox" />
                                        </label>
                                        <a href="#">Terms and Conditions</a>
                                    </div>
                                    <div className="signInButton">
                                        <button>Sign In</button>
                                    </div>
                                    <div className="signUp" onClick={toogleSignUpPage}>
                                        <p>Already have an account? &nbsp;
                                            <a href="#">Log In</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    }
                </div>
            }
            {!boolLoginPage &&
                <div className="about">
                    <div className="aboutContainer left">
                            <p>
                            The abode of the most passionate, the most fearless, the most intense and the most lion-hearted of all IITians. For others what might seem like just another hostel is for its inhabitants a matter of great pride and joy.
                            </p>
                            <img src={pic1} alt="" />
                    </div>    
                    <div className="aboutContainer right">
                            <img src={pic2} alt="" />
                            <p>
                            Walk around, visit our footer field which has been witness to many a close matches and PAF practice year after year, check out our well stocked canteen, read a magazine in one of the many bucket chairs in the lounge, surf the net or watch movies in the amazing compy room, sample our grub(reportedly second to none in the instii), rest awhile under our beloved poltu ped and meet some of the many multi-dimensionally talented inhabitants of this hostel.
                            </p>
                    </div> 
                    <div className="aboutContainer left">
                            <p>
                            Whether you be an alumnus remniscencing about your glorious past or a freshie who is checking out what is in store for him or even an envious 'just another' hostelite, we warmly welcome you all to Penthouse.
                            </p>
                            <img src={pic3} alt="" />
                    </div>                 
                </div>
            }
        </div>
        
    )
};