const express = require("express");
const app = express();

const {getRoot} = require ('./controllers');

app.get('/', getRoot)

const port = 3001;
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`)
});