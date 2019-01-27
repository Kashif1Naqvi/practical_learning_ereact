import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import MyInfo from './components/MyInfo';
ReactDOM.render(<MyInfo/>,document.getElementById('root'));

//----------------------------Funtional component start---------------------------

// // functional components remembers that first letter must be a capital
// function MyApp(){
//   return(
//     <div>
//       <ol>
//         <li>name</li>
//         <li>program</li>
//         <li>Developer</li> 
//       </ol>
//       <ul>
//         <li>Kashif naqvi</li>
//         <li>BS Computer Science</li>
//         <li>Master in Development</li>
//       </ul>
//     </div>
//   )
// }
// // i can close this in single tag because this is reactJs
// ReactDOM.render(<MyApp />, document.getElementById('root'));
//----------------------------Funtional component End---------------------------




//----------------------------Display list start---------------------------

// For displaying listed items remember write sub chaild in one tag other wise error let's see bellow

// ReactDOM.render(
//   <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//   </ul>
//   , document.getElementById('root'));



//----------------------------Display list End---------------------------



//----------------------------Show Hello world start---------------------------

// hello world Show
// ReactDOM.render(
// <div>
//   <h1>Hello world</h1>
//   <p>This is paragraph</p> 
// </div>,
//  document.getElementById('root'));





//----------------------------Show Hello world End---------------------------

serviceWorker.unregister();
