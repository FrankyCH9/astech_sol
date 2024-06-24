'use client'
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLocationArrow,
  FaMobileAlt,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    return (
      <div className="bg-gray-200 dark:bg-dark mt-14 rounded-t-3xl text-gray-700">
        <div data-aos="fade" className="container">
          <div className="grid md:grid-cols-3 py-4">
            {/* Social handles */}
            <div className="flex flex-col items-center gap-3 mt-6 md:col-span-3 justify-center">
              <h2 className="text-xl font-bold">Siguenos:</h2>
              <div className="flex items-center gap-3">
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaTiktok className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaYoutube className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
  
            {/* Footer Text sections */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Cuentas:</h1>
                  <p className="space-y-3">
                  OBA COMPUTER
                  </p>
                  <p className="space-y-3">
                  BCP: 40594971117008(transferencia sin costo)
                  </p>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <p className="space-y-3">
                  CCI: 00240519497111700891
                  </p>
                  <p className="space-y-3">
                  Interbank: 898-3202537334
                  </p>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3">Yape</h1>
                  <p className="space-y-3">
                  982474946 Oscar R. Ortiz M.
                  </p>
                </div>
              </div>
            </div>
  
            {/* company Details */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                Astech Soluciones
              </h1>
              <p className="text-sm">Ruc: 10722748307</p>
              
              <br />
  
              {/* contact section */}
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Jiron Manuel Gonzales Prada 446 - Cercado Juliaca</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>Oscar: 982474946</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
