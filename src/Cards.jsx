import React, { useContext } from "react";
import { CardsListContext } from "./context/CardsListContext";
import Card from "./Card";

const Cards = () => {
  const { cards } = useContext(CardsListContext);
  return (
    <article className="cards">
      {cards.length ? (
        cards.map(card => <Card card={card} key={card.id} />)
      ) : (
        <div>Nothing to render</div>
      )}
    </article>
  );
};

export default Cards;
