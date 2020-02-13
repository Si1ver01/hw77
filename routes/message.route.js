const { Router } = require("express");
const nanoid = require("nanoid");
const upload = require("../multer");
const { readBD, writeBD } = require("../fileDB");

const router = Router();

router.get("/", (req, res) => {
  try {
    const data = readBD();
    res.status(200).json({ data });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.post("/", upload.single("image"), (req, res) => {
  let { author, message } = req.body;
  let filename = null;

  if (!message) {
    return res.status(400).json({ error: "Message is empty" });
  }

  if (req.file) {
    filename = req.file.filename;
  }

  if (!author) {
    author = "Anonymous";
  }

  const id = nanoid();
  const date = new Date();

  writeBD({ author, message, filename, id, date });
  res.status(200).json({ message: "Post created" });
});

module.exports = router;
