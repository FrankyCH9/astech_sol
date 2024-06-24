'use client'
import React, { useState } from 'react';
import { FaUser, FaMapMarkerAlt, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { styles } from './bannerstylo'; // Ajusta la ruta según la ubicación de tu archivo de estilos
import './banner.css';
import Menuproduct from './componetmenu/Menuproduct';
import * as Datamenu from '../../../../src/app/utils/Datamenu'


const SearchBar = ({ handleSearch, query, setQuery }) => {
  return (
    <div style={styles.searchBar}>
      <input
        type="text"
        placeholder="¿En qué te ayudo?"
        style={styles.searchInput}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" style={styles.searchButton} onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};

const Banner = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', query);
  };


  return (
    <header>
      <div style={styles.bannerContainer} className=''>
        <SearchBar handleSearch={handleSearch} query={query} setQuery={setQuery} />
        <div style={styles.logoContainer}>
          <img src='/images/logo.png' alt="Logo de Astech Soluciones" style={styles.logo} />
        </div>
        <h2 style={styles.title} className="banner">
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
      <nav className='px-10 bg-black '>
        <ul className=" w-full flex justify-center gap-[5%]  box-border font-medium   ">
          <li className="menu__list__item itm1  py-4   ">
            Productos
            <Menuproduct valores={Datamenu.lisMenu} />
            <span className="line-span"></span>
          </li>

          <li className="menu__list__item itm1 py-4">
            Proforma
            <Menuproduct valores={Datamenu.lisMenu} />
            <span className="line-span"></span>
          </li>
          <li className="menu__list__item itm1 py-4">
            Laptos
            <Menuproduct valores={Datamenu.lisMenu} />
            <span className="line-span"></span>
          </li>
          <li className="menu__list__item itm1 py-4" >
            Compu's
            <Menuproduct valores={Datamenu.lisMenu} />
            <span className="line-span"></span>
          </li>
          <li className="menu__list__item itm1 py-4" >
            Distribución
            <Menuproduct valores={Datamenu.lisMenu} />
            <span className="line-span"></span>
          </li>
        </ul>

      </nav>
    </header>

  );
};

export default Banner;
