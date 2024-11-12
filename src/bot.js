import qrcode from "qrcode-terminal";
import { Client } from "whatsapp-web.js";
import messageHandler from "./messageHandler.js";

const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("WhatsApp bot is ready!");
});

client.on("message", (message) => {
  messageHandler(client, message);
});

client.initialize();
