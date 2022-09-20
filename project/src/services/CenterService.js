import axios from 'axios';

const CENTER_API_BASE_URL = "http://localhost:8080"

class CenterService{
    
    createCenter(center){
        return axios.post(CENTER_API_BASE_URL+'/addDiagnosticCenter',center);
    }
    getCenters(){
        return axios.get(CENTER_API_BASE_URL+'/getAllDiagnosticCenter');
    }
    getCenterById(id){
        return axios.get(CENTER_API_BASE_URL+'/getDiagnosticCenter/'+id);
    }
    updateCenter(center){
        return axios.put(CENTER_API_BASE_URL+'/updateDiagnosticCenter',center);
    }
    deleteCenter(id){
        return axios.delete(CENTER_API_BASE_URL+'/deleteMapping/'+id);
    }
}
export default new CenterService()