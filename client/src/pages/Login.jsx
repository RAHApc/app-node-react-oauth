import React from 'react';
import GoogleIcon from './../img/google.png'
import GithubIcon from './../img/github.png'
import FacebookIcon from './../img/facebook.png'

export default function Login() {
    const google = () => {
        window.open("http://localhost:5000/auth/google","_self")
    }

    const github = () => {
        window.open("http://localhost:5000/auth/github","_self")
    }

    const facebook = () => {
        window.open("http://localhost:5000/auth/facebook","_self")
    }

    return (
        <div className='login'>
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={GoogleIcon} alt="GoogleIcon" className="icon" />
                        Google
                    </div>
                    <div className="loginButton facebook" onClick={facebook}>
                        <img src={FacebookIcon} alt="FacebookIcon" className="icon" />
                        FaceBook
                    </div>
                    <div className="loginButton github" onClick={github}>
                        <img src={GithubIcon} alt="GithubIcon" className="icon" />
                        GitHub
                    </div>
                </div>
                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" name="" placeholder='Username' id="" />
                    <input type="text" name="" placeholder='Password' id="" />
                    <button className='submit'>Login</button>
                </div>
            </div>
        </div>
    )
}
