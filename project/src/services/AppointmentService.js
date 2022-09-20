import axios from 'axios';

const GET_Appointment= "http://localhost:8080/viewAllAppointment";
const POST_Appointment= "http://localhost:8080/addAppointment";
const PUT_Appointment="http://localhost:8080/updateAppointment";
class AppointmentService{
    getAppointment(){
        return axios.get(GET_Appointment);
    }
    createAppointment(patient){
        return axios.post(POST_Appointment,patient);
    }
    updateAppointment(patient){
        return axios.put(PUT_Appointment,patient);
    }
}
export default new AppointmentService()