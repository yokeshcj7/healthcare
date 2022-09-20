import React, { Component } from 'react';
import UserService from '../services/UserService';

class ListUserComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            users: []
        }
        this.addUser=this.addUser.bind(this);
    }

    componentDidMount(){
        UserService.getUsers().then((res)=>{
            this.setState({users:res.data});
        })
    }
    addUser(){
        this.props.history.push('/addusers');
        window.location.reload(false);
    }
    render() {
        return (
            <div>
                <h2 className="text-center">UserList</h2>
                <div>
                    <button className='btn btn-success' onClick={this.addUser}>Add User</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>User Id</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user=>
                                    <tr key={user.userId}>
                                        <td>{user.userId}</td>
                                        <td>{user.userName}</td>
                                        <td>{user.password}</td>
                                        <td>{user.role}</td>
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

export default ListUserComponent;