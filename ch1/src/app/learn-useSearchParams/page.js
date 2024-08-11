'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const serachParams = () => {
  const searchParams = useSearchParams()
  // http://localhost:3000/learn-useSearchParams?Search=product1
  console.log(searchParams.get('search')) // output: product1
  

  // http://localhost:3000/learn-useSearchParams?Search=product1&random=564
  console.log(searchParams.get('search'), searchParams.get('random') ) // output: product1 564



  return (
    <div>
    <h1>2)</h1> <br />
    <h1>Here we learn how we get url value searchParams using useSearchParams()</h1>
    <p>import useSearchParams  from 'next/navigation'</p> <br />
    <h1>http://localhost:3000/learn-useSearchParams?Search=product1</h1>
    <h1>Output will be for this route : product1</h1>
    <h1>{searchParams.get('search')}</h1> <br />

    <h1>http://localhost:3000/learn-useSearchParams?Search=product1&random=564</h1>
    <h1>Output will be for this route : product1 564</h1>
    <h1>{searchParams.get('search')}{searchParams.get('random')}</h1>

    <br /><br />
    <h1>Server Side we useSearchParams</h1>
    <h1>client Side we searchParams</h1>

      
    </div>
  )
}

export default serachParams
