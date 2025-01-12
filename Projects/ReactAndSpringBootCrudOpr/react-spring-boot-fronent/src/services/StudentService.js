import axios from 'axios'

const BASE_REST_API_URL = 'http://localhost:8084/api/v1';
class StudentService {
    getAllStudents(){
        return axios.get(BASE_REST_API_URL+'/getStudents');
    }
    createStudent(student){
        return axios.post(BASE_REST_API_URL+'/addStudent', student);
    }

    deleteStudent(studentId){
        return axios.delete(BASE_REST_API_URL + '/deleteStudent/' + studentId);
    }
}

export default new StudentService();