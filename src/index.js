import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// For displaying listed items remember write sub chaild in one tag other wise error let's see bellow

ReactDOM.render(
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  , document.getElementById('root'));

// hello world Show
// ReactDOM.render(<div> <h1>Hello world</h1><p>This is paragraph</p> </div>, document.getElementById('root'));
serviceWorker.unregister();
