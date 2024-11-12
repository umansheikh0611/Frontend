import { CiSearch } from "react-icons/ci";
import { LEADS } from "@/app/data/detail";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoMdArrowUp } from "react-icons/io";
import { FiUserCheck } from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";

export default function Leads() {
  return (
    <section
      className="w-full h-full  flex flex-col gap-10 p-5 
    lg:p-10"
    >
      <h1 className="text-3xl font-bold  pt-20 lg:p-5">Hello, Dr. John</h1>
    <div className="flex bg-white flex-wrap items-center px-10 py-5 rounded-xl shadow-md gap-10 justify-between">
      {/* All Leads */}
      <div className="flex gap-5 items-center">
        <div className=" p-5 rounded-full bg-green-300 text-4xl flex justify-center items-center text-green-800">
          <HiOutlineUsers />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-400">All Leads</p>
          <p className="text-2xl font-bold">5,423</p>
          <p className="flex items-center text-sm text-green-600">
            <IoMdArrowUp className="mr-1" />
            15% this month
          </p>
        </div>
      </div>

      {/* Members */}
      <div className="flex gap-5 items-center">
        <div className="p-5 rounded-full text-4xl flex justify-center items-center  bg-green-300 
text-green-800">
          <FiUserCheck />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-400">Members</p>
          <p className="text-2xl font-bold">1,893</p>
          <p className="flex items-center text-sm text-red-600">
            <FaArrowDown className="mr-1" />
            1% this month
          </p>
        </div>
      </div>

      {/* Active Now */}
      <div className="flex gap-5 items-center">
        <div className="p-5 rounded-full text-4xl flex justify-center items-center  bg-green-300 
text-green-800">
          <FiMonitor />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-400">Active Now</p>
          <p className="text-2xl font-bold">189</p>
          <p className="text-sm text-gray-500">Live updates</p>
        </div>
      </div>
    </div>
      <div className="w-full bg-white p-7 rounded-3xl overflow-x-auto">
        {/* Header */}
        <div className="min-w-[800px] w-full flex justify-between mb-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">All Leads</h2>
            <p className="text-green-500">Active Members</p>
          </div>
          <div className="flex gap-2" >
            <div className="flex gap-2 p-3 bg-gray-100 h-10 items-center rounded-xl">
            <CiSearch />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search.."
              className="bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex gap-2 p-3 bg-gray-100 h-10 items-center rounded-xl">
            <span className="text-gray-400 text-sm ">Sort by:</span>
            <select
                    className=" bg-transparent text-gray-900 "
                >
                    <option value="Newest">Newest</option>
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                </select>
          </div>
          </div>
        </div>

        {/* Scrollable Table */}
        <table className="min-w-[800px] w-full">
          <thead>
            <tr className="text-gray-400 font-semibold">
              <th className="w-[100px] text-left p-2">Date</th>
              <th className="w-[150px] text-left p-2">Coustmer Name</th>
              <th className="w-[150px] text-left p-2">Condition</th>
              <th className="w-[150px] text-left p-2">Email</th>
              <th className="w-[200px] text-left p-2">Phone Number</th>
              <th className="w-30 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {LEADS.map((LEAD) => (
              <tr key={LEAD.id} className="text-black border-b ">
                <td className="w-[100px] p-2 text-blue-600">{LEAD.Date}</td>
                <td className="w-[150px] p-2">{LEAD.customer}</td>
                <td className="w-[150px] p-2">{LEAD.condition}</td>
                <td className="w-[150px] p-2">{LEAD.email}</td>
                <td className="w-[200px] p-2">{LEAD.contact}</td>
                <td  className="w-[150px] p-2" >
                  <span   className={` w-full text-left truncate overflow-hidden whitespace-nowrap cursor-pointer ${
                    LEAD.status === "active"
                      ? "bg-green-200 border border-green-500 px-3 py-1 rounded text-green-900"
                      : "bg-red-200 border border-red-500 px-3 py-1 rounded text-red-900"
                  }`}
                  title={LEAD.status} >
                      {LEAD.status}
                  </span>
                
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
