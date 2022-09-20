import React, { Component } from 'react';
import UserService from '../services/UserService';

class AddUserComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            userName: '',
            password: '',
            role: ''
        }
        this.changeUserNameHandler=this.changeUserNameHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changeRoleHandler=this.changeRoleHandler.bind(this);
        this.saveUser=this.saveUser.bind(this);
    }
    changeUserNameHandler=(event)=>{
        this.setState({userName:event.target.value});
    }
    changePasswordHandler=(event)=>{
        this.setState({password:event.target.value});
    }
    changeRoleHandler=(event)=>{
        this.setState({role:event.target.value});
    }
    saveUser=(e)=>{
        e.preventDefault();
        let user={userName:this.state.userName,password:this.state.password,role:this.state.role};
        console.log('user=>'+JSON.stringify(user));
        UserService.createUser(user).then(res=>{
            this.props.history.push('/user');
            window.location.reload(false);
        });
    }
    cancel(){
        this.props.history.push('/user');
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add User</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>UserName</label>
                                        <input placeholder='User name' name='userName' 
                                            className='form-control' value={this.state.userName} 
                                            onChange={this.changeUserNameHandler}/> 
                                    </div>
                                    <div className='form-group'>
                                        <label>password</label>
                                        <input placeholder='password' name='password' 
                                            className='form-control' value={this.state.password} 
                                            onChange={this.changePasswordHandler}/> 
                                    </div>
                                    <div className='form-group'>
                                        <label>Role</label>
                                        <input placeholder='Role' name='role' 
                                            className='form-control' value={this.state.role} 
                                            onChange={this.changeRoleHandler}/> 
                                    </div>
                                    <button className='btn btn-success' onClick={this.saveUser}>Save</button>
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

export default AddUserComponent;