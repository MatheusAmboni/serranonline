import React from 'react';
import Menu from '../../components/Menu'
import amaciante from '../../assets/img/amaciante.jpg'
import Footer from '../../components/Footer'
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Promocoes() {
  return (
    <div>
    <Menu/>
      <Carousel>
      <Carousel.Item>
    <div id="page-promotions">
    <div class="grid-container">
      <div class="grid-item">
        <div class="card">
          <img className="produto" src={amaciante} alt="serrano amaciante"/>
          <div class="container">
            <h4><b>Produto</b></h4>
          </div>
        </div>
      </div>
      <div class="grid-item">
      <div class="card">
          <img className="produto" src={amaciante} alt="serrano amaciante"/>
          <div class="container">
            <h4><b>Produto</b></h4>
          </div>
        </div>
      </div>
      <div class="grid-item">
      <div class="card">
          <img className="produto" src={amaciante} alt="serrano amaciante"/>
          <div class="container">
            <h4><b>Produto</b></h4>
          </div>
        </div>
      </div>
      <div class="grid-item">
      <div class="card">
          <img className="produto" src={amaciante} alt="serrano amaciante"/>
          <div class="container">
            <h4><b>Produto</b></h4>
          </div>
        </div>
      </div>
      <div class="grid-item">
      <div class="card">
          <img className="produto" src={amaciante} alt="serrano amaciante"/>
          <div class="container">
            <h4><b>Produto</b></h4>
          </div>
        </div>
      </div>
      <div class="grid-item">
      <div class="card">
          <img className="produto" src={amaciante} alt="serrano amaciante"/>
          <div class="container">
            <h4><b>Produto</b></h4>
          </div>
        </div>
      </div>
    </div>
    </div>
    </Carousel.Item>
        <Carousel.Item>
    <div id="page-promotions">
    <div class="grid-container">
      <div class="grid-item">
        <div class="card">
          <img className="produto" src={amaciante} alt="serrano amaciante"/>
          <div class="container">
            <h4><b>Produto</b></h4>
          </div>
        </div>
      </div>
      <div class="grid-item">
      <div class="card">
          <img className="produto" src={amaciante} alt="serrano amaciante"/>
          <div class="container">
            <h4><b>Produto</b></h4>
          </div>
        </div>
      </div>
      <div class="grid-item">
      <div class="card">
          <img className="produto" src={amaciante} alt="serrano amaciante"/>
          <div class="container">
            <h4><b>Produto</b></h4>
          </div>
        </div>
      </div>
      <div class="grid-item">
      <div class="card">
          <img className="produto" src={amaciante} alt="serrano amaciante"/>
          <div class="container">
            <h4><b>Produto</b></h4>
          </div>
        </div>
      </div>
      <div class="grid-item">
      <div class="card">
          <img className="produto" src={amaciante} alt="serrano amaciante"/>
          <div class="container">
            <h4><b>Produto</b></h4>
          </div>
        </div>
      </div>
      <div class="grid-item">
      <div class="card">
          <img className="produto" src={amaciante} alt="serrano amaciante"/>
          <div class="container">
            <h4><b>Produto</b></h4>
          </div>
        </div>
      </div>
    </div>
    </div>
    </Carousel.Item>
      </Carousel>
    <Footer />
    </div>
  );
}

export default Promocoes;