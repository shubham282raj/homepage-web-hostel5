import React from 'react';

const LoginPopUp = () => {
    return(
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
                        <a href="#">Forgot Passoword?</a>
                    </div>
                    <div className="signInButton">
                        <button>Sign In</button>
                    </div>
                    <div className="signUp">
                        <p>Don't have an account? &nbsp;
                            <a href="#">Sign Up</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}