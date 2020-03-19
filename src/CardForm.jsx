import React, { useState, useContext } from "react";
import { CardsListContext } from "./context/CardsListContext";
const CardForm = () => {
  const { addCard, clearCards } = useContext(CardsListContext);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ctaLink, setCtaLink] = useState("");
  const [ctaText, setCtaText] = useState("");

  const handleChange = e => {
    if (e.target.id === "image") {
      setImage(e.target.value);
    } else if (e.target.id === "title") {
      setTitle(e.target.value);
    } else if (e.target.id === "description") {
      setDescription(e.target.value);
    } else if (e.target.id === "ctaLink") {
      setCtaLink(e.target.value);
    } else if (e.target.id === "ctaText") {
      setCtaText(e.target.value);
    } else return;
  };

  const handleSubmit = e => {
    e.preventDefault();
    addCard(image, title, description, ctaLink, ctaText);
    setImage("");
    setTitle("");
    setDescription("");
    setCtaLink("");
    setCtaText("");
  };

  return (
    <div className="card-form-container">
      <form onSubmit={handleSubmit} className="cards-form">
        <input
          onChange={handleChange}
          id="image"
          type="text"
          placeholder="Add image URL..."
          value={image}
          required
        />
        <input
          onChange={handleChange}
          id="title"
          type="text"
          placeholder="Add Title..."
          value={title}
          required
        />
        <input
          onChange={handleChange}
          id="description"
          type="text"
          placeholder="Add description"
          value={description}
          required
        />
        <input
          onChange={handleChange}
          id="ctaLink"
          type="text"
          placeholder="CTA Link URL..."
          value={ctaLink}
          required
        />
        <input
          onChange={handleChange}
          id="ctaText"
          type="text"
          placeholder="CTA Link Text..."
          value={ctaText}
          required
        />
        <div className="actions">
          <button className="btn">Add card</button>
          <button onClick={clearCards} className="btn">
            Clear all cards
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
