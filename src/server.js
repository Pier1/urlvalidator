const express = require('express');
const { checkUrl } = require('check-url');

const server = express();

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.get('/check-url', (req, res) => {
  checkUrl(req.query.url)
    .then(response => {
      res.status(response.status).send(response)
    })
    .catch(error => {
      console.error(error); //eslint-disable-line
      res.status(400).send({ status: 400, statusCode: error.message });
    });
})

server.listen(3000, () => console.log('Example app listening on port 3000!')) //eslint-disable-line