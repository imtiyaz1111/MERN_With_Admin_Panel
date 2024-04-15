import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth';
import {toast } from 'react-toastify';

const AdminContacts = () => {
   const [contactData,setContactData]=useState([])
  const {authorizationToken}=useAuth()
  const getContactsData= async()=>{
    try {
      const response=await fetch(
        `http://localhost:8000/api/admin/contacts`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        })
        const data=await response.json()
        console.log("contact data",data)
        if(response.ok)
        {
          setContactData(data)
        }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getContactsData()
  },[])

  const deleteContact=async(id)=>{
    try {
      const response=await fetch(`http://localhost:8000/api/admin/contacts/delete/${id}`,{
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      })
      if(response.ok){
        getContactsData()
        toast.success("Deleted successfully")
      }
      else
      {
        toast.success("Not Deleted")
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin User Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {contactData.map((curContactData, index) => {
               const {username,email,message,_id}=curContactData;
                return (
                  <tr key={index}>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{message}</td>
                    <td>
                      <button onClick={() => deleteContact(_id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default AdminContacts
