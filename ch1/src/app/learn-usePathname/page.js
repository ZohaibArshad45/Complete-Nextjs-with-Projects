'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const learnUsePathname = () => {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <>
    <h1>1)</h1> <br />
    <h1>Here we learn how we get path-name using usePathname</h1>
    <p>import usePathname  from 'next/navigation'</p> <br />
    <h1>{pathname}</h1>

    <br /> <br />
    <p>1) Client Side we use usePathname</p>
    <p>2) Server Side we use params</p>
      
    </>
  )
}

export default learnUsePathname
