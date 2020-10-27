import React, { Fragment } from 'react';
import Header from './components/header/header.component';
import Navigation from './components/navigation/navigation.component';
import SectionAbout from './components/section-about/section-about.component';
import SectionFeatures from './components/section-features/section-features.component';
import SectionTours from './components/section-tours/section-tours.component';
import SectionStory from './components/section-stories/section-stories.component';
import SectionBook from './components/section-book/section-book.component';
import Footer from './components/footer/footer.component';
import Popup from './components/popup/popup.component';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <main>
        <SectionAbout />
        <SectionFeatures />
        <SectionTours />
        <SectionStory />
        <SectionBook />
      </main>
      <Footer />
      <Popup />
    </Fragment>
  );
}

export default App;
