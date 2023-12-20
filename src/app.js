const express = require("express");
const app = express();
const skins = require("./data/skins-data")

app.use(express.json());

const list = (req, res, next) => {
    res.json({data: skins});
  };

const read = (req, res, next) => {
  const {id} = req.params;
  const foundSkin = skins.find((skin) => skin.id === Number(id));
  if (foundSkin) {
    res.json({data: foundSkin});
  } else {
    res.sendStatus(404);
  }
};

const create = (req, res, next) => {
  const { data: { name, gun, variant, voteCount, imageUrl } = {} } = req.body;
  const newSkin = {
    id: skins.length + 1, // This is a simplistic approach to generate a new ID
    name,
    gun,
    variant,
    voteCount,
    imageUrl
  };
  skins.push(newSkin);
  res.status(201).json({ data: newSkin }); // Send back the newly created skin with a 201 status code
};


app.post("/skins", create);
app.get("/skins/:id", read);
app.get("/skins", list);

module.exports = app;