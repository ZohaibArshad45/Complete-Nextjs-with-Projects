import Link from 'next/link'
import React from 'react'

const searchParams = ({ searchParams }) => {
    console.log(searchParams)

    return (
        <div>
            <br /><br />
            <h1>Server Side we useSearchParams</h1>
            <h1>Client Side we searchParams</h1>
            <br />
            <h1>Show on console Vs code</h1>


            <br /><br />
            <Link className=" bg-blue-950 text-white p-2 pr-4 pl-4 mt-2 rounded-lg hover:bg-blue-600" href={'learn-searchParams?Search=product1&random=564'}>Client Side = Learn How SearchParams url name (SearchParams)</Link>

        </div>
    )
}

export default searchParams
