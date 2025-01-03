const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middlewere
app.use(cors());
app.use(express.json());


// get and lissen api
app.get('/',(req,res)=>{
    res.send('Bistro Boss Restrurant server is running on....')
})

 app.listen(port,()=>{
    console.log('The Bistro Boss Restrurant server is running on port :',port);
 })