import React from 'react';
import { Route, Switch,withRouter  } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Questions from './Questions';
import Blog from './Blog';
import NotFound from './NotFound';
import AdminPanel from './AdminPanel';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/body.css';

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/> 

function Routes() {
    return (
        <>
            <Navbar/>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/about'>
                <About/>
            </Route>
            <Route exact path='/questions'>
                <Questions/>
            </Route>
            <Route exact path='/admin/panel'>
                <AdminPanel/>
            </Route>
            < Route exact path = '/Blog' >
                <Blog/>
            </Route>
        {/* <Route exact path='/about' component={About}/>
        <Route exact path='/questions' component={Questions}/>
        <Route exact path='/blog' component={Blog}/>
        <Route exact path='/AdminPanel' component={AdminPanel}/> */}
        {/* <Route exact path="/food/:name" render={(routeProps)=><Food {...routeProps}/>} />
        <Route exact path="/food/:foodName/drink/:drinkName" render={(routeProps)=><Meal {...routeProps}/>} /> */}
                <Route component={NotFound}/>
        </Switch>
       <Footer/> 
    </>
    );

}
export default Routes;