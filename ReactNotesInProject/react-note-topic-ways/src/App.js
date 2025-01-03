import "./App.css";
import Home from "./component/Home";
// import HooksUseRef3 from "./component/Hooks/HooksUseRef3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Variables from "./component/propsVariables/Variables";
import PageNoteFound from "./component/PageNoteFound";
import About from "./component/About";
import ContactUs from "./component/ContactUs";
// import Api3 from "./component/Api/Api3";
import Api4 from "./component/Api/Api4";
import MoviesApi from "./component/Api/MoviesApi";
// import HookUseContext from "./component/Hooks/HookUseContext";
import Parent from "./component/Hooks/Parent";
import One from "./component/Hooks/useContext/One";
// import Api from "./component/Api/Api";
// import Api2 from "./component/Api/Api2";

import { createContext } from "react";


const firstName = createContext();
const lastName = createContext();
function App() {
  return (
    <>
      <firstName.Provider value={"Ranjit"}>
        <lastName.Provider value={"Kale"}>

          <Router>
            <Routes>
              <Route path="/hooks" element={<Parent />} />
              {/* <Route path="/hooks" element={<Hooks />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<PageNoteFound />} />
              <Route path="/props" element={<Variables />} />
              <Route path="/about" element={<About />}>
                <Route path="/about/contact-Us" element={<ContactUs />} />
              </Route>
              <Route path="/api" element={<Api4 />} />
              <Route path="/movies" element={<MoviesApi />} />
              <Route path="/PropDrilling" element={<One />} />
            </Routes>
          </Router>


        </lastName.Provider>
      </firstName.Provider>

      {/* <h1>React Notes</h1> */}

      {/* <h1>React Notes</h1>
  <Hooks></Hooks> */}


    </>
  );
}

export default App;
export{firstName,lastName};