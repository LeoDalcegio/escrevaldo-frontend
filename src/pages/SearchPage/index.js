import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./styles.sass";

export default function SearchPage() {
  const [room, setRoom] = useState("");
  const history = useHistory();

  function handleSubmit() {
    history.push(room);
  }

  return (
    <div className="page-search-container">
      <div className="form-container">
        <h1>Escrevaldo</h1>
        <p>Escreva qualquer coisa</p>

        <form onSubmit={handleSubmit} netlify>
          <input
            type="text"
            className="room-input"
            value={room}
            onChange={(event) => setRoom(event.target.value)}
            required
            placeholder="Nome da sala"
          />
          <p className="tip">Você pode criar salas como "nome1/nome2/nome3"</p>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
