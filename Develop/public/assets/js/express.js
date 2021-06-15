const express = require('express');
const fs = require('fs');
const uniqid = require('uniqid');
const savedNotes = fs.readFileSync("../db/db.json");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./index")(app);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

app.get('/api/notes', (req, res) => res.json(savedNotes));


app.post('/api/notes', (req, res) => {
  let newNote = req.body;
  let ID =data.length;
  newNote.id = ID;
  data.push(newNote);
  req.body.id = uniqid();


  newNote.routeName = newNote.name.replace(/\s+/g, '').toLowerCase();
  console.log(newCharacter);

  characters.push(newCharacter);
  res.json(newCharacter);
});



app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));