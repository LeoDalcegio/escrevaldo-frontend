import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import {
  connect,
  disconnect,
  subscribeToNewText,
  sendMessage,
} from "../../services/socket";

import "./styles.sass";

export default function WritePage() {
  const [text, setText] = useState("");
  const params = useParams();

  const roomName = params[0];

  useEffect(() => {
    disconnect();

    connect(roomName);

    subscribeToNewText((newText) => setText(newText));

    return () => {
      disconnect();
    };
  }, [roomName]);

  useEffect(() => {
    api.post(roomName).then((response) => {
      if (response) setText(response.data.content);
    });
  }, [roomName]);

  const updateText = (text) => {
    setText(text);

    api.put(roomName, {
      content: text,
    });

    sendMessage(text);
  };

  return (
    <div className="page-write-container">
      <textarea
        placeholder="Qualquer coisa"
        value={text}
        onChange={(event) => updateText(event.target.value)}
      />
    </div>
  );
}
