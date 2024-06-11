require('dotenv').config()
//dot env is used bcz when we write port it may be free on there system may not so to work with different ports we use dotenv.

const express = require('express') //require module
//import express from "express" //another style for module 

const app = express() //using express we made a variable app

const port = 4000 //port means on this port the express is running.

//app get requests from the home route and gives callback function.
app.get('/',(req,res) =>{
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send(`kinjalshah.com`)

})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login into My Website</h1>')
})
//now we will get error cannot get login => its bcz the code needs to again reload to the server so simply again run start from terminal, Restart. 

app.get('/youtube',(req,res)=>{
    res.send("<h2>Hello All!! , Kinjal Shah Here</h2>")
})
//Now to listen also all power is with app
app.listen(port,() =>{
    console.log(`Express is working on port ${port}`)
})

app.listen(process.env.PORT,() =>
{
    console.log(`Express is working on port ${port}`) 
})
//thats how we made a server.
