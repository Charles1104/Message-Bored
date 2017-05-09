/*jshint esversion:6*/

const express = require('express');
const topics = express.Router();
const {Topic, User, Message} = require('../../models');

//const db = require('../../models');
//const User = db.User;

topics.get('/', (req,res) => {
  Topic.all({
    include: [{
      model:User,
      as:'Creator',
      attributes: ['name'],
    }]
  })
    .then((topics) => {
      res.json(topics);
    });
});

topics.get('/:id', (req,res) => {
  Topic.findOne({
    where: {id: req.params.id},
    include: [
    {
      model:User,
      as:'Creator',
    },
    {
      model:Message,
      include: [{
      model:User,
      as: 'Author',
      }]
    },
    ]
  })
    .then((topic) => {
      res.json(topic);
    });
});

topics.post('/', (req,res) =>{
  Topic.create({
    "name": req.body.name,
    "created_by": req.body.created_by
  })
    .then(res.json.bind(res))
    .catch( res.json.bind(res));
});

topics.put('/:id', (req, res) => {
  Topic.update(
    { name : req.body.name }, // properties to be changed
    { where : { id : req.params.id } } // options for which instances to update
  )
  .then( result => { // [1]
    if( result[0] > 0 ){
      return Topic.findById( req.params.id );
    } else {
      throw "Did not update";
    }
  })
  .then( topic => { // { ... the topic ... }
    res.json( topic );
  })
  .catch( err => {
    res.json( err );
  });
});

module.exports = topics;