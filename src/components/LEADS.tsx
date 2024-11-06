import { CiSearch } from "react-icons/ci";
import { LEADS } from "@/app/data/detail";
export default function  Leads(){
    return(
        <section className="w-full h-full p-10  flex flex-col gap-10" >
            <h1 className="text-3xl font-bold p-10" >Hello, Dr. John</h1>
            <div className="w-full  bg-white p-7 rounded-3xl overflow-x-auto" >
              <div className="w-full h-full flex justify-between"  >
                <div className="flex flex-col gap-2" >  
                <h2 className="text-3xl font-bold" >All Leads</h2>
                <p className="text-green-500 " >Active Members</p>
                </div>
                <div className=" flex gap-2 p-3 bg-gray-100 h-10 items-center rounded-xl  " >  

                <CiSearch />
                <input type="text" name="search" id="search" placeholder="search.."  className="bg-transparent focus:outline-none" />
                </div>


              </div>
              
              <table className="flex gap-20 flex-col py-10 " >
        <thead>
          <tr  className="flex w-full p-3 text-gray-400" >
            <th className="w-48 text-left ">Customer Name</th>
            <th className="w-48 text-left">Therapy</th>
            <th className="w-48 text-left">Phone Number</th>
            <th className="w-48 text-left">Email</th>
            <th className="w-48 text-left">Country</th>
            <th className="w-48 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {LEADS.map((LEAD) => (
            <tr key={LEAD.id}   className={`flex gap-10 w-full p-3 text-black`}>
              <td className="w-48 text-left text-blue-600  " >{LEAD.customer}</td>
              <td className="w-48 text-left ">{LEAD.therapy}</td>
              <td className="w-48 text-left">{LEAD.phone}</td>
              <td className="w-48 text-left">{LEAD.email}</td>
              <td className="w-48 text-left">{LEAD.country}</td>
              <td className={`w-48 text-left ${
                LEAD.status === "Active" ? "bg-green-200 border  border-green-500 px-3 py-1 rounded-xl text-green-900" : "bg-red-200 border border-red-500 px-3 py-1 rounded-xl text-red-900"
              }`}>{LEAD.status}</td>
            </tr>
          ))}
        </tbody>
        </table>
            </div>

        </section>

    )
}