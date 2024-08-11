'use client'
import React, { useEffect, useState } from 'react'
import Loader from './loader'
const getData = async () => {
  const DataAPI = await fetch('https://jsonplaceholder.typicode.com/todos')
  const Data = await DataAPI.json()
  return Data
}


const LoaderAPI = () => {
  const [FData, setFData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function dataFetch() {
      const dataSet = await getData()
      setFData(dataSet)
      setloading(false)
    }
    dataFetch()
  }, [])
  return (
    <>
      <h1>Loader with when Fetch in progress "Client Side"</h1>
      {
        loading ? <Loader /> : (FData.map((e, i) => (
          <h1 key={i}>{e.title}</h1>
        )))
      }

    </>
  )
}

export default LoaderAPI
