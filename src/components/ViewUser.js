import React, { useEffect, useState } from 'react';

const ViewUser = () => {
  // Fetch data from local storage
  const [data,setData]=useState([])
  useEffect(()=>{
    const userDataFinal = JSON.parse(localStorage.getItem('usersData'));
    setData(userDataFinal);
  },[]);

  return (
    <div className="container">
      <h1>View All Users</h1>
      <div className='row mt-3'>
      <h3 className="col-2">Name</h3>
          <h3 className="col-2">Email</h3>
          <h3 className="col-2">Gender</h3>
          <h3 className="col-2">Mobile</h3>
          <h3 className="col-2">Category</h3>
          <h3 className="col-2">Technology</h3>
      </div>
      {data?.map((userData)=>(
        <div className="">
        <div className="row">
          <p className="col-2">{userData.name}</p>
          <p className="col-2">{userData.email}</p>
          <p className="col-2">{userData.gender}</p>
          <p className="col-2">{userData.mobile}</p>
          <p className="col-2">{userData.category}</p>
          <p className="col-2">{userData.technology.join(', ')}</p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default ViewUser;
