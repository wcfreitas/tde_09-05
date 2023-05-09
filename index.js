const express = require('express');
const server = express();

server.get('/', (req, res)=> {
    res.send("server is running");
})

const port = 3030;
server.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});