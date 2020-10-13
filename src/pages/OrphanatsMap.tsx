import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 

import mapmapMarketImg from '../Images/Logo.svg';
import { FiPlus } from 'react-icons/fi';
import '../Styles/Pages/orphanages-map.css';

function OrphanatsMap() {
  return (
    <div id="page-map"> 
      <aside>
        <header>
          <img src={mapmapMarketImg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando por você :)</p>
        </header>
  
        <footer>
          <strong>Vitoria</strong>
          <span>Espirito Santo</span>
        </footer>
      </aside>

      <Map  center={[-20.2821776, -40.3557449]} zoom={12} style={{ width:'100%', height:'100%' }}>
        <TileLayer url={`https://api.mapbox.com/style/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?acess_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
      </Map>

      <Link to="/" className='create-orphanage'>
        <FiPlus size={32} color='#FFF' />
      </Link>
    </div>
  )
}

export default OrphanatsMap;