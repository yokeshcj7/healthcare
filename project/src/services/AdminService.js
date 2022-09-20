import axios from 'axios';

const GET_Admin= "http://localhost:8080/getAdmin";
const POST_Admin= "http://localhost:8080/register";
const VALIDATE_Admin="http://localhost:8080/validateAdmin";
class AdminService{
    getAdmin(){
        return axios.get(GET_Admin);
    }
    createAdmin(admin){
        return axios.post(POST_Admin,admin);
    }
    validateAdmin(admin){
        return axios.post(VALIDATE_Admin,admin);
    }
}
export default new AdminService()