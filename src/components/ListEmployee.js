import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

export default class ListEmployee extends Component {
  constructor(props){
      super(props);
      this.state={
          employees: []
      }
      this.addEmployee=this.addEmployee.bind(this);
  }
  componentDidMount(){
      EmployeeService.getEmployees().then((res)=>{
          this.setState({employees: res.data})
      })
  }
  addEmployee(){
    const navigate=useNavigate();
    this.props.navigate('/add-employee');
  }
  render() {
    return (
      <div>
         <h2 className='text-center'>Employee List</h2>
         <div className="row">
             <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
         </div>
         <div className="row">
             <table className="table table-stripped table-bordered">
                 <thead>
                     <tr>
                         <th>Employee First Name</th>
                         <th>Employee Last Name</th>
                         <th>Employee Email</th>
                         <th>Actions</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         this.state.employees.map(
                             employee=>
                             <tr key={employee.id}>
                                  <td>{employee.firstName}</td>
                                  <td>{employee.lastName}</td>
                                  <td>{employee.emailId}</td>
                             </tr>
                         )
                     }
                 </tbody>
             </table>
         </div>
      </div>
    )
  }
}

