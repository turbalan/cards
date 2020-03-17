import React from "react";
import Card from "./Card";
import data from "./data/data.json";

const Cards = () => {
  console.log(data);

  return (
    <article className="cards">
      {data.cards.map(card => {
        return (
          <Card
            key={card.id}
            title={card.title}
            image={card.image}
            description={card.description}
            ctaText={card.ctaText}
            ctaLink={card.ctaLink}
          />
        );
      })}
    </article>
  );
};

export default Cards;
