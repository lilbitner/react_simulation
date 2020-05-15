import React from 'react'
import '../Styling/LoginPage.css'



export default class Login extends React.Component {
    
    state = {
        username: '',
        password: ''
    }


    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        if(this.props.closeForm){ 
        this.props.closeForm(false)}
        this.props.login(this.state)
    }

    handleChange = (event) => {
        const {name, value} = event.target 
        this.setState({
            [name]: value
        })
    }
    
   
    
    render() {
        return(
            <form onSubmit={this.handleSubmit} className='inputContainer'> 
                <input type='text' className='usernameInput' name='username'
                    value={this.state.username} ref='fieldUser' onChange={this.handleChange} 
                    placeholder='Username' 
                />
                <input type='text' className='passwordInput' type='password' name='password' 
                    value={this.state.password} ref='fieldPassword' onChange={this.handleChange} 
                    placeholder='Password'
                />
                <input className='Submit' type='submit'/>

            </form>
            
        )
    }
}