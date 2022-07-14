import { useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { menuUrl } from './api/apiUrls';
import baseAPI from './api/baseAPI';
import NewsDetail from './components/NewsDetail';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Agency from './pages/Agency';
import AboutAgency from './pages/Agency/AboutAgency';
import Leadership from './pages/Agency/Leadership';
import Representatives from './pages/Agency/Representatives';
import Youth from './pages/Agency/Youth';
import Contacts from './pages/Contacts';
import ExpiredNormativeDocuments from './pages/Documents/ExpiredNormativeDocuments';
import GalleryView from './pages/GalleryView';
import Home from './pages/Home';
import FotoGallery from './pages/InformationServices/FotoGallery';
import Videos from './pages/InformationServices/Videos';
import PageNotFound from './pages/PageNotFound';
import Search from './pages/Search';
import SiteMap from './pages/SiteMap';
import Symbols from './pages/Symbols';
import { MenuItemInfoType, MenuUrlResType } from './types';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [menuUrls, setMenuUrls] = useState<MenuItemInfoType>([]);

  const getMenuUrls = useCallback(() => {
    setLoading(true);
    baseAPI.fetchAll<MenuUrlResType>(menuUrl)
      .then((res) => {
        if (res.data[0].status === "200") {
          setMenuUrls(res.data[0].data);
          setLoading(false);
        }
      })
      .catch(e => console.log('Error:', e.message));
  }, []);

  useEffect(() => {
    getMenuUrls();
  }, [getMenuUrls])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        {menuUrls.map(menu => (
          <Route key={menu.menuName} path={`/${menu.to}`} element={<Agency to={menu.to} />}>
            <Route path='page/:slug' element={<AboutAgency />} />
            <Route path='leader/:slug' element={<Leadership />} />
            <Route path='news/:slug' element={<Youth />} />
            <Route path='file/:slug' element={<ExpiredNormativeDocuments />} />
            <Route path='c-action/video' element={<Videos />} />
            <Route path='c-action/contact-form' element={<Contacts />} />
            <Route path='c-action/gallery' element={<FotoGallery />} />
            <Route path='c-action/management' element={<Representatives />} />
          </Route>
        ))}
        <Route path='news-detail/:slug' element={<NewsDetail />} />
        <Route path='gallery-detail/:slug' element={<GalleryView />} />
        <Route path='contact' element={<Contacts />} />
        <Route path='sitemap' element={<SiteMap />} />
        <Route path='symbols' element={<Symbols />} />
        <Route path='search' element={<Search />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
