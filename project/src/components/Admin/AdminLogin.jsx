import React, { Component } from 'react';
import AdminService from '../../services/AdminService';

class AdminLogin extends Component {
    constructor(props){
        super(props)

        this.state={
                userName:'',
                password:''
        }
        this.changeUserNameHandler=this.changeUserNameHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.validateAdmin=this.validateAdmin.bind(this);
        this.goToUser=this.goToUser.bind(this);
    }
    changeUserNameHandler=(event)=>{
        this.setState({userName:event.target.value});
    }
    changePasswordHandler=(event)=>{
        this.setState({password:event.target.value});
    }
    validateAdmin=(e)=>{
        e.preventDefault();
        let admin={userName:this.state.userName,password:this.state.password};
        console.log('admin=>'+JSON.stringify(admin));
        AdminService.validateAdmin(admin).then(res=>{
            if(res.data==true){
                this.props.history.push('/viewCenter');
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
    goToUser(){
        this.props.history.push('/user');
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Login Admin</h3>
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
                                    <button className='btn btn-success' onClick={this.validateAdmin}>Login</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                    <button className='btn btn-success' onClick={this.goToUser}>User</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminLogin;