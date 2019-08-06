// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

var router = require("express").Router();

// Routes
// =============================================================

  // GET route for getting all of the posts
  router.get("/api/tasks", async (req, res) => {
    // var query = {};
    // if (req.query.propertyID {
    //   query.AuthorId = req.query.propertyID;
    // }
    // // Here we add an "include" property to our options in our findAll query
    // // We set the value to an array of the models we want to include in a left outer join
    // // In this case, just db.Author
    // db.task_list.findAll({
    //   where: query,
    //   include: [db.property_list]
    // }).then(function(dbTask) {
    //   res.json(dbTask);
    // });
    try {res.json({})}
    catch (err) {
      throw (err);
    }
  });

  // Get route for retrieving a single post
  router.get("/api/tasks/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.task_list.findOne({
      where: {
        id: req.params.id
      },
      include: [db.property_list]
    }).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  // POST route for saving a new post
  router.post("/api/tasks", function(req, res) {
    db.task_list.create(req.body).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  // DELETE route for deleting posts
  router.delete("/api/tasks/:id", function(req, res) {
    db.task_list.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  // PUT route for updating posts
  router.put("/api/tasks", function(req, res) {
    db.task_list.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbTask) {
      res.json(dbTask);
    });
  });

  module.exports=router;