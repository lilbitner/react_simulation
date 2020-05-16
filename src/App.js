import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage'
import PrivateRoute from './Components/PrivateRoute'
import {Switch, Route, Redirect} from 'react-router-dom'

export default class App extends React.Component {

  state = {
    user: [],
    isLoggedIn: false,
    isCorrectUser: true,
    isIncorrectPassword: false,
    pathname: [],
  }
  
  componentDidMount() {
    if(localStorage.token){
      fetch('http://localhost:5000/users/authenticate', {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
      })
      .then(response => response.json())
      .then(result => this.setState({user: result.user}))
    }
    if(localStorage.token){
      fetch('http://localhost:5000/users/pathname', {
      method: "GET",
      headers: {
        'Content-Type': "application/json"
      }
      })
      .then(response => response.json())
      .then(result => this.setState({pathname: result.pathname}))
    }
    
  }

  login = (user) => {
    return fetch("http://localhost:5000/users/login", {
       method: 'POST',
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify({username: user.username, password: user.password})
     })
     .then(response => response.json())
     .then(response => {
       if(response.status == 401)
       { this.setState({isCorrectUser: false}) }
      else {
       localStorage.setItem('token', response.token)
       this.componentDidMount()
       this.setState({isLoggedIn: true, user: response.foundUser})}
      })
   }

  


  render() {
    return (
      <div className="App">
        <Switch> 
            <PrivateRoute exact user={this.state.user} path='/'  pathname={this.state.pathname} />
            <Route path='/login' render={(props) => <LoginPage {...props} 
               isLoggedIn={this.state.isLoggedIn} isCorrectUser={this.state.isCorrectUser} 
               login={this.login} 
              />}
            /> 
            <Route render={() => <Redirect to='/login'/>}/>
        </Switch>
      </div>
    );
  }
}


