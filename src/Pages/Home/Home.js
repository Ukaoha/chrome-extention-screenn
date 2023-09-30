import React from 'react';
import HeroSection from '../../Components/Home/HeroSection';

import Features from '../../Components/Home/Features';
import HowitWorks from '../../Components/Home/Howitworks';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div>
                          < HeroSection/>
                          <div>
                            <Features/>
                          </div>
                          <div>
                            <HowitWorks/>
                          </div>
                          <Footer/>
                          </div>



  );
};

export default Home;
