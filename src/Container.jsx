import update from "immutability-helper";
import { useState } from "react";
import Card from "./Card";
import data from "./data.json";

const style = {
  width: 400,
};

const Container = () => {
  const [cards, setCards] = useState(data);

  const moveCard = (dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  };

  return (
    <div style={style}>
      {cards.map(({ id, text }, i) => (
        <Card key={id} index={i} id={id} text={text} moveCard={moveCard} />
      ))}
    </div>
  );
};

export default Container;
