
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentLIst from './components/StudentLIst';
import StudentAdd from './components/StudentAdd';

function App() {
  return (
    <>
      
        {/* <h1>Welcome to React Spring Boot</h1> */}

       
       
         <Router>
        <Routes>
          <Route path="/list" element={<StudentLIst />} />
          <Route path="/" element={<StudentAdd />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
