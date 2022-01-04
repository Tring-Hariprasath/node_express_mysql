

const bodyParser = require("body-parser");
const express = require('express');
const cors = require('cors');
const {deleteCustomer,createNewCustomer,updateCustomer,getCustomer,getCustomerById} = require('./controllers/customerController.js');

const app = express()


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// var corOptions = {
    // origin: 'https://localhost:8081'
// }


//middleware



app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(bodyParser.json());



//testing api
app.post('/create', createNewCustomer);
app.put('/update',updateCustomer);
app.delete('/delete/:customerId',deleteCustomer);
app.get('/get',getCustomer);
app.get('/get/:customerId',getCustomerById);
app.get('/', (req,res) => {
    res.json({message: 'hello from api'})
})

//port

const PORT =8080;

//server

app.listen(PORT, () =>{
    console.log(`server is running on port: ${PORT}`)
    
})

  