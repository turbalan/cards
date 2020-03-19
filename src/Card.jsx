import React, { useContext } from "react";
import { CardsListContext } from "./context/CardsListContext";

const Card = ({ card }) => {
  const { removeCard, findCard } = useContext(CardsListContext);
  return (
    <section className="card">
      <figure className="card-image">
        <img src={card.image} alt={card.title} />
      </figure>
      <div className="card-info">
        <h1 className="card-title">{card.title}</h1>
        <p className="card-text">{card.description}</p>
        <div className="actions">
          <a href={card.ctaLink} className="btn">
            {card.ctaText}
          </a>
        </div>
        <div className="buttons">
          <button className="btn" onClick={() => removeCard(card.id)}>
            <i className="fas fa-trash-alt"></i>
          </button>
          <button className="btn" onClick={() => findCard(card.id)}>
            <i className="fas fa-pencil-alt"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Card;
