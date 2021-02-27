import React from 'react';
import classes from './App.module.scss';
import { Footer } from './app/shared';
import { MainPage } from './app/pages/MainPage';
import { ErrorBoundary } from './app/core';

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
