import React from 'react'
import '../Styling/Home.css'

export default function Home(props) {
    
   const logout = () => {
        props.history.push('/login') 
        props.clearState()
        localStorage.removeItem('token')
    }

    return(
        <body>
            <div className='centerContainer'> 
                <h2 id='welcomeName'>Welcome to Risk Management {props.user.username}!</h2>
                <h2>Time and Date: {props.timestamp}</h2>
                <h2>Path of Working Directory: {props.pathname}</h2>
                <button id='logout' onClick={logout}>Logout</button>
            </div>
        </body>
    )  
}