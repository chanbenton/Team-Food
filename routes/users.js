"use strict";

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
module.exports = (knex) => {

  //Grab all the users
  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
      });
  });
  //Register
  router.post("/new", (req, res) => {
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(bcrypt);
    bcrypt.hash(req.body.password, 10).then((hashed) => {
      knex
        .insert({
          username: req.body.name,
          email: req.body.email,
          password: hashed
        })
        .into("users")
        .then((results) => {
          knex
            .select("*")
            .from("users")
            .where({
              email: req.body.email
            })
            .then((result) => {
              console.log(result);
              req.session.user_id = result[0].id;
              res.redirect("/food");
            })
        });
    });

  });

  return router;
}