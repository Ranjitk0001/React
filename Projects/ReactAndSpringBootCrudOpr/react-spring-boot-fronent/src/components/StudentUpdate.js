import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StudentService from "../services/StudentService";
import RouteNavbar from "./RouteNavbar";

const StudentUpdate = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dept, setDept] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const saveStudent = (e) => {
    e.preventDefault();
    const student = { name, age, dept };

    if (id) {
      StudentService.updateStudent(id, student)
        .then((response) => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    StudentService.getStudentById(id)
      .then((response) => {
        setName(response.data.name);
        setAge(response.data.age);
        setDept(response.data.dept);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <>
      <RouteNavbar />
      <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <div className="card-body">
              <h1>Update Student</h1>
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
                <button
                  className="btn btn-success"
                  onClick={(e) => saveStudent(e)}
                >
                  Submit
                </button>
                <Link to="/" className="btn btn-danger">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StudentUpdate;
