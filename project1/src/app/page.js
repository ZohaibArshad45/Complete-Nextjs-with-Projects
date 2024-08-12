import Image from "next/image";
import ProductsData from "./products/page";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen  items-center bg-blue-200 ">
      <h1 className="font-bold text-3xl text-blue-900 mt-10">Wellcome Zohaib Arshad</h1>
      <ProductsData/>
      
 
    </main>
  );
}
