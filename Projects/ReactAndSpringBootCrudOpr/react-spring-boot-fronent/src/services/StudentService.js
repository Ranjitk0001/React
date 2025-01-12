import axios from 'axios'

const BASE_REST_API_URL = 'http://localhost:8084/api/v1/getStudents';
class StudentService {
    getAllStudents(){
        return axios.get(BASE_REST_API_URL);
    }
}

export default new StudentService();