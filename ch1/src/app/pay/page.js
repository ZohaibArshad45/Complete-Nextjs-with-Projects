import { redirect } from 'next/navigation'
import React from 'react'

const payPage = () => {

  // assume that user not login 
  const login = false
  if(login === false) redirect('/login')
  return (
    <div>
        Pay Page
        here we put validation if user login then, he can access this page      
    </div>
  )
}

export default payPage
