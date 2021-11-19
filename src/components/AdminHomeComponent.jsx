import React, { Component } from "react";

export default class AdminHomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.addEmployee = this.addEmployee.bind(this);

    this.viewEmployees = this.viewEmployees.bind(this);
  }

  addEmployee() {
    this.props.history.push("/add-employee/_add");
  }

  viewEmployees() {
    this.props.history.push("/getAllEmps");
  }

  render() {
    return (
      <div>
        <center>
          <h1>Hello Admin!!</h1>
          <br />

          <div>
            <button className="btn btn-primary" onClick={this.addEmployee}>
              Add Employee
            </button>
          </div>

          <br />
          <br />
          
          <div>
            <button className="btn btn-primary" onClick={this.viewEmployees}>
              View Employees
            </button>
          </div>
        </center>
      </div>
    );
  }
}
