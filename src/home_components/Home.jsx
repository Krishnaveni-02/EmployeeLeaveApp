import React from 'react'
import web from "../images/leave.svg";
import { NavLink } from 'react-router-dom';


const Home = () => {
    return(
        <>
        <section id="header" className="d-flex align-items-center">
         <div className="container-fluid nav_bg">
             <div className="row">
                 <div className="col-10 mx-auto">
                     <div  className="row">
                     <div className="col-md-6 my-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                      <h1>Welcome to cutm <strong className="brand-name">ELMS</strong></h1>
                      <h2 className="my-4">
                      It is very refreshing to go away and take a break, to clear your head, and just get into
                            something else...
                      </h2>
                      <h2 className="">
                      "Work harder on yourself than you do on your job"
                      </h2>
                     </div>
                     <div className = "mt-3">
                      <NavLink to = "/about" className="btn-get-started">
                          Get Started</NavLink>
                     </div>
                     <div className="col-lg-6 order-1 order-lg-2 header-img">
                      <img src = {web} className = "img-fluid animated" alt="home img"/>
                     </div>
                     
                     

                
                 </div>
                 </div>
                
             
            </div>
            
         </div>
        </section>
        </>
    )
}
export default Home;