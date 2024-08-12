import Link from "next/link";
import React from "react";

async function APIData(data) {
    let Data = await fetch(`https://dummyjson.com/recipes/${data}`);
    Data = await Data.json();
    return Data;
}

const ProductDetailPage = async ({ params }) => {
    let FData = await APIData(params.productDetailPage);
    // console.log(params.productDetailPage)

    return (
        <div className=" bg-blue-200 w-full min-h-screen">
            <div className="p-16">
                <Link href={"/"} className=" bg-blue-800 p-4 text-white rounded-lg hover:bg-blue-900">Home</Link>

                <div className="flex gap-16 mt-8 ">

                    <img src={FData.image} alt="" className=" w-96 h-96 rounded-lg p-3 bg-blue-300 " />

                    <div className="flex flex-col gap-2 mt-6">
                        <h1 className="font-bold text-blue-700 text-2xl">{FData.name}</h1>
                        <h1> <span className="text-blue-950 font-bold">Difficulty</span> : {FData.difficulty}</h1>
                        <h1> <span className="text-blue-950 font-bold">Cuisine</span> : {FData.cuisine}</h1>
                        <h1> <span className="text-blue-950 font-bold">Prep Time Minutes</span> : {FData.prepTimeMinutes}</h1>
                        <h1> <span className="text-blue-950 font-bold">Cook Time Minutes</span> : {FData.cookTimeMinutes}</h1>
                        <h1> <span className="text-blue-950 font-bold">Calories Per Serving</span> : {FData.caloriesPerServing}</h1>
                        <p><span className="text-blue-950 font-bold">Instructions</span> : {FData.instructions}</p>
                        <p><span className="text-blue-950 font-bold">Tags</span> : {FData.tags}</p>
                        <p><span className="text-blue-950 font-bold">Rating⭐</span> : {FData.rating}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
