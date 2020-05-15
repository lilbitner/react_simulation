import React from 'react'
import Login from './Login'
import '../Styling/LoginPage.css'

export default class LoginPage extends React.Component {
    render() {
        return(
            <div className='mainBody'>
            <div className='login'> 
                <h1 id='welcome'>Welcome to RiskManagement</h1>
                <h1 id='loginTitle'>Login</h1>
                <Login {...this.props} login={this.props.createUser}/> 
                {this.props.isCorrectUser? <h2>Incorrect user credentials, please try again</h2> :null}
            </div>
        </div>
        )
    }
}