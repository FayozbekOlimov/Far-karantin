import React, { Suspense } from 'react';
import { render } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import "./static/styles/style.scss";
import "./static/styles/responsive.scss";

render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>, document.getElementById('root')
)
reportWebVitals();
