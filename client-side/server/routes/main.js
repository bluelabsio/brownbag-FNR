const axios = require('axios');
const express = require('express');

const apiRouter = express.Router();

const getInfo = () => {
  const promise = axios.get(process.env.API_ENDPOINT);
  return promise
    .then((response)=> {
      return response.data;
    })
    .catch((error) =>{
      console.log(error);
      return {};
    });
};

apiRouter.get("/", (req, res) => {
  getInfo()
    .then(data => {
      res.json({message: 'success', data: data});
    });
});

module.exports = apiRouter;
