// import React from 'react'
import LoginForm from './LoginForm'
import '../Styling/LoginPage.css'
import React, { useEffect } from "react";

export default function LoginPage(props){
    
    

    // componentDidMount()
    //     localStorage.removeItem('token')
    // }

    useEffect(() => {
        localStorage.removeItem('token')
    }, [])
    
    
    return(
        <div className='mainBody'>
            <div className='login'> 
                <h1 id='welcome'>Welcome to Risk Management</h1>
                <h1 id='loginTitle'>Login</h1>
                <LoginForm {...props} login={props.login} /> 
                {!props.isCorrectUser? <h2>Incorrect user credentials, please try again</h2> :null}
            </div>
        </div>
    )
}