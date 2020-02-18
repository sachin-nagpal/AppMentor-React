import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'; 
import SignupLoginPage from './pages/SignupLoginPage';
import PrivateRoutes from './components/PrivateRoutes';
import SingleQuestionPage from './pages/SingleQuestionPage';
import QA from './pages/QA';
import Questions from './pages/Questions';
import { CookiesProvider } from 'react-cookie';
import axios from 'axios';
import './styles/body.css';

import Navbar from './components/Navbar';

//Context
import UserLoginStateContextProvider from './context/UserLoginState';
import { AuthContext } from "./context/auth";

//Pages
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import LoginForm from './components/LoginForm';

function App(props) {

  const [userName, setUserName] = useState(localStorage.getItem('userName') ? localStorage.getItem('userName') : null);
  const [authTokens, setAuthTokens] = useState(localStorage.getItem('userId') ? localStorage.getItem('userId') : null);
  
  useEffect(() => {
    // (()=>{async () => {
    //   await axios.get(`https://randomuser.me/api/`)
    //    .then(res => {
    //       const user = res.data.results;
    //       this.setState(user[0]);
    //   })
    // })

      // axios.get(`https://randomuser.me/api/`)
      //   .then(res => {
      //     const user = res.data.results;
      //     setUser(user[0]);
      //   })
  },[])

   const setTokens = (data) => {
     localStorage.setItem("userId", data);
     setAuthTokens(data);
   }
   const setUserNameContext = (name)=>{
    localStorage.setItem("userName", name);
    setUserName(name);
   }
   
      return (
          <>
        <UserLoginStateContextProvider>
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens,setUserName: setUserNameContext,userName}}>
          <Navbar />
            <Route>
                <Switch>
                  <Route exact path='/' render={(routeProps) => <Home {...routeProps}/>}/>
                    {/* <Route exact path='/profile' render={(routeProps)=><Profile {...routeProps} user={this.state.user}/>}/> */}
                    <Route exact path='/allquestions' render={(routeProps)=><Questions {...routeProps} />}/>
                    <Route exact path='/allquestions/:tag' render={(routeProps)=><Questions {...routeProps} />}/>
                    <Route exact path='/singlequestion/:slug' render={(routeProps)=><QA {...routeProps} />}/>
                    <Route exact path='/signup-login' render={(routeProps)=><SignupLoginPage {...routeProps} />}/>
                    <PrivateRoutes path='/profile' component={Profile}/>/>
                    <Route path='*' exact={true} component={NotFound} />
                  </Switch>
            </Route>
          </AuthContext.Provider>
          </UserLoginStateContextProvider> 
         
          </>
        );
}

export default App;
