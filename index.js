const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// middleware to parse JSON request body
app.use(express.json());

app.all("*", (req, res) => {
  const { returnData, statusCode } = req.body;

  const responseStatusCode = typeof statusCode === "number" ? statusCode : 200;

  res.status(responseStatusCode).json(returnData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
