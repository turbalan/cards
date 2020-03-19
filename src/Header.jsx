import React, { useEffect, useState, useContext } from "react";
import { CardsListContext } from "./context/CardsListContext";

const Header = () => {
  const [sortedBy, updateSortyedBy] = useState("");
  const {
    cards,
    setCards,
    sortByDateAsc,
    sortByDateDesc,
    sortByName
  } = useContext(CardsListContext);

  return (
    <header className="cards-sorting">
      Sort by:
      <button
        className={`btn ${sortedBy == `descending` ? `is-active` : ``}`}
        onClick={() => {
          sortByDateDesc(cards);
          updateSortyedBy("descending");
        }}
      >
        Oldest first
      </button>
      <button
        className={`btn ${sortedBy == `ascending` ? `is-active` : ``}`}
        onClick={() => {
          sortByDateAsc(cards);
          updateSortyedBy("ascending");
        }}
      >
        Newest first
      </button>
      <button
        className={`btn ${sortedBy == `byName` ? `is-active` : ``}`}
        onClick={() => {
          updateSortyedBy("byName");
          sortByName(cards);
        }}
      >
        Name
      </button>
    </header>
  );
};

export default Header;
