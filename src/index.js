const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const bangunRuangRoute = require(`./routes/bangunRuang`);
app.use(`/bangun-ruang`, bangunRuangRoute);

const convertRoute = require(`./routes/suhuConverter`);
app.use(`/convert`, convertRoute);

const bilangan = require('./routes/bilangan')
app.use('/bilangan', bilangan)

const bmi = require('./routes/bmi')
app.use('/bmi', bmi)

app.listen(4000, () => {
  console.log("Server run on port 4000");
});
