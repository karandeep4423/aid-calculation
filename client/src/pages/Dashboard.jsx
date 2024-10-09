import React from 'react'

const Dashboard = ()=> {

  const user = JSON.parse(localStorage.getItem("userDetails"));

  return (
    <div className='w-full text-center h-screen'>
      <h1 className="text-3xl font-semibold">Welcome to Dashboard,{user?.firstname}</h1>
    </div>
  )
}

export default Dashboard
