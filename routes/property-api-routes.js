var db = require("../models");

module.exports = function(app) {
  app.get("/api/properties", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.property_list.findAll({
      include: [db.task_list]
    }).then(function(dbProperty) {
      res.json(dbProperty);
    });
  });

  app.get("/api/properties/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.property_list.findOne({
      where: {
        id: req.params.id
      },
      include: [db.task_list]
    }).then(function(dbProperty) {
      res.json(dbProperty);
    });
  });

  app.post("/api/properties", function(req, res) {
    db.property_list.create(req.body).then(function(dbProperty) {
      res.json(dbProperty);
    });
  });

  app.delete("/api/properties/:id", function(req, res) {
    db.property_list.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbProperty) {
      res.json(dbProperty);
    });
  });

};
