import { useEffect, useState } from 'react'
import './App.css'
import axios  from 'axios'

const BASE_URL = "http://localhost:3005";


function App() {

   const getAllUsers = async ()=>  {
    const response = await axios.get(BASE_URL+"/users");
   
  }

  const getUserById = async (userId) =>{
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(response.data)
  }

const createUser  = async(newUser)=>{
const response =   await axios.post(`${BASE_URL}/users`,newUser);
console.log("response",response.data);
  }

  const updateUser = async(userId,updatedUser)=>{
    await axios.put(`${BASE_URL}/users/${userId}`,updatedUser)
  }

  const deleteUserById = async(userId)=>{
   const deletedresponse=  await axios.delete(`${BASE_URL}/users/${userId}`)
   console.log(deletedresponse)
  }

useEffect(()=>{
  // getUserById(2);

  // const newUser = {
  //   "username" : "bilal",
  //   "password":"123"

  // }
  // createUser(newUser);

  // updateUser("2",{
  //   "id":"",
  //   "username" :"berilll",
  //   "password" : "777"
  // })

  deleteUserById("1");

},[]) // sayfa yüklendiğinde çalıştır. 



  return (
   <div>berkan</div>
  )
}

export default App
