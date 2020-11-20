const express = require('express');
const app = express();

const mockUserData=[
	{name:'Aman'},
	{name:'Soni'}
]

<<<<<<< HEAD
app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})

app.listen(8000,function(){console.log('server is listening')})
=======
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
>>>>>>> 86a34d5... Update server.js Fike
