

var mysql = require('mysql2');
var dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Prasath@143",
  db: "node_mysql_api_db",
});

class Customers{
    constructor(customerId,name,address,phoneNumber){
        this.customerId = customerId;
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;

    }

    getCustomerId() {
        return this.customerId;
      }
      setCustomerId(customerId) {
        this.customerId = customerId
      }
      getName() {
        return this.name;
      }
      setName(name) {
        this.name = name
      }
      getAddress() {
        return this.address;
      }
      setAddress(address) {
        this.address = address
      }
      getPhoneNumber() {
        return this.phoneNumber;
      }
      setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber
      }
      createNewCustomer(customer){
        dbConn.query("insert into node_mysql_api_db.customers(customerId, name, address, phoneNumber) values(?, ?, ?, ?)",[this.customerId, this.name, this.address, this.phoneNumber], (err, res) => {
          if(err){
            console.log(err);
            customer(err);
          }else{
            customer(res);
          }
        })
      }
      updateCustomer(customer){
        dbConn.query("update node_mysql_api_db.customers set  name = ?, address = ?, phoneNumber = ? where customerId = ? ",[ this.name, this.address, this.phoneNumber,this.customerId],(err,res) =>{
          if(err){
            console.log(err);
            customer(err);
          }
          else{
            customer(res);
          }
        })
      }

      deleteCustomer(customer){
        dbConn.query("delete from node_mysql_api_db.customers where customerId =?",this.customerId ,(err,res)=>{
          if(err){
            console.log(err);
            customer(err);
          }
          else{
            customer(res);
          }
        })
      }

      getCustomer(customer){
        dbConn.query("select * from node_mysql_api_db.customers",(err,res)=>{
          if(err){
            console.log(err);
            customer(err);
          }
          else{
            customer(res);
          }
        })
      }

      getCustomerById(customer){
        console.log("getCustomerById");
        console.log("this.customerId", this.customerId);
        dbConn.query("select * from node_mysql_api_db.customers where customerId = ?", this.customerId, (err, res) => {
            if(err){
                console.log("inside error: ", err);
                customer(err);
            }else{
              console.log("inside succesful fetch: ", res);
                customer(res);
            }
        });
    }

}




module.exports.customers = Customers;
