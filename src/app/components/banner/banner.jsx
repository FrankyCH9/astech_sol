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

  return (
    <header>
      <div style={styles.bannerContainer} className="allbaner text-black">
        <div className=" p-2 cont-buscador  ">
          <SearchBar
            handleSearch={handleSearch}
            query={query}
            setQuery={setQuery}
          />
        </div>

        <div className="flex w-full">
          <div style={styles.logoContainer}>
            <img
              src="/images/logo.png"
              alt="Logo de Astech Soluciones"
              style={styles.logo}
            />
          </div>
          <h2 style={styles.title} className="banner  ">
            Astech Soluciones
          </h2>
          <div style={styles.linksContainer}>
            <a href="/pedidos" style={styles.link}>
              <FaUser style={styles.icon} />
              Orders & Sign In
            </a>
            <FaMapMarkerAlt style={styles.icon} />
            <FaHeart style={styles.icon} />
            <span style={styles.counter}>0</span>
            <FaShoppingCart style={styles.icon} />
            <span style={styles.counter}>0</span>
          </div>
        </div>
      </div>

      <nav className="px-10 bg-black  ">
        <div className="flex justify-between items-center ">
          <button className="md:hidden text-white" onClick={toggleMenu}>
            &#9776; {/* Icono de hamburguesa */}
          </button>
        </div>
        <ul
          className={`md:flex md:justify-center md:gap-[5%] navegacion box-border font-medium ${
            isOpen ? "block" : "hidden"
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
