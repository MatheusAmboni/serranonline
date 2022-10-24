import React from 'react';
import Menu from '../../components/Menu'
import BannerMain from '../../components/bannerMain'
import Footer from '../../components/Footer'
import "bootstrap/dist/css/bootstrap.css"

function Home() {
  return (
    <div>
      <Menu />
      <BannerMain />
      <Footer />
    </div>
  );
}

export default Home;