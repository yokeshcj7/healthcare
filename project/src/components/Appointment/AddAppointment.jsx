import React, { Component } from 'react';
import AppointmentService from '../../services/AppointmentService';

class AddAppointment extends Component {
    constructor(props){
        super(props)

        this.state={
            appointmentDate:'',
            patient_id:'',
            center_id:'',
        }
        this.changeDateHandler=this.changeDateHandler.bind(this);
        this.changePatientHandler=this.changePatientHandler.bind(this);
        this.changeCenterHandler=this.changeCenterHandler.bind(this);
        
        this.saveAppointment=this.saveAppointment.bind(this);
        
    }
    changeDateHandler=(event)=>{
        this.setState({appointmentDate:event.target.value});
    }
    changePatientHandler=(event)=>{
        this.setState({patient_id:event.target.value});
    }
    changeCenterHandler=(event)=>{
        this.setState({center_id:event.target.value});
    }
    
    saveAppointment=(e)=>{
        e.preventDefault();
        let center={id:this.state.center_id};
        let patient={patientId:this.state.patient_id};
        let appointment={appointmentDate:this.state.appointmentDate,center,patient};
        console.log('user=>'+JSON.stringify(appointment));
        AppointmentService.createAppointment(appointment).then(res=>{
            this.props.history.push('/viewAppointment');
            window.location.reload(false);
        });
    }
    
    cancel(){
        this.props.history.push('/viewAppointment');
    }
    
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Appointment</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Appointment Date</label>
                                        <input placeholder='xx-xx-xxxx' name='appointmentDate' 
                                            className='form-control' value={this.state.appointmentDate} 
                                            onChange={this.changeDateHandler}/> 
                                    </div>
                                    <div className='form-group'>
                                        <label>Patient Id</label>
                                        <input placeholder='1' name='patient_id' 
                                            className='form-control' value={this.state.patient_id} 
                                            onChange={this.changePatientHandler}/> 
                                    </div>
                                    <div className='form-group'>
                                        <label>Center Id</label>
                                        <input placeholder='1' name='center_id' 
                                            className='form-control' value={this.state.center_id} 
                                            onChange={this.changeCenterHandler}/> 
                                    </div>
                                    
                                    <button className='btn btn-success' onClick={this.saveAppointment}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddAppointment;