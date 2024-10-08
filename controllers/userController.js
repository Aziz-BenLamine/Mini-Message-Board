const db = require("../db/queries");
const asyncHandler = require("express-async-handler");

const getMessages = async () => {
  try {
    const messages = await db.getAllMessages();
    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};
/*
async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  return messages;
  //res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}
*/
async function createUsernameGet(req, res) {
  // render the form
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getMessages,
  createUsernameGet,
  createUsernamePost,
};
