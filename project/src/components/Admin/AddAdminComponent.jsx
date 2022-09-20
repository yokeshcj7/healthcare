import React, { Component } from 'react';
import AdminService from '../../services/AdminService';

class AddAdminComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            users: {
                userName:'',
                password:''
            }
        }
        this.changeUserNameHandler=this.changeUserNameHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.saveUser=this.saveUser.bind(this);
    }
    changeUserNameHandler=(event)=>{
        this.setState({userName:event.target.value});
    }
    changePasswordHandler=(event)=>{
        this.setState({password:event.target.value});
    }
    saveUser=(e)=>{
        e.preventDefault();
        let user={userName:this.state.userName,password:this.state.password};
        AdminService.createAdmin(user).then(res=>{
            this.props.history.push('/admin');
        });
    }
    cancel(){
        this.props.history.push('/admin');
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Admin</h3>
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

export default AddAdminComponent;