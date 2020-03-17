import React from "react";

const Card = props => {
  const { image, title, description, ctaLink } = props;
  return (
    <section className="card">
      <figure className="card-image">
        <img src={image} alt={title} />
      </figure>
      <div className="card-info">
        <h1 className="card-title">{title}</h1>
        <p className="card-text">{description}</p>
        <div className="actions">
          <a hred={ctaLink} className="btn">
            {props.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card;
