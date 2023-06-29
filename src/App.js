import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import Main from "./components/main/Main";
import Resume from "./components/contents/Resume/Resume";
import Projects from "./components/contents/Projects/Projects";
import Contact from "./components/contents/Contact/Contact";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <TransitionGroup>
        <Routes>
          <Route
            path="/"
            element={
              <CSSTransition
                key={"/"}
                in={true}
                timeout={300}
                classNames="page-transition"
                unmountOnExit
              >
                <Main />
              </CSSTransition>
            }
          />
          <Route
            path="/resume"
            element={
              <CSSTransition
                key={"/resume"}
                in={true}
                timeout={300}
                classNames="page-transition"
                unmountOnExit
              >
                <Resume />
              </CSSTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <CSSTransition
                key={"/projects"}
                in={true}
                timeout={300}
                classNames="page-transition"
                unmountOnExit
              >
                <Projects />
              </CSSTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <CSSTransition
                key={"/contact"}
                in={true}
                timeout={300}
                classNames="page-transition"
                unmountOnExit
              >
                <Contact />
              </CSSTransition>
            }
          />
        </Routes>
      </TransitionGroup>
      <Footer />
    </Router>
  );
};

export default App;
