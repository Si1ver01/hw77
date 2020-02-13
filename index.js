const express = require("express");
const messageRoute = require("./routes/message.route");

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.static("public"));
app.use("/messages", messageRoute);

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);
});
