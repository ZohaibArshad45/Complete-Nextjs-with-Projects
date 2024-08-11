import Link from 'next/link'
import React from 'react'

const projectPage = () => {
  return (
    <div className='flex flex-col gap-7'>
        <h1>Project Page</h1>
        <p>if we want to use dynamic route we can use [detail] this in folder name</p>
        <p>if we want to use dynamic route we can use [...multipleSlug] this in folder name</p>
        <Link href={'/projects/jjjj'}>Project Detail Page</Link>
        <Link href={'/projects/jjjj/sd/sd/sd/sd/sd/s/sd/sd/sd/sd/'}>Project Detail Page</Link>
        <Link href={'/projects/jjjj'}>Project Detail Page</Link>

      
    </div>
  )
}

export default projectPage
