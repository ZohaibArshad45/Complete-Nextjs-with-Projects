import React from 'react'
import Link from "next/link";


const learnParams = () => {

  return (
    <>
     <br /> <br />
    <p>1) Client Side we use usePathname</p>
    <p>2) Server Side we use params ======= This work on dynamic Pgae</p> 

    <br />
    <Link className=" bg-blue-950 text-white p-2 pr-4 pl-4 mt-2 rounded-lg hover:bg-blue-600" href={`learn-Params/232323232323`}>Client Side = Learn use params url name (params)</Link>

    

    
    </>
  )
}

export default learnParams
