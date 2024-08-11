import React from 'react'

const detailPage = ({params}) => {
    console.log(params)
    console.log(params.details)
  return (
    <div>
        <br /> <br />
    <h1>Here we learn how we get path-name using params,</h1>
    <h1>This is client side, and work on dynamic Page</h1>
    <h1>This show on Console (VS code)</h1>

    <br /><br />
    <h1 className=' text-red-600'>For multi slug also Same,  But they get data in from of Array</h1>
    </div>
  )
}

export default detailPage
