import React, { Fragment } from 'react';
import Header from './components/header/header.component';
import Main from './components/main/main.component';
import FeaturesSection from './components/section-features/section-features.component';

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <FeaturesSection />
    </Fragment>
  );
}

export default App;
