import React, { useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
    
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handleChange = (e) => {
    // console.log(e)
    setPlayerName(e.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName} </span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol"> {symbol} </span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "save" : "Edit"}</button>
    </li>
  );
}

export default Player;
