
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  console.log('')
  return (
    <main className=" w-full pl-28 pr-28 flex flex-col items-center justify-center mt-20 ">
      <h1 className="font-bold text-4xl">Well Come  <span className="text-blue-600">Zohiab Arshad</span></h1>
      <Link className=" bg-blue-950 text-white p-2 pr-4 pl-4 mt-2 rounded-lg hover:bg-blue-600" href={'learn-usePathname'}>Server Side = Learn How Get URL name (usePathname)</Link>
      <Link className=" bg-blue-950 text-white p-2 pr-4 pl-4 mt-2 rounded-lg hover:bg-blue-600" href={'learn-useSearchParams'}>Server Side = Learn How SearchParams url name (useSearchParams)</Link>
      <Link className=" bg-blue-950 text-white p-2 pr-4 pl-4 mt-2 rounded-lg hover:bg-blue-600" href={'learn-Params'}>Client Side = Learn use params url name (Params)</Link>
      <Link className=" bg-blue-950 text-white p-2 pr-4 pl-4 mt-2 rounded-lg hover:bg-blue-600" href={`learn-Params/232323232323`}>Client Side = Learn use params url name (params)</Link>
      <Link className=" bg-blue-950 text-white p-2 pr-4 pl-4 mt-2 rounded-lg hover:bg-blue-600" href={'learn-searchParams'}>Client Side = Learn How SearchParams url name (searchParams)</Link>

      
    </main>
  );
}
