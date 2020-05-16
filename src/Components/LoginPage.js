import React from 'react'
import LoginForm from './LoginForm'
import '../Styling/LoginPage.css'

export default function LoginPage(props){
    
    return(
        <div className='mainBody'>
            <div className='login'> 
                <h1 id='welcome'>Welcome to Risk Management</h1>
                <h1 id='loginTitle'>Login</h1>
                <LoginForm {...props} login={props.login} /> 
                {!props.isCorrectUser? <h2 id='error'>Incorrect user credentials, please try again</h2> :null}
            </div>
        </div>
    )
}