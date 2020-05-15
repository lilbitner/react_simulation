import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage'
import PrivateRoute from './Components/PrivateRoute'
import {Switch, Route} from 'react-router-dom'

export default class App extends React.Component {

  state = {
    user: [],
    isLoggedIn: false,
    isCorrectUser: true,
    isIncorrectPassword: false,
  }
  
  componentDidMount() {
    console.log('mount')
    if(localStorage.token){
      fetch(`https://recipe-collector-capstone.herokuapp.com/users/authenticate`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
      })
      .then(response => response.json())
      .then(result => this.setState({user: result.user}))
    }
  }

  login = (user) => {
    fetch("https://recipe-collector-capstone.herokuapp.com/users/login", {
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
       localStorage.setItem('user_id', response.foundUser.id)
       this.componentDidMount()
       this.setState({isLoggedIn: true, user: response.foundUser})}
      })
   }


  render() {
    return (
      <div className="App">
        <Switch> 
            <PrivateRoute exact user={this.state.user} path='/' />
            <Route path='/login' render={(props) => <LoginPage {...props} 
               isLoggedIn={this.state.isLoggedIn} isCorrectUser={this.state.isCorrectUser} 
               login={this.login} 
              />}
            /> 
        <LoginPage/>
        </Switch>
      </div>
    );
  }
}


