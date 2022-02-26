import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Contact from "./pages/Contact";

//* Component - function component.
function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return(
      //JavaScript XML.
      <BrowserRouter>
        <Routes>
          {/*
            * Parent Root Route. Shared Route used to insert common content on all
            * pages. Renders Layout component.
            */}
          <Route path="/" element={<Layout/>}>
              {/*Index attribute specifies this route as the default
                *route for the parent route*/}
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              {/*
                * Catch-all for any undefined URLs.
                */}
              <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>

        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
  );
}

// Modules, export this function.
export default App;
