import "./App.css";
import Home from "./component/Home";
import Hooks from "./component/Hooks/Hooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Variables from "./component/propsVariables/Variables";
import PageNoteFound from "./component/PageNoteFound";
import About from "./component/About";
import ContactUs from "./component/ContactUs";
// import Api3 from "./component/Api/Api3";
import Api4 from "./component/Api/Api4";
// import Api from "./component/Api/Api";
// import Api2 from "./component/Api/Api2";

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
          <Route path="/*" element={<PageNoteFound />} />
          <Route path="/props" element={<Variables />} />
          <Route path="/about" element={<About />}>
            <Route path="/about/contact-Us" element={<ContactUs />} />
          </Route>
          <Route path="/api" element={<Api4 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
