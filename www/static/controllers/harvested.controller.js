const db = require("../models");
const Harvested = db.Harvests;
const Op = db.Sequelize.Op;

// Create and Save a new Harvested
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a harvested object
  const harvested = {
    type: req.body.type,
    name: req.body.name,
    area: req.body.area,
    planet: req.body.planet,
    size: req.body.size,
    food: req.body.food
    
  };

  // Save Harvested in the database
  Harvested.create(harvested)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Harvested."
      });
    });
};

// Retrieve all Harvests from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Harvested.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Harvests."
        });
      });
};

// Find a single Harvested with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

  Harvested.findById(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Harvested with id=" + id
      });
    });
  
};

// Update a Harvested by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

  Harvested.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Harvested was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Harvested with id=${id}. Maybe Harvested was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Harvested with id=" + id
      });
    });
  
};

// Delete a Harvested with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

  Harvested.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Harvested was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Harvested with id=${id}. Maybe Harvested was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Harvested with id=" + id
      });
    });
  
};

// Delete all Harvests from the database.
exports.deleteAll = (req, res) => {
    Harvested.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Harvests were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Harvests."
          });
        });
};

// // Find all published Harvests
// exports.findAllPublished = (req, res) => {
  
// };