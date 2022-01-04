var {customers} = require('../models/Customer.js');


const createNewCustomer = (req, res) =>{
    const {customerId,name,address,phoneNumber} = req.body;
    const cust = new customers(customerId,name,address,phoneNumber);
    // console.log('customerReqData', customerReqData);
    cust.createNewCustomer((result) => {
        res.send(result);
    })

};

const updateCustomer =(req,res) =>{
    const {customerId,name,address,phoneNumber} = req.body;
    const cust = new customers(customerId,name,address,phoneNumber);
    cust.setName(name);
    cust.setPhoneNumber(phoneNumber);
    cust.setAddress(address);
    cust.updateCustomer((result) =>{
        res.send(result);
    })
};

const deleteCustomer = (req,res)=>{
    
    const customerId = req.params.customerId;
   
    const cust = new customers(customerId);
    cust.setCustomerId(customerId);
    cust.deleteCustomer((result)=>{
        res.send(result);
    })
};

const getCustomer = (req,res)=>{
    console.log("inside getcust");
    const cust = new customers();
    cust.getCustomer((result)=>{
        console.log('fetched result: ', result);
        res.send(result);
    })

}

const getCustomerById = (req, res) => {

    const customerId = req.params.customerId;
    console.log("customerId in getCustomerById: ", req.params.customerId)
    let cust = new customers();
    cust.setCustomerId(customerId);
    cust.getCustomerById((result)=>{
        console.log('fetched result: ', result);
        res.send(result);
    })
}

module.exports = {
    createNewCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomer,
    getCustomerById
}
