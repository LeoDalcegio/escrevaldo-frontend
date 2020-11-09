import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./styles.sass";

export default function SearchPage() {
  const [room, setRoom] = useState("");
  const history = useHistory();

  // TODO:
  //
  // Validação da room
  //
  function handleSubmit() {
    history.push(room);
  }

  return (
    <div className="page-search-container">
      <div className="form-container">
        <h1>Escrevaldo (logo)</h1>
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
          <p>Você pode criar salas como "nome/outro-nome/teste"</p>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
