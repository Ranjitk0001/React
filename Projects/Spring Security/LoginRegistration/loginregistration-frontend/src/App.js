import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
    <>
      {/* <div className="container">
      
        <h1 className="text-center">Hello, Bootstrap!</h1>
        <button className="btn btn-primary">Click me</button>
      </div> */}

      

      <Router>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
