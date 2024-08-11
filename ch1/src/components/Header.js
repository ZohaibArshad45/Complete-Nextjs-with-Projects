'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Header = () => {
    const router = useRouter()

    function handle(){
        router.push('/hire')
    }
  return (
    <div className='w-screen border-b-2 border-white pr-24 pl-24 '>
        <div className="main h-20 pr-6 pl-6 flex justify-between items-center  font-bold  ">
            <div className="logo text-2xl">
                <Link href={'/'}> <span className='text-blue-600'>Za</span>Dev</Link>
            </div>
            <div className="links flex gap-4  ">
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/projects'}>Projects</Link>
                <Link href={'/courses'}>Courses</Link>
                <Link href={'/pay'}>Pay</Link>
                <Link href={'/contact'}>Contact</Link>
                <button onClick={handle}>Hire me!</button>
            </div>
            <div className="mobile lg:hidden">
                |||
            </div>
        </div>

      
    </div>
  )
}

export default Header
