import React, { Component } from 'react';
import CenterService from '../../services/CenterService';
import {MultiSelectComponent} from '@syncfusion/ej2-react-dropdowns';
import './center.css';

class AddCenter extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            contactNo:'',
            address:'',
            contactEmail:'',
            serviceOffered:[],
            serOffered:['eyecheckup','covid']
        }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeContactHandler=this.changeContactHandler.bind(this);
        this.changeAddressHandler=this.changeAddressHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeServiceHandler=this.changeServiceHandler.bind(this);
        this.saveCenter=this.saveCenter.bind(this);
        
    }
    changeNameHandler=(event)=>{
        this.setState({name:event.target.value});
    }
    changeContactHandler=(event)=>{
        this.setState({contactNo:event.target.value});
    }
    changeAddressHandler=(event)=>{
        this.setState({address:event.target.value});
    }
    changeEmailHandler=(event)=>{
        this.setState({contactEmail:event.target.value});
    }
    changeServiceHandler=(event)=>{
        this.setState({serviceOffered:event.target.value});
    }
    saveCenter=(e)=>{
        e.preventDefault();
        let center={name:this.state.name,contactNo:this.state.contactNo,address:this.state.address,
        contactEmail:this.state.contactEmail,serviceOffered:this.state.serviceOffered};
        console.log('user=>'+JSON.stringify(center));
        CenterService.createCenter(center).then(res=>{
            this.props.history.push('/viewCenter');
            window.location.reload(false);
        });
    }
    
    cancel(){
        this.props.history.push('/viewCenter');
    }
    
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Center</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Center Name</label>
                                        <input placeholder='name' name='name' 
                                            className='form-control' value={this.state.name} 
                                            onChange={this.changeNameHandler}/> 
                                    </div>
                                    <div className='form-group'>
                                        <label>Contact Number</label>
                                        <input placeholder='00000' name='contactNo' 
                                            className='form-control' value={this.state.contactNo} 
                                            onChange={this.changeContactHandler}/> 
                                    </div>
                                    <div className='form-group'>
                                        <label>Address</label>
                                        <input placeholder='anna street' name='address' 
                                            className='form-control' value={this.state.address} 
                                            onChange={this.changeAddressHandler}/> 
                                    </div>
                                    <div className='form-group'>
                                        <label>Contact Email</label>
                                        <input placeholder='@gmail.com' name='contactEmail' 
                                            className='form-control' value={this.state.contactEmail} 
                                            onChange={this.changeEmailHandler}/> 
                                    </div>
                                    <div className='form-group'>
                                        <label>Service Offered</label>
                                        <div >
                                        <MultiSelectComponent placeholder='service'
                                         dataSource={this.state.serOffered}
                                         className='form-control' value={this.state.serviceOffered}
                                         onChange={this.changeServiceHandler}></MultiSelectComponent> 
                                        </div>
                                    </div>
                                    <button className='btn btn-success' onClick={this.saveCenter}>Save</button>
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

export default AddCenter;