import React from 'react'
import {Route, Redirect} from 'react-router-dom'



export default function Home(props) {
    return <Route {...props} render = {(routerProps) => {
        return localStorage.token ? <Home user={props.user} {...routerProps} />  
        : <Redirect to='/login'/>
    }} />
}