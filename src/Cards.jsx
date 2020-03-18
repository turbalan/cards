import React, { useState, useEffect } from "react";
import Card from "./Card";
import data from "./data/data.json";

// Sort by newest first
const sortByDateDesc = function(arr) {
  // copy the structure of the data.json
  let obj = {
    cards: []
  };
  obj.cards = arr.cards.sort(
    (a, b) => new Date(a.pubdate) - new Date(b.pubdate)
  );
  return obj;
};

// Sort by oldest first
const sortByDateAsc = function(arr) {
  // copy the structure of the data.json
  let obj = {
    cards: []
  };
  obj.cards = arr.cards.sort(
    (a, b) => new Date(b.pubdate) - new Date(a.pubdate)
  );
  return obj;
};

// Sort alphabetically
const sortByName = function(arr) {
  // copy the structure of the data.json
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
  // Initiate state
  const [cardData, updateCardData] = useState(data);
  const [sortedBy, updateSortyedBy] = useState("");

  return (
    <article className="cards">
      <header className="cards-sorting">
        Sort by:
        <button
          className={`btn ${sortedBy == `descending` ? `is-active` : ``}`}
          onClick={() => {
            updateCardData(sortByDateDesc(cardData));
            updateSortyedBy("descending");
          }}
        >
          Newest first
        </button>
        <button
          className={`btn ${sortedBy == `ascending` ? `is-active` : ``}`}
          onClick={() => {
            updateCardData(sortByDateAsc(cardData));
            updateSortyedBy("ascending");
          }}
        >
          Oldest first
        </button>
        <button
          className={`btn ${sortedBy == `byName` ? `is-active` : ``}`}
          onClick={() => {
            updateCardData(sortByName(cardData));
            updateSortyedBy("byName");
          }}
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
