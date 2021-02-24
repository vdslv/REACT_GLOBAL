import React from 'react';
import classes from './App.module.scss';
import { Footer } from './app/shared/components/Footer/Footer';
import { MainPage } from './app/modules/statefull/MainPage/MainPage';

function App() {
  return (
    <div className={classes.app}>
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
