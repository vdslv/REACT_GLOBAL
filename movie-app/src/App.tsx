import React from "react";
import classes from "./App.module.scss";
import MainBody from "../../movie-app/src/app/modules/statefull/MainBody/MainBody";
import { Footer } from './app/shared/components/Footer/Footer';

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.app__content}>
        <MainBody />
      </div>
      <Footer />
    </div>
  );
}

export default App;
