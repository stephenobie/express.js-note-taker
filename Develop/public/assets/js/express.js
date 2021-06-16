const express = require('express');
const fs = require('fs');
const uniqid = require('uniqid');
const savedNotes = fs.readFileSync("./Develop/db/db.json");
const data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.json(data);
  });
  app.get("/api/notes/:id", (req, res) => {
    res.json(data[Number(req.params.id)]);
});}

app.post('/api/notes', (req, res) => {
  let newNote = req.body;
  let ID =data.length;
  newNote.id = ID;
  data.push(newNote);
  req.body.id = uniqid();

  fs.writeFileSync("../db/db.json", JSON.stringify(data), (err) => {
    if (err) console.log(err);
  })

res.json(data);

});



app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));