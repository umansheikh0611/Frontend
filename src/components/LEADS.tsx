import { CiSearch } from "react-icons/ci";
import { LEADS } from "@/app/data/detail";

export default function Leads() {
  return (
    <section className="w-full h-full  flex flex-col gap-10 p-5 
    lg:p-10">
      <h1 className="text-3xl font-bold  pt-20 lg:p-5">Hello, Dr. John</h1>
      <div className="w-full bg-white p-7 rounded-3xl overflow-x-auto">
        {/* Header */}
        <div className="w-full flex justify-between mb-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">All Leads</h2>
            <p className="text-green-500">Active Members</p>
          </div>
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
        </div>

        {/* Scrollable Table */}
        <table className="min-w-[1000px] w-full">
          <thead>
            <tr className="text-gray-400 font-semibold">
              <th className="w-[200px] text-left p-2">Customer Name</th>
              <th className="w-[200px] text-left p-2">Therapy</th>
              <th className="w-[200px] text-left p-2">Phone Number</th>
              <th className="w-[200px] text-left p-2">Email</th>
              <th className="w-[200px] text-left p-2">Country</th>
              <th className="w-[200px] text-left p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {LEADS.map((LEAD) => (
              <tr key={LEAD.id} className="text-black border-b ">
                <td className="w-[200px] p-2 text-blue-600">{LEAD.customer}</td>
                <td className="w-[200px] p-2">{LEAD.therapy}</td>
                <td className="w-[200px] p-2">{LEAD.phone}</td>
                <td className="w-[200px] p-2">{LEAD.email}</td>
                <td className="w-[200px] p-2">{LEAD.country}</td>
                <td className="w-[200px] p-2">
                  <span
                    className={`inline-flex items-center px-4 py-1 rounded-full  ${
                      LEAD.status === "Active"
                        ? "bg-green-200 text-green-900 border border-green-500"
                        : "bg-red-200 text-red-900 border border-red-500"
                    }`}
                  >
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