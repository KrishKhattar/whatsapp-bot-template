import commandHandler from "./commandHandler.js";

export default (client, message) => {
  const messageContent = message.body.trim();

  if (messageContent.startsWith("!")) {
    commandHandler(client, message);
  } else {
    client.sendMessage(
      message.from,
      "Hello! Type !help for a list of commands."
    );
  }
};
