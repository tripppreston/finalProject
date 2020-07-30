module.exports = app => {
    const harvested = require("../controllers/harvested.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Harvested
    router.post("/", harvested.create);
  
    // Retrieve all Harvests
    router.get("/", harvested.findAll);
  
    // Retrieve a single Harvested with id
    router.get("/:id", harvested.findOne);
  
    // Update a Harvested with id
    router.put("/:id", harvested.update);
  
    // Delete a Harvested with id
    router.delete("/:id", harvested.delete);
  
    // Delete all Harvests
    router.delete("/", harvested.deleteAll);
  
    app.use('/api/harvested', router);
  };