import React from 'react';
import { useState } from 'react';
import Menu from '../../components/Menu'
import papelhigienico from '../../assets/img/papelhigienico.jpg'
import Footer from '../../components/Footer'
import './styles.css';
import Card from '../../components/Card/card';
import { Button } from "react-bootstrap";

function Promocoes() {
  const [isShown, setIsShown] = useState(false);

  const myFunction = event => {
    //linka com o banco  
  }

  return (
    <div>
      <Menu/>
      <div id="page-promotions">
          {/* <Button  id="btnAnterior">Anterior</Button> */}
          <div class='grid-container'>
              <Card
                imageUrl={papelhigienico}
                title="Papel Higiênico"
                carWidth={300}
                imageHeight={150}
                isShown={isShown}
                myFunction={myFunction}
              />
          </div>
          {/* <Button id="">Próximo</Button> */}
      </div>
      <Footer />
    </div>
  );
}



export default Promocoes;