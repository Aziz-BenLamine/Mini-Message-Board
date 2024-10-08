const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

const getMessages = async () => {
  try {
    const messages = await db.getAllMessages();
    console.log("Messages:", messages);
    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

const insertMessage = async (message) => {
  try {
    await db.insertMessage(message);
  } catch (error) {
    console.error("Error inserting message:", error);
    throw error;
  }
};

module.exports = {
  getMessages,
  insertMessage,
};
