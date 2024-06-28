'use client'
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Image from 'next/image';
import { IoLocationSharp } from "react-icons/io5";
import './ubicacion.css'; // Asegúrate de importar tu archivo CSS

// Icono personalizado para el marcador
const customIconUrl = "/images/ubi.png";
const customIcon = new L.Icon({
    iconUrl: customIconUrl,
    iconSize: [38, 38]
});

// Componente funcional para la ubicación
const Ubicaciongps = () => {
    // Función para abrir Google Maps al hacer clic en el marcador
    const openGoogleMaps = () => {
        window.open('https://www.google.com/maps/dir//28+de+Julio+125,+Cerro+Colorado+04014/@-16.3945266,-71.5681113,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x91424a76c9ba0c6d:0x97df7301e8fccd6a!2m2!1d-71.5669804!2d-16.391629?entry=ttu', '_blank');
    };

    return (
        <div className="ubicacion-container">
            <div className="ubicacion-content">
                {/* Contenedor para la imagen y detalles de la ubicación */}
                <div className="ubicacion-image-container">
                    <h2>Ubícanos en:</h2>
                    <p>28 de Julio 125, Cerro Colorado 04014</p>
                    <img
                        src="https://img.freepik.com/foto-gratis/fondo-pantalla-arbol-luna-arte-digital_23-2150918811.jpg"
                        alt="Imagen de ubicación"
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', marginBottom: '50px' }}
                    />
                    
                </div>

                {/* Contenedor para el mapa */}
                <div className="ubicacion-map-container">
                    <MapContainer center={[-16.391629, -71.5669804]} zoom={17} scrollWheelZoom={false} className='ubi z-0' style={{ height: "400px", width: "100%" }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {/* Marcador con popup */}
                        <Marker position={[-16.391629, -71.5669804]} icon={customIcon} eventHandlers={{ click: openGoogleMaps }}>
                            <Popup>
                                Aquí está nuestra tienda.
                                <br />
                                <Image
                                    src={'/images/ubi.png'}
                                    alt="Nuestra tienda"
                                    width={200}
                                    height={150}
                                    className="opacity-100"
                                />
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Ubicaciongps;