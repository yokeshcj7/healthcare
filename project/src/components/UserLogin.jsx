import React, { Component } from 'react';
import UserService from '../services/UserService';

class UserLogin extends Component {
    constructor(props){
        super(props)

        this.state={
                userName:'',
                password:''
        }
        this.changeUserNameHandler=this.changeUserNameHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.validateUser=this.validateUser.bind(this);
        this.goToAdmin=this.goToAdmin.bind(this);
        this.newUser=this.newUser.bind(this);
        
    }
    changeUserNameHandler=(event)=>{
        this.setState({userName:event.target.value});
    }
    changePasswordHandler=(event)=>{
        this.setState({password:event.target.value});
    }
    
    validateUser=(e)=>{
        e.preventDefault();
        let user={userName:this.state.userName,password:this.state.password};
        console.log('user=>'+JSON.stringify(user));
        UserService.validateUser(user).then(res=>{
            if(res.data==true){
                this.props.history.push('/patients');
            window.location.reload(false);
            }
            else{
                alert("invalid username or password");
            }
        });
    }
    cancel(){
        this.props.history.push('/admin');
    }
    goToAdmin(){
        this.props.history.push('/');
    }
    newUser(){
        this.props.history.push('/addusers');
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Login User</h3>
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
                                    <button className='btn btn-success' onClick={this.validateUser}>Login</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                    <button className='btn btn-success' onClick={this.goToAdmin}>Admin</button>
                                    <button className='btn btn-success' onClick={this.newUser}>NewUser</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserLogin;