import { Fragment } from "react";

import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import Main from "./components/main/Main";
import Resume from "./components/contents/Resume/Resume";
import Projects from "./components/contents/Projects/Projects";
import Contact from './components/contents/Contact/Contact';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
