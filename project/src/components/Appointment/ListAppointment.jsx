import React, { Component } from 'react';
import AppointmentService from '../../services/AppointmentService';
class ListAppointment extends Component {
    constructor(props){
        super(props)

        this.state={
            appointments: [],
            temp:{}
        }
        this.addAppointment=this.addAppointment.bind(this);
        this.callBy=this.callBy.bind(this);
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
    addAppointment(){
        this.props.history.push('/addAppointment');
        window.location.reload(false);
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Appointment List</h2>
                <div>
                    <button className='btn btn-success' onClick={this.addAppointment}>Add Appointment</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Appointment Id</th>
                                <th>Appointment Date</th>
                                <th>Center Name</th>
                                <th>Approval status</th>
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

export default ListAppointment;