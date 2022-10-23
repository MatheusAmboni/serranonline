import React from 'react';
import './styles.css'
import amaciante from '../../assets/img/amaciante.jpg'
import papelhigienico from '../../assets/img/papelhigienico.jpg'
export default function BannerMain() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <h1>Serrano Distribuidora</h1>
          <h1>Embalagens e descartáveis</h1>
        </div>
          <div>
            <img className="amaciante" src={amaciante}/>
          </div>
          <div>
            <img className="papel" src={papelhigienico}/>
          </div>
      </div>
    </div>
  );
}
