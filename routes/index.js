const { Router } = require("express");
const router = Router();

const userController = require("../controllers/userController");

router.get("/", async (req, res) => {
  try {
    const messages = await userController.getMessages();
    const msgIndex = req.params.msgIndex;
    res.render("index", {
      title: "Mini-Message-Board",
      messages: messages,
      msgIndex,
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).send("Error fetching messages");
  }
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.get("/:msgIndex", async (req, res) => {
  try {
    const messages = await userController.getMessages();
    const msgIndex = req.params.msgIndex;
    res.render("index", {
      title: "Mini-Message-Board",
      messages: [messages[msgIndex]],
      msgIndex,
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).send("Error fetching messages");
  }
});

router.post("/new", async (req, res) => {
  console.log(req.body);
  const author = req.body.author;
  const message = req.body.msg;

  const newMessage = {
    text: message,
    username: author,
    added: new Date(),
  };
  await userController.insertMessage(newMessage);
  res.redirect("/");
});
module.exports = router;
