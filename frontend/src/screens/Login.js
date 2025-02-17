import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Signup from './Signup';
import { Button } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import LoginButton from '../components/LoginButton.js';
import LogoutButton from '../components/LogoutButton.js';
import { getUsername, getPassword } from './Signup';
import { User, Lock } from '@phosphor-icons/react';

import '../index.css';
import logo from '../images/logo.png'

let currUsername = '';
let currPassword = '';

export const setUsernameFunc = (user) => {
    currUsername = user;
}
export const setPasswordFunc = (pass) => {
    currPassword = pass;
}

export const getInputUsername = () => currUsername;
export const getInputPassword = () => currPassword;

function Login() {

    const navigate = useNavigate();

    // const [signupClick, setSignupClick] = useState();
    // const [loginClick, setLoginClick] = useState();

    

    const savedUsername = getUsername();
    const savedPassword = getPassword();

    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');



    const [error, setError] = useState(false);
    

    const handleClickLogin = (e) => {
        if ((savedUsername === inputUsername) && (savedPassword === inputPassword)) {
            navigate('/tutorial');
        }
        else {
            setError(true);
        }
    }

    const handleClickUsername = (e) => {
        setInputUsername(e.target.value);
        setUsernameFunc(e.target.value)
    }
    const handleClickPassword = (e) => {
        setInputPassword(e.target.value);
        setPasswordFunc(e.target.value);
    }

    const handleClickSignup = (e) => {
        setInputUsername('');
        setUsernameFunc('');
        setInputPassword('');
        setPasswordFunc('');
        navigate('/');
    }



    return (
        <>
        {/* <p> Login </p> */}
        {/* <p> {savedUsername} </p> */}
        {/* <p> {savedPassword} </p> */}
        <img className='corner-logo' src={logo} alt=''></img>
        <div className='bg1'> </div>
        <div className='white-container'>
            <div className='title'>
                <p>login</p>
            </div>
        {/* <div className='container'> */}
            <div className='inputs'>
                
                <div className='input'>
                <HStack>
                <User className='icon'/>                    
                <input className='text' type='username' placeholder='username' onChange={handleClickUsername}/>
                </HStack>
                </div>
                <hr className='underline'/>

                
                <div className='input'>
                    <HStack>
                        <Lock className='icon'/> 
                        <input className='text' type='password' placeholder='password' onChange={handleClickPassword}/>
                    </HStack>
                </div>
                <hr className='underline'/>
            {/* </div> */}
        </div>
        
        
        <button className='button-div' onClick={handleClickLogin}> Log In </button>
        {error ? <p className='other-button' style={{color: 'red'}}> Incorrect Username or Password</p> : <p></p> }

        <HStack>
            <p className='other-button' style={{color:'#9B9797'}}>
                Don't have an account?
            </p>
            <button className='other-button' style={{color:'#0DB1DF'}} onClick={handleClickSignup}> Sign Up</button>
        </HStack>
        </div>
        
        </>
        
    );
}

export default Login;
