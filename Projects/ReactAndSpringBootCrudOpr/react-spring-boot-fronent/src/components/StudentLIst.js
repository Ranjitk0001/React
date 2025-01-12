import React, { useEffect, useState } from "react";
import StudentService from "../services/StudentService";
import RouteNavbar from "./RouteNavbar";

const StudentLIst = () => {
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
    StudentService.deleteStudent(studentId).then((response) =>{
      getAllStudents();

    }).catch(error =>{
        console.log(error);
    })
     
 }

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
                students.map(
                    students=>(
                        <tr key={students.id}>
                            <th scope="row">{students.id}</th>
                            <td>{students.name}</td>
                            <td>{students.age}</td>
                            <td>{students.dept}</td>
                            <td>
                                <button className="btn btn-info">Edit</button>
                                <button className = "btn btn-danger" onClick = {() => deleteStudent(students.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                            </td>
                        </tr>
                )

            )
            }

          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentLIst;
