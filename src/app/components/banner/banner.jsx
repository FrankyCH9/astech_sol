"use client";
import React, { useState } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaHeart,
  FaShoppingCart,
  FaPlus,
} from "react-icons/fa";
import { styles } from "./bannerstylo"; // Ajusta la ruta según la ubicación de tu archivo de estilos
import "./banner.css";
import Menuproduct from "./componetmenu/Menuproduct";
import * as Datamenu from "../../../../src/app/utils/Datamenu";
import Menuproductmobile from "./componetmenu/Menuproductmobile";

const SearchBar = ({ handleSearch, query, setQuery }) => {
  return (
    <div style={styles.searchBar}>
      <input
        type="text"
        placeholder="¿En qué te ayudo?"
        style={styles.searchInput}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="banner-buscador"
      />
      <button type="submit" style={styles.searchButton} onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
  };

  const [pvisible, setPvisible] = useState({
    product: false,
    profor: false,
    lap: false,
    comp: false,
    distri: false,
  });

  const toggleVisibility = (key) => {
    setPvisible((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/dir//28+de+Julio+125,+Cerro+Colorado+04014/@-16.3945266,-71.5681113,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x91424a76c9ba0c6d:0x97df7301e8fccd6a!2m2!1d-71.5669804!2d-16.391629?entry=ttu', '_blank');
  }


  return (
    <header>
      <div style={styles.bannerContainer} className="allbaner  text-black">
        <div className=" p-2 cont-buscador  ">
          <SearchBar
            handleSearch={handleSearch}
            query={query}
            setQuery={setQuery}
          />
        </div>



        <div className="flex w-full  items-center  ">
          <div className="banner-container">
            <div className="ban " >
              <img
                src="/images/logo.png"
                alt="Logo de Astech Soluciones"
                style={styles.logo}
              />

              <h2 className=" banner-title   ">
                Astech Soluciones
              </h2>
            </div>

            <div style={styles.linksContainer} className="icon-menu ">
              <a href="/pedidos" style={styles.link}>

                <FaUser style={styles.icon} />



              </a>
              <div>
                <FaMapMarkerAlt style={styles.icon} onClick={openGoogleMaps} />
              </div>
              <div className="flex justify-center">
                <FaHeart style={styles.icon} />
                <span style={styles.counter}>0</span>
              </div>
              <div className="flex justify-center">
                <FaShoppingCart style={styles.icon} />
                <span style={styles.counter}>0</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <nav className="px-10 bg-black cont-burguer ">
        <div className="flex justify-between items-center ">
          <button className="md:hidden text-white text-[20px] ml-[-32px]" onClick={toggleMenu}>
            &#9776; {/* Icono de hamburguesa */}
          </button>
        </div>
        <ul
          className={`md:flex md:justify-center md:gap-[5%] navegacion box-border font-medium ${isOpen ? "block" : "hidden"
            } md:block`}
        >
          <li className="menu__list__item itm1 py-4">
            <div className="flex gap-2 justify-between items-center">
              Productos
              <FaPlus
                onClick={() => toggleVisibility("product")}
                className="icon-vermas"
              />
            </div>
            <Menuproduct
              valores={Datamenu.lisMenu}
              subtitulo={"Nuestros Productos"}
            />
            {pvisible.product && (
              <Menuproductmobile valores={Datamenu.lisMenu} />
            )}
            <span className="line-span"></span>
          </li>
          <li className="menu__list__item itm1 py-4">
            <div className="flex gap-2 justify-between items-center">
              Proforma
              <FaPlus
                onClick={() => toggleVisibility("profor")}
                className="icon-vermas"
              />
            </div>
            <Menuproduct
              valores={Datamenu.lisMenuproformas}
              subtitulo={"Proformas"}
            />
            {pvisible.profor && (
              <Menuproductmobile valores={Datamenu.lisMenuproformas} />
            )}
            <span className="line-span"></span>
          </li>
          <li className="menu__list__item itm1 py-4">
            <div className="flex gap-2 justify-between items-center">
              Laptos
              <FaPlus
                onClick={() => toggleVisibility("lap")}
                className="icon-vermas"
              />
            </div>
            <Menuproduct
              valores={Datamenu.lisMenulaptos}
              subtitulo={"Nuestras Laptos"}
            />
            {pvisible.lap && (
              <Menuproductmobile valores={Datamenu.lisMenulaptos} />
            )}

            <span className="line-span"></span>
          </li>
          <li className="menu__list__item itm1 py-4">
            <div className="flex gap-2 justify-between items-center">
              Compu's
              <FaPlus
                onClick={() => toggleVisibility("comp")}
                className="icon-vermas"
              />
            </div>
            <Menuproduct
              valores={Datamenu.listMenucompus}
              subtitulo={"Computadoras"}
            />
            {pvisible.comp && (
              <Menuproductmobile valores={Datamenu.listMenucompus} />
            )}
            <span className="line-span"></span>
          </li>
          <li className="menu__list__item itm1 py-4">
            <div className="flex gap-2 justify-between items-center">
              Distri+
              <FaPlus
                onClick={() => toggleVisibility("distri")}
                className="icon-vermas"
              />
            </div>

            <Menuproduct
              valores={Datamenu.listMenudistribucion}
              subtitulo={"Distribucion"}
            />
            {pvisible.distri && (
              <Menuproductmobile valores={Datamenu.listMenudistribucion} />
            )}
            <span className="line-span"></span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Banner;
