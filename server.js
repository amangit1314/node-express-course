const express = require('express');
const app = express();

const port = 8000
app.get("/",(req,res) => {
    return res.send("You are visiting home route");
});

app.listen(port ,() => {
    app.get('/users/:id',function(req,res){
        console.log(req.params.id)
        res.json({
            success: true,
            message: 'got one user',
            user: req.params.id
        })
    })
})