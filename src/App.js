import { Fragment } from "react";

import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import Main from "./components/main/Main";
// import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      {/* <Contact /> */}
      <Footer />
    </Fragment>
  );
}

export default App;
