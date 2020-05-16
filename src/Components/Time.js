import React from 'react'


export default class Time extends React.Component {
    
    

   
    
    render() {
        return(
            <div className='timeContainer'> 
                <h2>Current Time: {this.state.datetime.toLocaleTimeString()}</h2>
                <h2>Current Date: {this.state.datetime.toLocaleDateString()}</h2>
            </div>
        )
    }
}