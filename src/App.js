import React from "react";
import ReactDOM from "react-dom";
import CardsListContextProvider from "./context/CardsListContext";
import CardForm from "./CardForm";
import Cards from "./Cards";
import Header from "./Header";

const App = () => {
  return (
    <CardsListContextProvider>
      <Header />
      <CardForm />
      <Cards />
    </CardsListContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
