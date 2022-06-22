import React from 'react'
import BlockBanner from './BlockBanner';
import ContentNewsTab from './ContentNewsTab';
import FerganaMap from './FerganaMap';
import HomeGallery from './HomeGallery';
import MainNews from './MainNews'
import MyGovBanner from './MyGoyBanner';
import "./style.scss";

function Home() {
  return (
    <section className='home'>
      <MainNews />
      <ContentNewsTab />
      <HomeGallery />
      <MyGovBanner />
      <BlockBanner />
      <FerganaMap />
    </section>
  )
}

export default Home