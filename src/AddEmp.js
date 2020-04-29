import React, { Component } from 'react';

class AddEmp extends Component {
    
    constructor(props){
        super(props)
        this.state= {employees: null}
    }

    componentWillMount() {
        fetch('http://localhost:8000/api/employee')
        .then(res=> res.json())
        .then(result=>{
            console.log(result)
            this.setState({employees: result})
        })
    }

    render()
    {
        if(!this.state.employees)
        return null;

        var emplist = this.state.employees.map((employee,i)=>{
            return(
                
                <li>{employee.id}-----{employee.name} ----- {employee.salary}</li> 
            )
        })
        return (
            <div>

                
                
                <ul>
                    {emplist} 
                </ul>
                </div>
        );}
}
    export default AddEmp;