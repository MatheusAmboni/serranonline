import React from "react";
import PropTypes from "prop-types";
import "./card.css";
import { Button } from "react-bootstrap";

const Card = (props) => {
  return (
    <article
      className="card"
      style={{ width: props.carWidth ? props.carWidth : "250px" }}
    >
      <div
        className="card-image"
        style={{ height: props.imageHeight ? props.imageHeight : "250px" }}
      >
        <img alt="" src={`${props.imageUrl}`} />
      </div>
      <div className="card-content">
        <h2>{props.title}</h2>
        <p>{props.body}</p>
        {/* {props.isShown && (
        <div>
          <h2>Deu certo</h2>
        </div>
      )} */}
      <Button onClick={props.myFunction} > Validar Promoção</Button>
      </div>
    </article>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  carWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  title: PropTypes.string.isRequired,
  // isShown: PropTypes.object,  
  myFunction: PropTypes.func,
};

export default Card;
