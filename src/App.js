import React, { Component } from 'react';
import Header  from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import TodoItem from './TodoItem';
class App extends Component {
  render() {
    return (
      // i rendered components
      <div className="todo-list" >
          <Header />
          <MainContent />
          <Footer />
          
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </div>
      
    );
  }
}

export default App;
