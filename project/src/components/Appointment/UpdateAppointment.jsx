import React, { Component } from 'react';
import AppointmentService from '../../services/AppointmentService';

class UpdateAppointment extends Component {
    constructor(props){
        super(props)

        this.state={
            id:'',
            appointmentDate:'',
            patient_id:'',
            center_id:'',
            approvalStatus:''
        }
        this.changeIdHandler=this.changeIdHandler.bind(this);
        this.changeDateHandler=this.changeDateHandler.bind(this);
        this.changePatientHandler=this.changePatientHandler.bind(this);
        this.changeCenterHandler=this.changeCenterHandler.bind(this);
        this.changeApprovalHandler=this.changeApprovalHandler.bind(this);
        this.saveAppointment=this.saveAppointment.bind(this);
        
    }
    changeIdHandler=(event)=>{
        this.setState({id:event.target.value});
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
    changeApprovalHandler=(event)=>{
        this.setState({approvalStatus:event.target.value});
    }
    
    saveAppointment=(e)=>{
        e.preventDefault();
        let center={id:this.state.center_id};
        let patient={patientId:this.state.patient_id};
        let appointment={id:this.state.id,appointmentDate:this.state.appointmentDate,center,
            patient,approvalStatus:this.state.approvalStatus};
        console.log('user=>'+JSON.stringify(appointment));
        AppointmentService.updateAppointment(appointment).then(res=>{
            this.props.history.push('/viewAppointmentByAdmin');
            window.location.reload(false);
        });
    }
    
    cancel(){
        this.props.history.push('/viewAppointmentByAdmin');
    }
    
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Update Appointment</h3>
                            <div className='card-body'>
                                <form>
                                <div className='form-group'>
                                        <label>Appointment Id</label>
                                        <input placeholder='1' name='id' 
                                            className='form-control' value={this.state.id} 
                                            onChange={this.changeIdHandler}/> 
                                    </div>
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
                                    <div className='form-group'>
                                        <label>Approval Status</label>
                                        <input placeholder='true' name='approvalStatus' 
                                            className='form-control' value={this.state.approvalStatus} 
                                            onChange={this.changeApprovalHandler}/> 
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

export default UpdateAppointment;