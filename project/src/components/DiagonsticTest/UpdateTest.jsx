import React, { Component } from 'react';
import TestService from '../../services/TestService';
class UpdateTest extends Component {
    constructor(props){
        super(props)

        this.state={
            id:'',
            testName:'',
            testPrice:'',
            normalValue:'',
            units:'',
            center_id:''
        }
        this.changeIdHandler=this.changeIdHandler.bind(this);
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changePriceHandler=this.changePriceHandler.bind(this);
        this.changeNormalValueHandler=this.changeNormalValueHandler.bind(this);
        this.changeUnitsHandler=this.changeUnitsHandler.bind(this);
        this.changeCenterHandler=this.changeCenterHandler.bind(this);
        this.saveTest=this.saveTest.bind(this);
    }
    changeIdHandler=(event)=>{
        this.setState({id:event.target.value});
    }
    changeNameHandler=(event)=>{
        this.setState({testName:event.target.value});
    }
    changePriceHandler=(event)=>{
        this.setState({testPrice:event.target.value});
    }
    changeNormalValueHandler=(event)=>{
        this.setState({normalValue:event.target.value});
    }
    changeUnitsHandler=(event)=>{
        this.setState({units:event.target.value});
    }
    changeCenterHandler=(event)=>{
        this.setState({center_id:event.target.value});
    }
    saveTest=(e)=>{
        e.preventDefault();
        let center={id:this.state.center_id};
        let test={id:this.state.id,testName:this.state.testName,testPrice:this.state.testPrice,
            normalValue:this.state.normalValue,
        units:this.state.units,center};
        console.log('test=>'+JSON.stringify(test));
        TestService.updateTest(test).then(res=>{
            this.props.history.push('/viewTest');
            window.location.reload(false);
        });
    }
    cancel(){
        this.props.history.push('/viewTest');
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Update Test</h3>
                            <div className='card-body'>
                                <form>
                                <div className='form-group'>
                                        <label>Test Id</label>
                                        <input placeholder='id' name='id' 
                                            className='form-control' value={this.state.id} 
                                            onChange={this.changeIdHandler}/> 
                                    </div>
                                    <div className='form-group'>
                                        <label>Test Name</label>
                                        <input placeholder='name' name='testName' 
                                            className='form-control' value={this.state.testName} 
                                            onChange={this.changeNameHandler}/> 
                                    </div>
                                    <div className='form-group'>
                                        <label>Test Price</label>
                                        <input placeholder='00000' name='testPrice' 
                                            className='form-control' value={this.state.testPrice} 
                                            onChange={this.changePriceHandler}/> 
                                    </div>
                                    <div className='form-group'>
                                        <label>Normal Value</label>
                                        <input placeholder='anna street' name='normalValue' 
                                            className='form-control' value={this.state.normalValue} 
                                            onChange={this.changeNormalValueHandler}/> 
                                    </div>
                                    <div className='form-group'>
                                        <label>Units</label>
                                        <input placeholder='@gmail.com' name='units' 
                                            className='form-control' value={this.state.units} 
                                            onChange={this.changeUnitsHandler}/> 
                                    </div>
                                    <div className='form-group'>
                                        <label>Center id</label>
                                        <input placeholder='@gmail.com' name='centerId' 
                                            className='form-control' value={this.state.center_id} 
                                            onChange={this.changeCenterHandler}/>
                                    </div>
                                    <button className='btn btn-success' onClick={this.saveTest}>Update</button>
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

export default UpdateTest;