import { Button } from "./ui/button";
import { BsSendFill } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { PiPlugLight } from "react-icons/pi";
import { PiFlagPennantFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";


export default function ActivityBoard() {
  return (
    <section className="w-full p-2 lg:p-5 flex gap-3 flex-wrap lg:flex-nowrap md:flex-nowrap " >
        {/* left part */}
      <div className="w-full lg:w-[65%] md:w-[65%] bg-gray-200  border border-gray-400 shadow-xl rounded-xl  " >
        {/* top */}
        <div className="flex justify-between flex-wrap gap-3 items-center px-5 bg-white py-4 rounded-t-xl  ">
          <ul className="flex justify-center items-center gap-4">
            <li>
              <Button  >
                <BsSendFill />
                 <span>New Email</span>
              </Button>
            </li>
            <li className="flex justify-center items-center gap-2">
              <IoAdd /> <span>Activity</span>
            </li>
            <li className="border-l px-2 border-black" > Filter</li>
          </ul>
          <ul className="flex justify-center items-center gap-4">
            <li className="flex justify-center items-center gap-2">
              <PiPlugLight />
              <span>Integrate</span>
            </li>
            <li>
              <BiMessageRoundedDetail />
            </li>
            <li>
              <IoSettingsOutline />
            </li>
          </ul>
        </div>
         {/* middle */}
        <div className=" w-full h-[50vh] flex flex-col items-center py-5 overflow-y-scroll " >
            <div className="w-[90%]" >
            <div className="w-full flex gap-5" >
            <PiFlagPennantFill className="text-white text-2xl rounded bg-blue-700 p-1 "  />
            <p className="text-gray-500" >Call with Leads</p>
            </div>
            <div className="border-l border-gray-400 flex justify-center pt-4 pb-16 " >
               <div className="bg-white border border-gray-400 rounded-md  w-[90%]" >
               <div className=" flex  items-start justify-between p-5 " >
                    <div className="flex  items-start  gap-4">
                    <div className="image">
                    <FaUserCircle  className="text-3xl" />
                </div>
                <div>
                    <h3 className="text-1xl font-bold" >
                        Maximilian Anthomy
                        </h3>
                        <p className="flex items-center gap-3 text-sm text-gray-500 " >
                        <FaRegClock />
                        30 mins
                        </p>
                        <p>
                            Succesfull call with Lead
                        </p>
                        </div>    
                    </div>
                    {/* three dots */}
                  <div>  <BsThreeDots className="text-1xl" /></div>
                </div>
               </div>
            </div>
            </div>
            <div className="w-[90%]" >
            <div className="w-full flex gap-5" >
            <TfiHeadphoneAlt className="text-white text-2xl rounded bg-blue-700 p-1 "  />
            <p className="text-gray-500" >Call invited to clients</p>
            </div>
            <div className="border-l border-gray-400 flex justify-center pt-4 pb-16 " >
               <div className="bg-white border border-gray-400 rounded-md  w-[90%]" >
               <div className=" flex  items-start justify-between p-5 " >
                    <div className="flex  items-start  gap-4">
                    <div className="image">
                    <FaUserCircle  className="text-3xl" />
                </div>
                <div>
                    <h3 className="text-1xl font-bold" >
                        Maximilian Anthomy
                        </h3>
                        <p className="flex items-center gap-3 text-sm text-gray-500 " >
                        <FaRegClock />
                        30 mins
                        </p>
                        <p>
                            we tried to call client at 12:30 PM today
                        </p>
                        </div>    
                    </div>
                    {/* three dots */}
                  <div>  <BsThreeDots className="text-1xl" /></div>
                </div>
               </div>
            </div>
            </div> 



        </div>





      </div>
      {/* right part */}
      <div className="w-full lg:w-[35%] md:w-[35%]  bg-white  border border-gray-400 shadow-xl rounded-xl  " >
      <div className="p-6  max-w-md mx-auto">
      {/* Name Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Name</label>
        <input
          type="text"
          value="Elian Warren"
          readOnly
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Status Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Status</label>
        <div className="flex justify-center ">
        <Button className="bg-red-700" > Contacted </Button>
        
        </div>
      </div>

      {/* Move to Contacts Button */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Create a contact</label>
        <Button  className="bg-green-700 w-full">
        Move to Contacts
        </Button>
      </div>

      {/* Company Field */}
      <div className="mb-4">
        <label className="block  text-gray-700 font-semibold mb-1">Company</label>
        <input
          type="text"
          value="Agently Inc."
          readOnly
          className="w-full p-2 border text-center border-gray-300 rounded-md"
        />
      </div>

      {/* Title Field */}
      <div>
        <label className="block  text-gray-700 font-semibold mb-1">Title</label>
        <input
          type="text"
          value="COO"
          readOnly
          className="w-full p-2 border text-center border-gray-300 rounded-md"
        />
      </div>
 {/* Email Field */}
 <div>
        <label className="block  text-gray-700 font-semibold mb-1">Email</label>
        <input
          type="text"
          value="Email"
          readOnly
          className="w-full p-2 border text-center border-gray-300 rounded-md"
        />
      </div>

    </div>
    

      </div>
    </section>
  );
}
