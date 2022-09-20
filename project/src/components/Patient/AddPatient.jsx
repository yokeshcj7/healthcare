import React, { Component } from 'react';
import PatientService from '../../services/PatientService';
class AddPatient extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'',
            phoneNo:'',
            age:'',
            gender:''
        }
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changePhoneHandler=this.changePhoneHandler.bind(this);
        this.changeAgeHandler=this.changeAgeHandler.bind(this);
        this.changeGenderHandler=this.changeGenderHandler.bind(this);
        this.savePatient=this.savePatient.bind(this);
    }
    changeNameHandler=(event)=>{
        this.setState({name:event.target.value});
    }
    changePhoneHandler=(event)=>{
        this.setState({phoneNo:event.target.value});
    }
    changeAgeHandler=(event)=>{
        this.setState({age:event.target.value});
    }
    changeGenderHandler=(event)=>{
        this.setState({gender:event.target.value});
    }

    savePatient=(e)=>{
        e.preventDefault();
        let patient={name:this.state.name,phoneNo:this.state.phoneNo,
            age:this.state.age,gender:this.state.gender};
        console.log('patient=>'+JSON.stringify(patient));
        PatientService.createPatient(patient).then(res=>{
            this.props.history.push('/patients');
            window.location.reload(false);
        });
    }
    cancel(){
        this.props.history.push('/patients');
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Patient</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Patient Name</label>
                                        <input placeholder='name' name='name' 
                                            className='form-control' value={this.state.name} 
                                            onChange={this.changeNameHandler}/> 
                                    </div>
                                    <div className='form-group'>
                                        <label>Phone Number</label>
                                        <input placeholder='00000' name='phoneNO' 
                                            className='form-control' value={this.state.phoneNo} 
                                            onChange={this.changePhoneHandler}/> 
                                    </div>
                                    <div className='form-group'>
                                        <label>Age</label>
                                        <input placeholder='age' name='age' 
                                            className='form-control' value={this.state.age} 
                                            onChange={this.changeAgeHandler}/> 
                                    </div>
                                    <div className='form-group'>
                                        <label>Gender</label>
                                        <input placeholder='gender' name='gender' 
                                            className='form-control' value={this.state.gender} 
                                            onChange={this.changeGenderHandler}/> 
                                    </div>
                                    
                                    <button className='btn btn-success' onClick={this.savePatient}>Save</button>
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

export default AddPatient;