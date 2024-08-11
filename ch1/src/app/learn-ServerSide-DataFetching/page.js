import Link from 'next/link'
import React from 'react'

async function fetchData() {
  const API = await fetch("https://jsonplaceholder.typicode.com/users")
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
          <div className='mt-6 ml-40 cursor-pointer'>
            <Link href={`http://localhost:3000/learn-ServerSide-DataFetching/${e.id}`}  key={i}>
              {e.id} {e.username}
            </Link>
            <br />
          </div>
        ))
      }
    </div>
  )
}

export default ServerSideDataFetch
