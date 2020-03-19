import React, { useState, createContext } from "react";
import { v4 as uuid } from "uuid";

export const CardsListContext = createContext();

const CardsListContextProvider = props => {
  const [cards, setCards] = useState([
    {
      id: "5cbf364ea59a5a4bea15bc44",
      image: "https://placekitten.com/500/350",
      title: "Jordan Richter hardware",
      description:
        "Lipslide masonite berm mini ramp Christ air Billy Ruff. Betty stalefish dude boned out Vans Calfornia Daze 1080. 1080 late Memory Screen half-flip handplant ledge. Tommy Guerrero wax rip grip transfer sick yeah. Risers ollie lip feeble nollie Sacto.",
      ctaLink: "https://duckduckgo.com",
      ctaText: "CTA",
      pubdate: "2020-03-08 11:32:51"
    },
    {
      id: "5ca38ed7a59a5a1240731e17",
      image: "https://placekitten.com/500/350",
      title: "Crooked grind shoveit concave",
      description:
        "Aerial steps ho-ho Tracker kidney. Ho-ho 360 hang-up disaster transition. Slappy hang-up carve shinner nosegrind.",
      ctaLink: "https://duckduckgo.com",
      ctaText: "CTA",
      pubdate: "2020-03-08 10:04:52"
    },
    {
      id: "5cab678ca59a5a3a2e3b99a4",
      image: "https://placekitten.com/500/350",
      title: "The Wedge",
      description:
        "Crooked grind shoveit concave baseplate transfer Jim Phillips. Freestyle Jeff Phillips rock and roll air hanger hardware. Body varial speed wobbles lipslide alley oop nose slide.",
      ctaLink: "https://duckduckgo.com",
      ctaText: "CTA",
      pubdate: "2020-03-08 09:09:32"
    },
    {
      id: "5cab51c2a59a5a15555943ed",
      image: "https://placekitten.com/500/350",
      title: "Dude judo air rocket",
      description:
        "Wheels rock and roll Colby Carter nose gap kingpin. Alley oop nosebone body varial wheels slam. Nosepicker Pushead gap goofy footed full-cab sick.",
      ctaLink: "https://duckduckgo.com",
      ctaText: "CTA",
      pubdate: "2020-03-08 19:10:52"
    },
    {
      id: "5ca388e1a59a5a12444ba107",
      image: "https://placekitten.com/500/350",
      title: "Snake nose feeble ollie",
      description:
        "Alley oop kickturn 50-50 boned out quarter pipe coffin. Nose slide invert face plant Ray Barbee flail deck coping. Concave G&S gnar bucket griptape wheels shoveit flail",
      ctaLink: "https://duckduckgo.com",
      ctaText: "CTA",
      pubdate: "2020-03-08 15:23:52"
    }
  ]);
  const [editItem, setEditItem] = useState(null);

  const addCard = (image, title, description, ctaLink, ctaText) => {
    setCards([
      ...cards,
      { id: uuid(), image, title, description, ctaLink, ctaText }
    ]);
  };

  const removeCard = id => {
    setCards(cards.filter(card => card.id !== id));
  };

  const clearCards = () => {
    setCards([]);
  };

  const findCard = id => {
    const item = cards.find(card => card.id === id);
    setEditItem(item);
  };

  const editCard = (id, image, title, description, ctaLink, ctaText) => {
    const newCards = cards.map(item => {
      item.id === id
        ? { id, image, title, description, ctaLink, ctaText }
        : item;
    });
    setCards(newCards);
    setEditItem(null);
  };

  return (
    <CardsListContext.Provider
      value={{
        cards,
        addCard,
        removeCard,
        clearCards,
        findCard,
        editCard,
        editItem
      }}
    >
      {props.children}
    </CardsListContext.Provider>
  );
};

export default CardsListContextProvider;
