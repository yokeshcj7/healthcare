import axios from 'axios';

const CENTER_API_BASE_URL = "http://localhost:8080"

class TestService{
    getTests(){
        return axios.get(CENTER_API_BASE_URL+"/tests");
    }
    createTest(test){
        return axios.post(CENTER_API_BASE_URL+"/addNewTest",test);
    }
    updateTest(test){
        return axios.put(CENTER_API_BASE_URL+'/updateTestDetail',test);
    }
    deleteTest(id){
        return axios.delete(CENTER_API_BASE_URL+'/deleteTest/'+id);
    }
}
export default new TestService()