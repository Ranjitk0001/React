import axios from 'axios'

const BASE_REST_API_URL = 'http://localhost:8084/api/v1';
class StudentService {
    getAllStudents(){
        return axios.get(BASE_REST_API_URL+'/getStudents');
    }
    createStudent(student){
        return axios.post(BASE_REST_API_URL+'/addStudent', student);
    }
}

export default new StudentService();