import axios from 'axios';

const GET_USER= "http://localhost:8080/getUsers";
const POST_USER= "http://localhost:8080/addUser";
const VALIDATE_USER="http://localhost:8080/validateUser";
class UserService{
    getUsers(){
        return axios.get(GET_USER);
    }
    createUser(user){
        return axios.post(POST_USER,user);
    }
    validateUser(user){
        return axios.post(VALIDATE_USER,user);
    }
}
export default new UserService()