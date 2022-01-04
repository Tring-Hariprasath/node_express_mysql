import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
const [users,setUser] = useState([]);

    useEffect(()=>{
        loadUsers();
    },[]);

const loadUsers = async () =>{
    const result = await Axios.get("http://localhost:8080/get");
    console.log("result inside Home.js", result);
    setUser(result.data);
};

const deleteUser = async id =>{
  await Axios.delete(`http://localhost:8080/delete/${id}`);
  loadUsers();
};

    return (
    <div className="container">
      <div className="py-4">
 
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Customer_Id</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">phoneNumber</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
                
              <tr key={user.customerId}>
               
                <td>{user.customerId}</td>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.phoneNumber}</td>
                <td>
                <Link className='btn btn-outline-primary' to={`/user/edit/${user.customerId}`}>Edit</Link>
                <button className='btn btn-danger m-2' onClick={()=>deleteUser(user.customerId)}>Delete</button>
                </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default Home;
