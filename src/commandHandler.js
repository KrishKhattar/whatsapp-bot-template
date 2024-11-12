export default (client, message) => {
  const command = message.body.slice(1).trim().split(/\s+/)[0];
  const sender = message.from;

  switch (command) {
    case "hello":
      client.sendMessage(sender, "Hello! How can I assist you today?");
      break;
    case "help":
      client.sendMessage(
        sender,
        "Available commands:\n!hello - Greet the bot\n!help - Show help"
      );
      break;
    default:
      client.sendMessage(
        sender,
        "I'm sorry, I didn't understand that command."
      );
  }
};
