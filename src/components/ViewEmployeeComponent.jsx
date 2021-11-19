import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Employee Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Employee Full Name: {this.state.employee.fullName} </label>
              <div> </div>
            </div>
            <div className="row">
              <label> Employee Father Name: {this.state.employee.fatherName} </label>
              <div> </div>
            </div>
            <div className="row">
              <label> Employee Email ID: {this.state.employee.email} </label>
              <div> </div>
            </div>
            <div className="row">
              <label> Employee Password: {this.state.employee.password} </label>
              <div> </div>
            </div>
            <div className="row">
              <label> Employee Age: {this.state.employee.age} </label>
              <div> </div>
            </div>
            <div className="row">
              <label> Employee Campus: {this.state.employee.campus} </label>
              <div> </div>
            </div>
            <div className="row">
              <label> Employee Department: {this.state.employee.department} </label>
              <div> </div>
            </div>
            <div className="row">
              <label> Employee Branch: {this.state.employee.branch} </label>
              <div> </div>
            </div>
            <div className="row">
              <label> Employee Mobile No: {this.state.employee.mobileNo} </label>
            </div>
            <div className="row">
              <label> Employee Role: {this.state.employee.role} </label>
            </div>
            <div className="row">
              <label> Employee Address: {this.state.employee.address} </label>
              <br /><br /><br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeComponent;
