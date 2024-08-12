import Link from 'next/link'
import React from 'react'

async function APIData() {
    let Data = await fetch('https://dummyjson.com/recipes')
    Data = await Data.json()
    return Data?.recipes
}

const ProductsData = async () => {
    let FData = await APIData([])
    return (
        <div>
            <h1 className='font-bold text-4xl text-blue-900 flex w-full items-center justify-center m-3'>Products</h1>

            <div className='flex flex-wrap gap-4 justify-center '>
                {
                    FData.map((e, i) => (
                        <div className='bg-blue-300 p-3 rounded-lg hover:bg-blue-400 ' >
                            <div key={i}>
                                <Link href={`http://localhost:3000/products/${e.id}`}>
                                <img src={e.image} alt="" className='h-80 w-80 rounded-lg ' />
                                <h1 className='flex w-full items-center relative  justify-center pt-3 text-blue-900 font-bold' >{e.name}</h1>
                                </Link>
                            </div>
                        </div>

                    ))
                }
            </div>


        </div>
    )
}

export default ProductsData


// 'https://dummyjson.com/recipes'