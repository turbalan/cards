import React, { useState, useContext, useEffect } from "react";
import { CardsListContext } from "./context/CardsListContext";
const CardForm = () => {
  const {
    addCard,
    clearCards,
    editItem,
    editCard,
    addItem,
    setAddItem
  } = useContext(CardsListContext);
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
    if (editItem) {
      editCard(
        editItem.id,
        image,
        title,
        description,
        ctaLink,
        ctaText,
        editItem.pubdate
      );
    } else {
      addCard(image, title, description, ctaLink, ctaText);
      setImage("");
      setTitle("");
      setDescription("");
      setCtaLink("");
      setCtaText("");
    }
  };

  useEffect(() => {
    if (editItem !== null) {
      setImage(editItem.image);
      setTitle(editItem.title);
      setDescription(editItem.description);
      setCtaLink(editItem.ctaLink);
      setCtaText(editItem.ctaText);
    } else {
      setImage("");
      setTitle("");
      setDescription("");
      setCtaLink("");
      setCtaText("");
    }
  }, [editItem]);

  if (editItem || addItem) {
    return (
      <div className="card-form-container">
        <button
          onClick={() => {
            setAddItem(null);
          }}
          className="btn btn--closeAdd"
        >
          <i className="fas fa-times-circle"></i>
        </button>
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
            <button className="btn">
              <i className="fas fa-plus"></i>
              Add card
            </button>
            <button onClick={clearCards} className="btn btn--clearForm">
              <i className="fas fa-times-circle"></i>
              Clear all cards
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return null;
  }
};

export default CardForm;
