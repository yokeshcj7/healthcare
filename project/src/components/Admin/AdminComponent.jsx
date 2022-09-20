import React, { Component } from 'react';
import AdminService from '../../services/AdminService';

class AdminComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            users: []
        }
        this.addAdmin=this.addAdmin.bind(this);
    }
    componentDidMount(){
        AdminService.getAdmin().then((res=>{
            this.setState({users:res.data});
        }))
    }
    addAdmin(){
        this.props.history.push('/addAdmin');
    }
    render() {
        return (
            <div>
                <div>
                <h2 className="text-center">AdminList</h2>
                <div>
                    <button className='btn btn-success' onClick={this.addAdmin}>Add Admin</button>
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
            </div>
        );
    }
}

export default AdminComponent;