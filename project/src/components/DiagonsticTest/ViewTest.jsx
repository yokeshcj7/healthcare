import React, { Component } from 'react';
import TestService from '../../services/TestService';

class ViewTest extends Component {
    constructor(props){
        super(props)

        this.state={
            tests: []
        }
        this.addTest=this.addTest.bind(this);
        this.updateTest=this.updateTest.bind(this);
    }
    componentDidMount(){
        TestService.getTests().then((res)=>{
            this.setState({tests:res.data});
        })
    }
    addTest(){
        this.props.history.push('/addTest');
        window.location.reload(false);
    }
    updateTest(){
        this.props.history.push('/updateTest');
        window.location.reload(false);
    }
    deleteTest(id){
        TestService.deleteTest(id).then(res => {
            this.setState({tests: this.state.tests.filter(test => test.id !== id)});
        });}
    render() {
        return (
            <div>
                <h2 className="text-center">Diagnostic Test List</h2>
                <div>
                    <button className='btn btn-success' onClick={this.addTest}>Add Test</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Test Id</th>
                                <th>Test name</th>
                                <th>Test price</th>
                                <th>Normal Value</th>
                                <th>Units</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tests.map(
                                    user=>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.testName}</td>
                                        <td>{user.testPrice}</td>
                                        <td>{user.normalValue}</td>
                                        <td>{user.units}</td>
                                        <td><button className='btn btn-success' onClick={this.updateTest}>Update</button>
                                        <button style={{marginLeft:'10px'}} onClick={() => this.deleteTest(user.id)} className='btn btn-danger'>Delete</button></td>
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

export default ViewTest;