
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentLIst from './components/StudentLIst';
import StudentAdd from './components/StudentAdd';
import StudentUpdate from './components/StudentUpdate';

function App() {
  return (
    <>
      
        {/* <h1>Welcome to React Spring Boot</h1> */}

       
       
         <Router>
        <Routes>
          <Route path="/" element={<StudentLIst />} />
          <Route path="/add-student" element={<StudentAdd />} />
          <Route path="/edit-student/:id" element={<StudentUpdate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
