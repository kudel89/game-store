import React from "react";
import "./game-item.css";

export const GameItem = ({ game }) => {
  return (
    <div className="game-item">
      <div className="game-item-details">
        <span className="game-item-title">{game.title}</span>
        <div className="game-item-genres">
          {game.genres.map((genre) => genre)}
        </div>
        <p className="game-item-description">{game.description}</p>
        <button className="game-item-buy">Buy</button>
      </div>
    </div>
  );
};
