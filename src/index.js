const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const bangunRuangRoute = require(`./routes/bangunRuang`);
app.use(`/bangun-ruang`, bangunRuangRoute);

const convertRoute = require(`./routes/suhuConverter`);
app.use(`/convert`, convertRoute);

app.listen(4000, () => {
  console.log("Server run on port 4000");
});
