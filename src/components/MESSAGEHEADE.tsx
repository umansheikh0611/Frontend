import Image from "next/image"
import { SlMagnifier } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function MessageHead(){
    return(
        <nav  className="w-[100%] py-5 px-3 bg-white shadow-sm flex justify-between items-center flex-wrap
        lg:px-7
         ">
            <h1 className="text-3xl font-bold text-gray-800 m-4 ">
              Message
            </h1>
<div className="flex items-center flex-wrap gap-3 ">
 <div className="flex gap-4" >
 <div className="search w-[200px] h-10  flex items-center bg-white gap-5 px-3 rounded border border-gray-500" >
    <SlMagnifier className="text-1xl"  />
        <input type="text" placeholder="Search.." className=" w-full h-full focus:outline-none "/>
    </div>
    <div className="icon-notify  ">
    <IoMdNotificationsOutline  className="text-2xl text-gray-800" />
    </div>
 </div>
<div  className="flex items-center gap-5  ">
<div className="rounded-full overflow-hidden w-[80px] h-[80px]">
    <Image 
        src={'/profilee.png'} 
        alt="" 
        width={200} 
        height={200} 
        className="object-cover" 
    />
</div>
 <div className="flex gap-5" >
 <div className="flex flex-col gap-1" >
        <h2 className="text-1xl font-bold " >Alexa</h2>
        <p className="text-sm text-gray-500" >alexaofficial@gmail.com</p>
    </div>
    <div className="arrow">
    <IoIosArrowDown />
    </div>
 </div>
</div>
</div>
        </nav>
    )
}