const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const axios = require('axios')

app.use(cors())

app.get('/', (req, res) => {

    
        axios.get('https://coothjmv52.execute-api.us-east-2.amazonaws.com/stage')
            .then(resp=>{
                res.send(JSON.stringify(resp.data));
            
            }).catch(function (error) {
                console.log(error);
              })      
   
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))