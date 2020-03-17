import React, { useState, useEffect } from "react";
import Card from "./Card";
import data from "./data/data.json";

const sortByDateAsc = function(arr) {
  let obj = {
    cards: []
  };
  obj.cards = arr.cards.sort(
    (a, b) => new Date(a.pubdate) - new Date(b.pubdate)
  );
  return obj;
};

const sortByDateDesc = function(arr) {
  let obj = {
    cards: []
  };
  obj.cards = arr.cards.sort(
    (a, b) => new Date(b.pubdate) - new Date(a.pubdate)
  );
  return obj;
};

const sortByName = function(arr) {
  const obj = {
    cards: []
  };
  obj.cards = arr.cards.sort(function(a, b) {
    var titleA = a.title.toUpperCase();
    var titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    // titles must be equal
    return 0;
  });
  return obj;
};

const Cards = () => {
  const [cardData, updateCardData] = useState(data);

  return (
    <article className="cards">
      <header className="card-sorting">
        <button
          className="btn"
          onClick={() => updateCardData(sortByDateAsc(cardData))}
        >
          Newest first
        </button>
        <button
          type="submit"
          onClick={() => updateCardData(sortByDateDesc(cardData))}
        >
          Oldest first
        </button>
        <button
          type="submit"
          onClick={() => updateCardData(sortByName(cardData))}
        >
          Name
        </button>
      </header>
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
