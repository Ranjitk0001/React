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

    updateStudent(studentId, student){
        return axios.put(BASE_REST_API_URL + '/updateStudent/' +studentId, student);
    }

    getStudentById(studentId){
        return axios.get(BASE_REST_API_URL + '/studentById/' + studentId);
    }

}

// export default new StudentService();

const instance = new StudentService();
export default instance;