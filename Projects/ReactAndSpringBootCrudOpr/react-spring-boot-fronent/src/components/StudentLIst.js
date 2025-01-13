import React, { useEffect, useState } from "react";
import StudentService from "../services/StudentService";
import RouteNavbar from "./RouteNavbar";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [students, setStudent] = useState([]);

  useEffect(() => {
    getAllStudents();
  }, []);

  const getAllStudents = () => {
    StudentService.getAllStudents()
      .then((response) => {
        setStudent(response.data);
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  const deleteStudent = (studentId) => {
    StudentService.deleteStudent(studentId).then((response) => {
      getAllStudents();
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      <RouteNavbar />
      <h1>Student List</h1>
      <div className="container mt-5">
        <h1>Bootstrap Table Example</h1>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Department</th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {
              students.map((student) => (
                <tr key={student.id}>
                  <th scope="row">{student.id}</th>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.dept}</td>
                  <td>
                    <Link className="btn btn-info" to={`/edit-student/${student.id}`}>Update</Link>
                    <button className="btn btn-danger" onClick={() => deleteStudent(student.id)} style={{ marginLeft: "10px" }}> Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentList;
