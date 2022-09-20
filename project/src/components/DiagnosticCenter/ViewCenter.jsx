import React, { Component } from 'react';
import CenterService from '../../services/CenterService';

class ViewCenter extends Component {
    constructor(props){
        super(props)

        this.state={
            centers: [],
            temp:{}
        }
        this.addCenter=this.addCenter.bind(this);
        this.viewTest=this.viewTest.bind(this);
        this.updateCenter=this.updateCenter.bind(this);
        this.deleteCenter=this.deleteCenter.bind(this);
        this.viewAppointment=this.viewAppointment.bind(this);
    }
    componentDidMount(){
        CenterService.getCenters().then((res)=>{
            this.setState({centers:res.data});
        })
    }
    addCenter(){
        this.props.history.push('/addCenter');
        window.location.reload(false);
    }
    updateCenter(){
        this.props.history.push('/updateCenter');
        window.location.reload(false);
    }
    viewTest(){
        this.props.history.push('/viewTest');
        window.location.reload(false);
    }
    deleteCenter(id){
        CenterService.deleteCenter(id).then(res => {
            this.setState({centers: this.state.centers.filter(center => center.id !== id)});
        });}
    viewAppointment(){
        this.props.history.push('/viewAppointmentByAdmin');
        window.location.reload(false);
    }  
    render() {
        return (
            <div>
                <h2 className="text-center">Diagnostic Center List</h2>
                <div>
                    <button className='btn btn-success' onClick={this.addCenter}>Add Center</button>
                    <button className='btn btn-success' onClick={this.viewTest}>View test</button>
                    <button className='btn btn-success' onClick={this.viewAppointment}>View Appointment</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Center Id</th>
                                <th>Center name</th>
                                <th>Contact Number</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Service Offered</th>
                                <th>Test Name</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.centers.map(
                                    user=>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.contactNo}</td>
                                        <td>{user.address}</td>
                                        <td>{user.contactEmail}</td>
                                        <td>{user.serviceOffered}</td>
                                        <td><button className='btn btn-success' onClick={this.updateCenter}>Update</button>
                                        <button style={{marginLeft:'10px'}} onClick={() => this.deleteCenter(user.id)} className='btn btn-danger'>Delete</button></td>
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

export default ViewCenter;