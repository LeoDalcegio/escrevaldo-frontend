import io from "socket.io-client";

const socket = io.connect("http://localhost:3333/", {
  autoConnect: false,
});

function subscribeToNewText(subscribeFunction) {
  socket.on("update-text", subscribeFunction);
}

function connect(room) {
  socket.io.opts.query = {
    room,
  };

  socket.connect();
}

function sendMessage(message) {
  socket.emit("send-message", message);
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewText, sendMessage };
