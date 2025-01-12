import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import RouteNavbar from './RouteNavbar';
import StudentService from '../services/StudentService';

const StudentAdd = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [dept, setDept] = useState('');
    const navigate = useNavigate(); // Use useNavigate

    const saveStudent = (e) => {
        e.preventDefault();
        const student = { name, age, dept };

        StudentService.createStudent(student).then((response) => {
            console.log(response.data);
            navigate('/'); 
        });
    };

    return (
        <>
            <RouteNavbar />
            <div className="container mt-5">
                <h1>Add Student</h1>
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Name:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        name="name"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Age:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter age"
                                        name="age"
                                        className="form-control"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Department:</label>
                                    <input
                                        type="text"
                                        placeholder="Enter department"
                                        name="dept"
                                        className="form-control"
                                        value={dept}
                                        onChange={(e) => setDept(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={(e) => saveStudent(e)}>Submit</button>
                                <Link to="/" className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentAdd;
