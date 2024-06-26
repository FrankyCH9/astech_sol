'use client'
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLocationArrow,
  FaMobileAlt,
  FaYoutube,
  FaMoneyCheckAlt // Importamos un ícono genérico de dinero
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-200 dark:bg-dark mt-14 rounded-t-3xl text-gray-700">
      <div data-aos="fade" className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 py-4 gap-8">
          
          {/* Social handles */}
          <div className="flex flex-col items-center gap-3 mt-6 md:col-span-3 justify-center">
            <h2 className="text-2xl font-bold mb-4">Síguenos:</h2>
            <div className="flex space-x-6">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-3xl hover:text-primary transition duration-300" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-3xl hover:text-primary transition duration-300" />
              </a>
              <a href="#" aria-label="TikTok">
                <FaTiktok className="text-3xl hover:text-primary transition duration-300" />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube className="text-3xl hover:text-primary transition duration-300" />
              </a>
            </div>
          </div>

          {/* Footer Text sections */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className=" rounded-lg  p-6">
              <h1 className="text-xl font-bold mb-3">Cuentas:</h1>
              <p className="mb-1">OBA COMPUTER</p>
              <p className="mb-1">BCP: 40594971117008 (transferencia sin costo)</p>
              <p className="mb-1">CCI: 00240519497111700891</p>
              <p className="mb-1">Interbank: 898-3202537334</p>
            </div>
            <div className=" rounded-lg  p-6">
              <h1 className="text-xl font-bold mb-3">Yape</h1>
              <div className="flex items-center gap-2">
                <FaMoneyCheckAlt className="text-3xl text-primary" />
                <p>982474946 Oscar R. Ortiz M.</p>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className=" rounded-lg  p-6">
            <h1 className="text-2xl font-bold mb-3">Astech Soluciones</h1>
            <p className="text-sm mb-2">RUC: 10722748307</p>
            <div className="flex items-center mb-2">
              <FaLocationArrow className="text-xl mr-2" />
              <p>Jirón Manuel Gonzales Prada 446 - Cercado Juliaca</p>
            </div>
            <div className="flex items-center">
              <FaMobileAlt className="text-xl mr-2" />
              <p>Oscar: 982474946</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
