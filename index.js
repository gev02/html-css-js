const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.post('/alta-usuario', ( req, res ) => {
  console.log('usuario', req.body)
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});