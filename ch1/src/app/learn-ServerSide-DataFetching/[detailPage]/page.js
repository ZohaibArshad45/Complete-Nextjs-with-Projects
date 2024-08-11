import React from 'react'

async function getdata(user){
  const API = await fetch(`https://jsonplaceholder.typicode.com/users/${user} `)
  const APIData = await API.json()
  return APIData
}

const detailPage = async ({params}) => {
  const FData = await getdata(params.detailPage)
  // console.log(FData)
  // console.log(params.detailPage)

  return (
    <div>
      <h1>User Detail Page</h1>
      <h1>{FData.username}</h1>
      <h1>{FData.name}</h1>
      <h1>{FData.email}</h1>
      <h1>{FData.address.street}</h1>
      <h1>{FData.address.city}</h1>
      <h1>{FData.address.geo.lat}</h1>
      <h1>{FData.address.geo.lng}</h1>
   
   

      
    </div>
  )
}

export default detailPage
