const express = require('express');
const app = express();
const path = require('path');


app.all('/', (req, res)=>{
    res.send('Your bot is alive!')
})


app.all('/lavalinks', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("Server is Ready!")});
}
module.exports = keepAlive;
