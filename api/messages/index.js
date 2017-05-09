/*jshint esversion:6*/

const express = require('express');
const messages = express.Router();
const {Message, Topic, User} = require('../../models');
const LATEST_LIMIT = 10;

//const db = require('../../models');
//const User = db.User;

messages.get('/latest', (req,res) => {
  Message.all({
    include:[{
      model: Topic,
      attributes: ['name']
    },
    {
      model: User,
      as: 'Author',
      attributes: ['name']
    }],
    order: [
      ['createdAt', 'DESC']
    ],
    limit: LATEST_LIMIT
  })
    .then((messages) => {
      res.json(messages);
    });
});

messages.get('/by-topic/:topic_id', (req,res) => {
  Message.all({
    include:[
      {
        model: Topic,
        attributes:['name']
      },
      {
        model: User,
        as: 'Author',
        attributes: ['name']
      }
    ],
    where: {
      topic_id: req.params.topic_id
    },
    order: [['createdAt', 'ASC']],
  })
  .then((message) => {
    res.json(message);
  });
});

messages.post('/', (req,res) =>{
  Message.create({
    "body" : req.body.body,
    "topic_id": req.body.topic_id,
    "author_id": req.body.author_id
  })
    .then(res.json.bind(res))
    .catch( res.json.bind(res));
});

module.exports = messages;