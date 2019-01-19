const express = require("express");
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const Home = require("./client/components/Home");
const app = express();

app.get("/", (req, res) => {
  const content = renderToString(<Home />);
});

app.listen(3000, () => {
  console.log(` App listening on port 3000 `);
});
