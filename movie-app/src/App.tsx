import React from 'react';
import classes from './App.module.scss';
import { Footer } from './app/shared/components/Footer/Footer';
import { MainPage } from './app/modules/statefull/MainPage/MainPage';
import { ErrorBoundary } from "./app/core/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <div className={classes.app}>
        <ErrorBoundary>
          <MainPage />
          <Footer />
        </ErrorBoundary>
    </div>
  );
}

export default App;
