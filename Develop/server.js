  
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

require("./public/assets/js/apiRoute")(app);
require("./public/assets/js/htmlIndex")(app);

app.listen(PORT, () => {
  console.log(`App listening on port: http://localhost:${PORT}`);
});