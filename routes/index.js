const { Router } = require('express');
const router = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
      },
      {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
      }
];

router.get("/", (req, res)=>{
    res.render("index", {
        title:"Mini-Message-Board",
        messages: messages
    })
})

router.get("/new", (req, res) => {
    res.render("form");
});

router.post("/new", (req, res) => {
    const author = req.body.author;
    const message = req.body.msg;
    const time = new Date();
    messages.push({text: message, user: author, added: time});
    res.redirect("/");
})
module.exports = router;