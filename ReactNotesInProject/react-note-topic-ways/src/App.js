import "./App.css";
import Home from "./component/Home";
import Hooks from "./component/Hooks/Hooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>

    
      {/* <h1>React Notes</h1> */}

      {/* <h1>React Notes</h1>
  <Hooks></Hooks> */}
   
      <Router>
        <Routes>
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
