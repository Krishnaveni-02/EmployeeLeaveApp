import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      fullName: "",
      fatherName: "",
      age: "",
      email: "",
      password: "",
      campus: "",
      department: "",
      branch: "",
      role: "",
      mobileNo: "",
      address: "",
    };

    this.state = { value: "Select one" };
    this.handleChange = this.handleChange.bind(this);

    this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
    this.changeFatherNameHandler = this.changeFatherNameHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeCampusHandler = this.changeCampusHandler.bind(this);
    this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
    this.changeBranchHandler = this.changeBranchHandler.bind(this);
    this.changeRoleHandler = this.changeRoleHandler.bind(this);
    this.changeMobileNoHandler = this.changeMobileNoHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      EmployeeService.getEmployeeById(this.state.id).then((res) => {
        let employee = res.data;
        this.setState({
          fullName: employee.fullName,
          fatherName: employee.fatherName,
          age: employee.age,
          email: employee.email,
          password: employee.password,
          campus: employee.campus,
          department: employee.department,
          branch: employee.branch,
          role: employee.role,
          mobileNo: employee.mobileNo,
          address: employee.address
        });
      });
    }
  }
  saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employee = {
        fullName: this.state.fullName,
        fatherName: this.state.fatherName,
        age: this.state.age,
        email: this.state.email,
        password: this.state.password,
        campus: this.state.campus,
        department: this.state.department,
        branch: this.state.branch,
        role: this.state.role,
        mobileNo: this.state.mobileNo,
        address: this.state.address
    };
    console.log("employee => " + JSON.stringify(employee));


    // step 5
    if (this.state.id === "_add") {
      EmployeeService.createEmployee(employee).then((res) => {
        this.props.history.push("/employees");
        alert("Employee has been added successfully");
      });
    } else {
      EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
        this.props.history.push("/employees");
        alert("Employee has been updated successfully");
      });
    }
  };

  changeFullNameHandler = (event) => {
    this.setState({ fullName: event.target.value });
  };

  changeFatherNameHandler = (event) => {
    this.setState({ fatherName: event.target.value });
  };

  changeAgeHandler = (event) => {
    this.setState({ age: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeCampusHandler = (event) => {
    this.setState({ campus: event.target.value });
  };

  changeDepartmentHandler = (event) => {
    this.setState({ department: event.target.value });
  };

  changeBranchHandler = (event) => {
    this.setState({ branch: event.target.value });
  };

  changeRoleHandler = (event) => {
    this.setState({ role: event.target.value });
  };

  changeMobileNoHandler = (event) => {
    this.setState({ mobileNo: event.target.value });
  };

  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };

  cancel() {
    this.props.history.push("/employees");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Employee</h3>;
    } else {
      return <h3 className="text-center">Update Employee</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Full Name: </label>
                    <input
                      placeholder="FullName"
                      name="fullName"
                      className="form-control"
                      value={this.state.fullName}
                      onChange={this.changeFullNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Father Name: </label>
                    <input
                      placeholder="Father Name"
                      name="fatherName"
                      className="form-control"
                      value={this.state.fatherName}
                      onChange={this.changeFatherNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Email Id: </label>
                    <input
                      placeholder="Email Address"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Password: </label>
                    <input
                      placeholder="password"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Age: </label>
                    <input
                      placeholder="Age"
                      name="age"
                      className="form-control"
                      value={this.state.age}
                      onChange={this.changeAgeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Campus: </label>
                    <select
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      {" "}
                      <option value="PKD">Paralakhemundi</option>
                      <option value="BBSR">Bhubaneswar</option>
                      <option value="RYG">Rayagada</option>
                      <option value="VZG">Vizianagaram</option>
                      <option value="BGR">Balangir</option>
                    </select>
                  </div>
                  <br />

                  <div className="form-group">
                    <label>Department: </label>
                    <select
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      {" "}
                      <option value="SOET">
                        School of Engineering and Technology
                      </option>
                      <option value="SOG">
                        M.S. Swaminathan School of Agriculture
                      </option>
                      <option value="SOAS">School of Applied Sciences</option>
                      <option value="SOABE">
                        School of Agriculture and Bio-Engineering
                      </option>
                      <option value="SOM">School of Management</option>
                      <option value="SOPAHS">
                        School of Paramedics and Allied Health Science
                      </option>
                      <option value="SOP">School of Pharmacy</option>
                      <option value="SOFS">School of Forensic Sciences</option>
                      <option value="SOVET">
                        School of Vocational Education and Training
                      </option>
                    </select>
                  </div>
                  <br />

                  <div className="form-group">
                    <label>Branch: </label>
                    <input
                      placeholder="Branch"
                      name="branch"
                      className="form-control"
                      value={this.state.branch}
                      onChange={this.changeBranchHandler}
                    />
                  </div>
                  <br />

                  <div className="form-group">
                    <label>Age: </label>
                    <input
                      placeholder="Age"
                      name="age"
                      className="form-control"
                      value={this.state.age}
                      onChange={this.changeAgeHandler}
                    />
                  </div>
                  <br />

                  <div className="form-group">
                    <label>Mobile Number: </label>
                    <input
                      placeholder="Mobile Number"
                      name="mobileNo"
                      className="form-control"
                      value={this.state.mobileNo}
                      onChange={this.changeMobileNoHandler}
                    />
                  </div>
                  <br />

                  <div className="form-group">
                    <label>Role: </label>
                    <input
                      placeholder="Role"
                      name="role"
                      className="form-control"
                      value={this.state.role}
                      onChange={this.changeRoleHandler}
                    />
                  </div>
                  <br />

                  <div className="form-group">
                    <label>Address: </label>
                    <input
                      placeholder="Permanent Address"
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.changeAddressHandler}
                    />
                  </div>

                  <br />

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateEmployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployeeComponent;
