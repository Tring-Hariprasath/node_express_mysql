import React, {useEffect, useState} from "react";
import Axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const EditUser = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    console.log("id from params: ", id);
    const [user,setUser] = useState({
    "customerId": "",
    "name": "",
    "address": "",
    "phoneNumber": ""
});

const {customerId,name,address,phoneNumber} = user;
 


const onChangeInput = (e) => {
    setUser({...user, [e.target.name]: [e.target.value]});
    console.log(user);
}

useEffect(()=>{
    loadUsers();
},[]);

const onSubmit = async (e) => {
    e.preventDefault();
    await Axios.put("http://localhost:8080/update",user);
    navigate('/');
}

    

const loadUsers = async () =>{
    console.log("loadUsers is called");
    const result = await Axios.get(`http://localhost:8080/get/${id}`);
    console.log("loadUsers: ", result);
    setUser(result.data[0]);
};
    return (
        <div>
           <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Update Customer</h2>
                <form onSubmit={(e) => onSubmit(e)}>

                <div className="mt-3">
                    <div className="form-group">
                        <input type="number" name = "customerId" value={customerId} onChange={(e) => onChangeInput(e)} className="form-control form-control-lg" placeholder="Customer_Id"  />
                    </div>
                </div>
                    <div className="mt-3">
                    <div className="form-group">
                        <input type="text" name="name" value={name} onChange={(e) => onChangeInput(e)} className="form-control form-control-lg" placeholder="Customer name" />
                    </div>
                    </div>
                    <div className="mt-3">
                    <div className="form-group mt-10">
                        <input type="text" name = "address" value={address}  onChange={(e) => onChangeInput(e)}  className="form-control form-control-lg" placeholder="Customer Address" />
                    </div>
                    </div>
                    
                    <div className="mt-3">
                    <div className="form-group">
                        <input type="number" name = "phoneNumber" value={phoneNumber} onChange={(e) => onChangeInput(e)} className="form-control form-control-lg" placeholder="Customer PhoneNumber"  />
                    </div>
                    </div>
                    <div className="mt-3">
                    <button className="btn btn-primary btn-block">Update Customer</button>
                    </div>
                   
                </form>
            </div>
        </div>
        </div>
    )
}

export default EditUser
