import logo from './logo.svg';
import './App.css';
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import AddUserComponent from './components/AddUserComponent';
import AdminComponent from './components/Admin/AdminComponent';
import ListPatientComponent from './components/Patient/ListPatientComponent';
import AddPatient from './components/Patient/AddPatient';
import AddAdminComponent from './components/Admin/AddAdminComponent';
import {BrowserRouter, BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import DemoComponent from './components/DemoComponent';
import Home from './components/Home/Home';
import ViewCenter from './components/DiagnosticCenter/ViewCenter';
import AddCenter from './components/DiagnosticCenter/AddCenter';
import UpdateCenter from './components/DiagnosticCenter/UpdateCenter';
import ViewTest from './components/DiagonsticTest/ViewTest';
import AddTest from './components/DiagonsticTest/AddTest';
import UpdateTest from './components/DiagonsticTest/UpdateTest';
import AdminLogin from './components/Admin/AdminLogin';
import UserLogin from './components/UserLogin';
import ListAppointment from './components/Appointment/ListAppointment';
import AddAppointment from './components/Appointment/AddAppointment';
import ViewAppointmentByAdmin from './components/Appointment/ViewAppointmentByAdmin';
import UpdateAppointment from './components/Appointment/UpdateAppointment';

function App() {
  return (
    <div>
      <Router>
        <BrowserRouter>
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path='/' role="admin" exact component={AdminLogin}></Route>
                <Route path='/user' component={UserLogin}></Route>
                <Route path='/users' component={ListUserComponent}></Route>
                <Route path='/addusers' component={AddUserComponent}></Route>
                <Route path='/viewCenter' component={ViewCenter}></Route>
                <Route path='/addCenter'component={AddCenter}></Route>
                <Route path='/updateCenter' component={UpdateCenter}></Route>
                <Route path='/viewTest' component={ViewTest}></Route>
                <Route path='/addTest' component={AddTest}></Route>
                <Route path='/updateTest' component={UpdateTest}></Route>
                <Route path='/demo' component={DemoComponent}></Route>
                <Route path='/admin' component={AdminComponent}></Route>
                <Route path='/addAdmin' component={AddAdminComponent}></Route>
                <Route path='/patients' component={ListPatientComponent}></Route>
                <Route path='/addPatient' component={AddPatient}></Route>
                <Route path='/viewAppointment' component={ListAppointment}></Route>
                <Route path='/addAppointment' component={AddAppointment}></Route>
                <Route path='/viewAppointmentByAdmin' component={ViewAppointmentByAdmin}></Route>
                <Route path='/updateAppointment' component={UpdateAppointment}></Route>
              </Switch>
            </div>
            </BrowserRouter>
        </Router>  
    </div>
  );
}

export default App;
