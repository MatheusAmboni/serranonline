import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="logo" src={Logo} alt="serrano Logo"/>
            </a>
       <div className="botoes">
        <Button as="a" href="/">
            Login
        </Button> 
        <Button as="a" href="/">
            Cadastro
        </Button>
        </div> 
        </nav>
    );
}

export default Menu;