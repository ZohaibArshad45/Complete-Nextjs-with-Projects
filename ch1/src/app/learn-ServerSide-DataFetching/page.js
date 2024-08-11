import React from 'react'
async function fetchData (){
    const API = await fetch("https://jsonplaceholder.typicode.com/posts")
    const dataAPI = await API.json()
    return dataAPI
}


const ServerSideDataFetch = async () => {
    const data = await fetchData()
  return (
    <div>
      <h1>Server Side Data Fetch</h1>
      {
        data.map((e, i) => (
            <p key={i}>{e.id} {e.title}</p>
        ))
      }
    </div>
  )
}

export default ServerSideDataFetch
