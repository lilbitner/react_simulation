import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Home from './Home'

export default function PrivateRoute(props) {

    return <Route {...props} render = {(routerProps) => {
        return localStorage.token ? <Home user={props.user} clearState={props.clearState} pathname={props.pathname} {...routerProps}  />  
        : <Redirect to='/login'/>
    }} />
}