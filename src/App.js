import React, { Fragment } from 'react';
import Header from './components/header/header.component';
import SectionAbout from './components/section-about/section-about.component';
import SectionFeatures from './components/section-features/section-features.component';
import SectionTours from './components/section-tours/section-tours.component';

function App() {
  return (
    <Fragment>
      <Header />
      <SectionAbout />
      <SectionFeatures />
      <SectionTours />
    </Fragment>
  );
}

export default App;
