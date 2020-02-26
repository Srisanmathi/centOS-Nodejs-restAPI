const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const axios = require('axios')

app.use(cors())

app.get('/', (req, res) => {

    setInterval(()=>{
        res.send("hello");
    },10000);
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))