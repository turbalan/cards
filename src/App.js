import React from "react";
import ReactDOM from "react-dom";
import CardsListContextProvider from "./context/CardsListContext";
import CardForm from "./CardForm";
import Cards from "./Cards";

const App = () => {
  return (
    <CardsListContextProvider>
      <CardForm />
      <Cards />
    </CardsListContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
