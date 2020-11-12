import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReactGA from "react-ga";

import "./styles.sass";

export default function SearchPage() {
  const [room, setRoom] = useState("");
  const history = useHistory();

  function handleSubmit() {
    ReactGA.event({
      category: "ROOM",
      action: "Room searched",
      label: "SEARCH_PAGE",
    });

    history.push(room);
  }

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="page-search-container">
      <div className="form-container">
        <h1>Escrevaldo</h1>
        <p>Escreva qualquer coisa</p>

        <form onSubmit={handleSubmit}>
          <ReactGA.OutboundLink
            eventLabel="SEARCH_PAGE_INPUT"
            to="/"
            target="_self"
          >
            <input
              type="text"
              className="room-input"
              value={room}
              onChange={(event) => setRoom(event.target.value)}
              required
              placeholder="Nome da sala"
            />
          </ReactGA.OutboundLink>

          <p className="tip">Você pode criar salas como "nome1/nome2/nome3"</p>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
