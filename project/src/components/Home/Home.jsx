import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super(props)

        this.state={
            
        }
        this.user=this.user.bind(this);
        this.patient=this.patient.bind(this);
        this.admin=this.admin.bind(this);
    }
    user(){
        this.props.history.push("/users");
        window.location.reload(false);
    }
    patient(){
        this.props.history.push("/patients");
        window.location.reload(false);
    }
    admin(){
        this.props.history.push("/admin");
        window.location.reload(false);
    }
    render() {
        return (
            <div>
                <button className='btn btn-success' onClick={this.user}>User</button>
                <button className='btn btn-success' onClick={this.patient}>Patients</button>
                <button className='btn btn-success' onClick={this.admin}>Admin</button>
            </div>
        );
    }
}

export default Home;