import React from 'react';
import './styles.css'
import amaciante from '../../assets/img/amaciante.jpg'
import papelhigienico from '../../assets/img/papelhigienico.jpg'
import Button from '../Button';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function BannerMain() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container1">
        <div className="logo-container">
          <h1>Serrano Distribuidora</h1>
          <h1>Embalagens e descartáveis</h1>
        </div>
          <div>
            <Carousel>
            <Carousel.Item>
              <img className="amaciante" src={amaciante}/>
            </Carousel.Item>
            <Carousel.Item>
              <img className="papel" src={papelhigienico}/>
              </Carousel.Item>
            </Carousel>
            <Button as="a" href="/promocoes">
              Acesse aqui as promoções
            </Button> 
          </div>
      </div>
    </div>
  );
}
