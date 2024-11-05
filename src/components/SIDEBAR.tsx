
import Link from "next/link"
export default function SideBar(){
    return(
      <section className="w-1/4 h-[100vh] bg-white shadow-xl p-10 flex flex-col gap-10 " >
       <div className="logo">
        <h1 className="text-3xl font-black" >Dashboard</h1></div> 
        <ul className="flex flex-col gap-5 text-gray-500">
            <li className="w-full p-3 rounded-xl hover:text-white hover:bg-purple-400 cursor-pointer" >
                <Link href={'/'} >
            Dashboard
            </Link></li>
            <li className="w-full p-3 rounded-xl hover:text-white hover:bg-purple-400 cursor-pointer" >
                <Link href={'/'} >
            Leads
            </Link></li>
            <li className="w-full p-3 rounded-xl hover:text-white hover:bg-purple-400 cursor-pointer" >
                <Link href={'/'} >
           Messages
            </Link></li>
            <li className="w-full p-3 rounded-xl hover:text-white hover:bg-purple-400 cursor-pointer" >
                <Link href={'/'} >
          Logout
            </Link></li>
        </ul>
      </section>
    )
}