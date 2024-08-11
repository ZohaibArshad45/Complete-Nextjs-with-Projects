'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

async function fetchData (){
    const API = await fetch("https://jsonplaceholder.typicode.com/posts")
    const dataAPI = await API.json()
    return dataAPI
}

const ClientSideDataFetch = () => {
    const [data, setdata] = useState([]);

    useEffect(()=>{
        async function APIData(){
            const getData = await fetchData()
            setdata (getData)
        }
        APIData()
    }, [])


  return (
    <div>
        <h1>Client Side Data Fetching </h1>
        {
            data.map((e, i )=>(
                <>
                <Link href={`http://localhost:3000/learn-ClientSide-DataFetching/${e.id}`} key={i}>{e.title} e.title</Link>
                <hr />
                </>
            ))
        }  
    </div>
  )
}

export default ClientSideDataFetch
