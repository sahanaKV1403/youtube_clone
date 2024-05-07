import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //used to highlight possible problems
  <React.StrictMode> 
    <BrowserRouter>
      <App />
      {/* calls app.js */}
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();

// npx create-react-app youtube/ (i) npm install create-react-app (ii)create-react-app youtube : to create new project
//npm start : to execute / run
// npm: node package Manager (to install packages);
// npx: node package execute (executes any package even without installing)
//npm install react-router-dom (for routing: BrowserRouter -> Routes -> Route)
//npm install moment (formatting date and time)
//project name should not start with caps letter. Component nmaes must start with caps letter.
