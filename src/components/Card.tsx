import React from "react";
import { Link } from "gatsby";
import "./Card.css"; 

const Card = ({ imageUrl, title, subtitle, link }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card Image" className="card-image" />
      <h1 className="card-title">{title}</h1>
      <p className="card-subtitle">{subtitle}</p>
      <Link to={link}>
        <button className="btn">See Recipe..</button>
      </Link>
    </div>
  );
};

export default Card;
