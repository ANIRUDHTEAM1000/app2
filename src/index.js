import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SuccessPage from './SuccessPage'
import Error from './Error'
import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Switch>
          <Route path="/error" exact children={<Error />} />      
          <Route path="/" exact children={<App />} />
          <Route path="/success" exact children={<SuccessPage />} />
          <Route path="/:id" exact children={<App />} />      
   </Switch>
</BrowserRouter>
);

reportWebVitals();
