import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import "./Login.css";
function Login() {
    const signin = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    return (
        <div className='login'>
            <div className='login_logo'>
                <img
                    src='https://www.wotangames.co.uk/wp-content/uploads/2020/08/Discord-LogoWordmark-Color.png'
                    alt='Not found'
                />
            </div>
            <Button onClick={signin}>Sign In</Button>
        </div>
    );
}

export default Login;
