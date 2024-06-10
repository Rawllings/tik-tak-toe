import React, { useState } from "react";

function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
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
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol"> {symbol} </span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "save" : "Edit"}</button>
    </li>
  );
}

export default Player;
