import axios from 'axios';

const GET_Patient= "http://localhost:8080/viewPatient";
const POST_Patient= "http://localhost:8080/addPatient";
class PatientService{
    getPatient(){
        return axios.get(GET_Patient);
    }
    createPatient(patient){
        return axios.post(POST_Patient,patient);
    }
}
export default new PatientService()