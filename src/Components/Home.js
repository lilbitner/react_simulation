import React from 'react'
import {Route, Link, Redirect, NavLink} from 'react-router-dom'
import Datetime from 'react-datetime'
import '../Styling/Home.css'




export default class Home extends React.Component{
    
    state = {
        datetime: new Date()
    }

    interval = () => {
        setInterval(() => {
            this.setState({datetime: new Date()}) 
        }, 1000)
    }

   

    // logout = () => {
    //         localStorage.removeItem('token')
    //         this.props.history.push('/login')
    // }
    
    
    render() {
        return(
            <div className='centerContainer'> 
                <h2 id='welcomeName'>Welcome to RiskManagement {this.props.user.username}!</h2>
                <h3></h3>
                <h2>Current Time: {this.state.datetime.toLocaleTimeString()}</h2>
                <h2>Current Date: {this.state.datetime.toLocaleDateString()}</h2>
                <h2>Path of Working Directory: {this.props.pathname}</h2>
                {this.interval()}
                <NavLink id ='logout' to='/login'>Logout</NavLink>
            </div>
        )
    }
    
}