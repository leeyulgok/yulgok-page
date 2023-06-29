import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import Main from "./components/main/Main";
import Resume from "./components/contents/Resume/Resume";
import Projects from "./components/contents/Projects/Projects";
import Contact from "./components/contents/Contact/Contact";

import Loading from "./components/UI/Loading";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [routes, setRoutes] = useState([]);

  const getRoutes = () => {
    const routes = [
      { path: "/", component: <Main />, key: "/" },
      { path: "/resume", component: <Resume />, key: "/resume" },
      { path: "/projects", component: <Projects />, key: "/projects" },
      { path: "/contact", component: <Contact />, key: "/contact" },
    ];
    setRoutes(routes);
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getRoutes();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Header />
      <TransitionGroup>
        {loading ? (
          <Loading />
        ) : (
          <Routes>
            {routes.map(({ path, component, key }) => (
              <Route
                key={key}
                path={path}
                element={
                  <CSSTransition
                    key={key}
                    in={true}
                    timeout={500}
                    classNames="page-transition"
                    unmountOnExit
                  >
                    <div>{component}</div>
                  </CSSTransition>
                }
              />
            ))}
          </Routes>
        )}
      </TransitionGroup>
      <Footer />
    </Router>
  );
};

export default App;
