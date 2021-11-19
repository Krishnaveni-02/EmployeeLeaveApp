import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import Navbar from './home_components/Navbar';
import Home from './home_components/Home';
import About from './home_components/About';
import Contact from './home_components/Contact';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Footer from './home_components/Footer';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import AdminHomeComponent from './components/AdminHomeComponent';
import AdminLogin from './home_components/AdminLogin';

function App() {
  return (
    <div>
        <Router>
          <HeaderComponent />
              <Navbar />
                <div className="container">
                    <Switch>
                          <Route path="/" exact component={Home}></Route>
                          <Route path="/home" component={Home}></Route> 
                          <Route path="/about" component={About}></Route>
                          <Route path="/contact" component={Contact}></Route>
                          <Route path = "/adminHomeComponent" exact component = {AdminHomeComponent}></Route>
                          <Route path = "/list-employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/adminLogin" component = {AdminLogin}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <Footer/>
        </Router>
    </div>
    
  );
}

export default App;