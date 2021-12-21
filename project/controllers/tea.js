const Tea = require("../models/tea");

//POST tea
const newTea = (req, res) => {
  //check if tea already exists in db
      const newTea = new Tea({
        name: req.body.name,
        image: req.file.path,
        description: req.body.description,
        keywords: req.body.keywords,
        origin: req.body.origin,
        brew_time: req.body.brew_time,
        temperature: req.body.temperature,
      });

      return res.json("New tea is created.");
};

const getAllTea = (req, res) => {
    //check if tea already exists in db
        const newTea = new Tea(
        {
            "name": "Jasmine Tea",
            "image": "an image file url",
            "description": "Jasmine tea (茉莉花茶) is tea scented with the aroma of jasmine blossoms.",
            "keywords": "aromatic, china, sweet",
            "origin":"China",
            "brew_time": 2,
            "temperature": 80,
            "comments": []
        }
        );
        
        return res.json(newTea);
  };
  

//DELETE teas
const deleteAllTea = (req, res) => {
    return res.json("All tea are deleted successfully... T^T");
};


//export controller
module.exports = {
  newTea,
  deleteAllTea,
  getAllTea,
};