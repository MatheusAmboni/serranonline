import React from 'react';
import { useState } from 'react';
import Menu from '../../components/Menu'
import papelhigienico from '../../assets/img/papelhigienico.jpg'
import amaciante from '../../assets/img/amaciante.jpg'
import Footer from '../../components/Footer'
import './styles.css';
import Card from '../../components/Card/card';
import { Button } from "react-bootstrap";

function Promocoes() {
  const [isShown, setIsShown] = useState(false);

  const myFunction = event => {
    setIsShown(current => !current);  
  }

  const products = [
    {id: 1, title: 'primeiro', image: papelhigienico},
    {id: 1, title: 'segundo', image: amaciante},
  ];

  return (
    <div>
      <Menu/>
      <div id="page-promotions">
          <Button  id="btnAnterior">Anterior</Button>
          <div className='products-container'>
            <ul>
              {products.map((product) =>
                  <Card key={product.id} title={product.title} imageUrl={product.image} isShown={isShown} myFunction={myFunction} />
              )}
            </ul>
          </div>
          <Button id="">Próximo</Button>
      </div>
      <Footer />
    </div>
  );
}



export default Promocoes;