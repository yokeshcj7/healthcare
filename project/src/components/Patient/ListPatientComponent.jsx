import React, { Component } from 'react';
import PatientService from '../../services/PatientService';
class ListPatientComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            patients: []
        }
        this.addPatient=this.addPatient.bind(this);
        this.viewAppointment=this.viewAppointment.bind(this);
    }
    componentDidMount(){
        PatientService.getPatient().then((res=>{
            this.setState({patients:res.data});
        }))
    }
    addPatient(){
        this.props.history.push('/addPatient');
        window.location.reload(false);
    }
    viewAppointment(){
        this.props.history.push('/viewAppointment');
        window.location.reload(false);
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Patient List</h2>
                <div>
                    <button className='btn btn-success' onClick={this.addPatient}>Add Patient</button>
                    <button className='btn btn-success' onClick={this.viewAppointment}>view Appointment</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Patient Id</th>
                                <th>Name</th>
                                <th>PhoneNo</th>
                                <th>Age</th>
                                <th>Gender</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.patients.map(
                                    patient=>
                                    <tr key={patient.patientId}>
                                        <td>{patient.patientId}</td>
                                        <td>{patient.name}</td>
                                        <td>{patient.phoneNo}</td>
                                        <td>{patient.age}</td>
                                        <td>{patient.gender}</td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListPatientComponent;