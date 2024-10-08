const { Router } = require("express");
const router = Router();

const userController = require("../controllers/userController");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

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

router.get("/:msgIndex", (req, res) => {
  const msgIndex = req.params.msgIndex;
  res.render("index", {
    title: "Mini-Message-Board",
    messages: [messages[msgIndex]],
    msgIndex,
  });
});

router.post("/new", (req, res) => {
  console.log(req.body);
  const author = req.body.author;
  const message = req.body.msg;
  messages.push({ text: message, user: author, added: new Date() });
  res.redirect("/");
});
module.exports = router;
