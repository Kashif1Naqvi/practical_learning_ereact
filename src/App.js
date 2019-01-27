import React, { Component } from 'react';
import Header  from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
class App extends Component {
  render() {
    return (
      // i rendered components
      <div>
          <Header />
          <MainContent />
          <Footer />
      </div>
    );
  }
}

export default App;
