import React from 'react'
import LoginForm from './LoginForm'
import '../Styling/LoginPage.css'

export default class LoginPage extends React.Component {
    
    componentDidMount() {
        localStorage.removeItem('token')
    }
    
    
    render() {
        return(
            <div className='mainBody'>
            <div className='login'> 
                <h1 id='welcome'>Welcome to Risk Management</h1>
                <h1 id='loginTitle'>Login</h1>
                <LoginForm {...this.props} login={this.props.login} /> 
                {!this.props.isCorrectUser? <h2>Incorrect user credentials, please try again</h2> :null}
            </div>
        </div>
        )
    }
}