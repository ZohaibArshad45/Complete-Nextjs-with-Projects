// import Link from 'next/link'
 
// export default function NotFound() {
//   return (
//     <div>
//       <h2>Not Found</h2>
//       <p>Could not find requested resource</p>
//       <Link href="/">Return Home</Link>
//     </div>
//   )
// }
import React from 'react'

const notfound = () => {
  return (
    <div>
        <h1 className=' text-red-600 mt-32 pl-32 text-3xl font-bold'>Page not found </h1>
      
    </div>
  )
}

export default notfound
