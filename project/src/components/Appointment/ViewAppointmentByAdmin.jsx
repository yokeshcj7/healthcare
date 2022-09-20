import React, { Component } from 'react';
import AppointmentService from '../../services/AppointmentService';
class ViewAppointmentByAdmin extends Component {
    constructor(props){
        super(props)

        this.state={
            appointments: [],
            temp:{}
        }
        this.callBy=this.callBy.bind(this);
        this.updateAppointment=this.updateAppointment.bind(this);
    }
    componentDidMount(){
        AppointmentService.getAppointment().then((res=>{
            this.setState({appointments:res.data});
        }))
    }
    callBy(temp1){
        this.state.temp=temp1;
        return this.state.temp.name;
    }
    updateAppointment(){
        this.props.history.push('/updateAppointment');
        window.location.reload(false);
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Appointment List</h2>
                
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Appointment Id</th>
                                <th>Appointment Date</th>
                                <th>Center Name</th>
                                <th>Approval status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.appointments.map(
                                    appointment=>
                                    <tr key={appointment.id}>
                                        <td>{appointment.id}</td>
                                        <td>{appointment.appointmentDate}</td>
                                        <td>{this.callBy(appointment.center)}</td>
                                        <td>{appointment.approvalStatus.toString()}</td>
                                        <td><button className='btn btn-success' onClick={this.updateAppointment}>Update</button></td>
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

export default ViewAppointmentByAdmin;