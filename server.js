const express = require('express');
const app = express();

const port = 8000
app.get("/",(req,res) => {
    return res.send("You are visiting home route");
});

app.listen(port ,() => {
console.log("server is up and running...")
})
