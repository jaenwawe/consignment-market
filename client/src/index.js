import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'; 


import "jquery";
import "react-popper";
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"
// import 'styles/index.css';
import './style/index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
 
//   document.getElementById('root')
// );


//llearn-co-students/08-react-router

ReactDOM.render(
  <Router>
      <App />
  </Router>, 
  document.getElementById("root")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
