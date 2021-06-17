  
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(__dirname + "/public"));

require("./routes/apiRoute.js")(app);
require("./routes/htmlIndex.js")(app);

app.listen(PORT, () => {
  console.log(`App listening on port: http://localhost:${PORT}`);
});