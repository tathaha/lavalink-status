const express = require('express');
const app = express();
const path = require('path');


app.all('/', (req, res)=>{
    res.send('Your bot is alive!')
})


app.all('/lavalinks', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000 || process.env.PORT, () => {
    console.log('Server is running on port 3000');
});
module.exports = keepAlive;
