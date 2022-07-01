import { useCallback, useEffect, useState } from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import { menuUrl } from './api/apiUrls';
import baseAPI from './api/baseAPI';
import Footer from './layout/Footer';
import Header from './layout/Header';
import AboutAgency from './pages/Agency/AboutAgency';
import Leadership from './pages/Agency/Leadership';
import Youth from './pages/Agency/Youth';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import SiteMap from './pages/SiteMap';
import routes from "./Routes";

function App() {
  // let element = useRoutes(routes);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path='category'> */}
        <Route path='page/:slug' element={<AboutAgency />} />
        <Route path='leader/:slug' element={<Leadership />} />
        <Route path="news/:slug" element={<Youth />} />
        {/* </Route> */}
        <Route path='contact' element={<Contacts />} />
        <Route path='sitemap' element={<SiteMap />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
