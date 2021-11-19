import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-">
              <div className="container" style={{ marginLeft:"550px"}}>
                  <a href="https://cutm.ac.in/" className="navbar-brand" style={{ fontSize:"25px", fontFamily:"Lucida Handwriting"}}>Employee Leave Application</a>
              </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
