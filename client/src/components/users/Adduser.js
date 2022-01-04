import React,{useState} from 'react';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Adduser = () => {
    let navigate = useNavigate(); 
    const [newCust, setNewCust] = useState({
        "customerId": "",
        "name": "",
        "address": "",
        "phoneNumber": ""
    })

    const {customerId,name,address,phoneNumber} = newCust;

    const onChangeInput = (e) => {
        setNewCust({...newCust, [e.target.name]: [e.target.value]});
        console.log(newCust);
    }

    const onSubmit = async (e) => {
        e.preventDefault(); 
        await Axios.post("http://localhost:8080/create", newCust);
        navigate('/');
        }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add Customer</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mt-3">
                    <div className="form-group">
                        <input type="text" name="customerId" value={customerId} onChange={(e) => onChangeInput(e)} className="form-control form-control-lg" placeholder="Customer Id"  required/>
                    </div>
                    </div>
                    <div className="mt-3">
                    <div className="form-group mt-10">
                        <input type="text" name = "name" value={name}  onChange={(e) => onChangeInput(e)}  className="form-control form-control-lg" placeholder="Customer name"  required/>
                    </div>
                    </div>
                    <div className="mt-3">
                    <div className="form-group">
                        <input type="text" name = "address" value={address}  onChange={(e) => onChangeInput(e)} className="form-control form-control-lg" placeholder="Customer Address"  required  />
                    </div>
                    </div>
                    <div className="mt-3">
                    <div className="form-group">
                        <input type="number" name = "phoneNumber" value={phoneNumber} onChange={(e) => onChangeInput(e)} className="form-control form-control-lg" placeholder="Customer PhoneNumber" required />
                    </div>
                    </div>
                    <div className="mt-3">
                    <button className="btn btn-primary btn-block">Add Customer</button>
                    </div>
                   
                </form>
            </div>
        </div>
    )
}

export default Adduser
