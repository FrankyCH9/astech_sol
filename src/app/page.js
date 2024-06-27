'use client';

import { useState } from 'react';
import Banner from "./components/banner/banner";
import Carousel from "./components/carrusel/carousel";
import Producto from "./components/products/producto";
import Footer from "./components/Footer/footer";
import WhatsAppButton from './components/whatsap/WhatsAppButton';
import LoginPopup from "./components/login/LoginPop";
import MessengerButton from './components/whatsap/MessengerButton';
import BrandCarousel from './components/Logo/BrandCarousel';
import Allproducts from "./components/allproducts/Allproducts";

export default function Home() {
  const [loginPopup, setLoginPopup] = useState(false);

  const handleLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };

  return (
    <main>
      <Carousel/>
      <Allproducts/>
      <BrandCarousel/>
      <LoginPopup loginPopup={loginPopup} handleLoginPopup={handleLoginPopup} /> 
      <WhatsAppButton/> 
      <MessengerButton/> 
    </main>
  );
}



