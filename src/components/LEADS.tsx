import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoMdArrowUp } from "react-icons/io";
import { FiUserCheck } from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";

export default function Leads() {
  interface Lead {
    id: number;
    name: string;
    condition: string;
    email: string;
    phone: string;
    status: string;
    created_at: string;
    doctor_id: number;
  }

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [contactedLeadsCount, setContactedLeadsCount] = useState(0);
  const [doctorName, setDoctorName] = useState("");

  useEffect(() => {

    const doctor = JSON.parse(localStorage.getItem("doctor") || "{}");
    setDoctorName(doctor.doctor_name || "Doctor");

    const fetchLeads = async () => {
      try {
        const storedDoctor = localStorage.getItem("doctor");
        if (!storedDoctor) {
          setError("No doctor data found in localStorage.");
          setLoading(false);
          return;
        }

        const doctor = JSON.parse(storedDoctor);
        const doctorId = doctor.id; // Get `doctor_id` from the stored data

        const token = localStorage.getItem("authToken"); // Assuming authToken is used for authentication
        const response = await fetch("https://ahmed224.pythonanywhere.com/api/lead/", {
          headers: {
            Authorization: `Bearer ${token}`, // Add token if required
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch leads");
        }

        const data = await response.json();

        // Filter leads for the logged-in doctor
        const filteredLeads = data.filter((lead: Lead) => lead.doctor_id === doctorId);
        setLeads(filteredLeads);

        const contactedLeads = data.filter(
          (lead: Lead) =>
            lead.doctor_id === doctor.id && lead.status === "Contacted"
        );

        setContactedLeadsCount(contactedLeads.length);

      } catch (err) {
        console.error(err);
        if (err instanceof Error) {
          setError(err.message || "An error occurred");
        } else {
          setError("An error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full h-full flex flex-col gap-10 p-5 lg:p-10">
      <h1 className="text-3xl font-bold pt-20 lg:p-5">Hello, {doctorName}</h1>
      <div className="flex bg-white flex-wrap items-center px-10 py-5 rounded-xl shadow-md gap-10 justify-between">
        {/* All Leads */}
        <div className="flex gap-5 items-center">
          <div className="p-5 rounded-full bg-green-300 text-4xl flex justify-center items-center text-green-800">
            <HiOutlineUsers />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-400">All Leads</p>
            <p className="text-2xl font-bold">{leads.length}</p>
            {/* <p className="flex items-center text-sm text-green-600">
              <IoMdArrowUp className="mr-1" />
              15% this month
            </p> */}
          </div>
        </div>

        {/* Members */}
        <div className="flex gap-5 items-center">
          <div className="p-5 rounded-full text-4xl flex justify-center items-center bg-green-300 text-green-800">
            <FiUserCheck />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-400">Members</p>
            <p className="text-2xl font-bold">{leads.length}</p>
            {/* <p className="flex items-center text-sm text-red-600">
              <FaArrowDown className="mr-1" />
              1% this month
            </p> */}
          </div>
        </div>

        {/* Active Now */}
        <div className="flex gap-5 items-center">
          <div className="p-5 rounded-full text-4xl flex justify-center items-center bg-green-300 text-green-800">
            <FiMonitor />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-400">Active Now</p>
            <p className="text-2xl font-bold">{contactedLeadsCount}</p>
            <p className="text-sm text-gray-500">Live updates</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white p-7 rounded-3xl overflow-x-auto">
        {loading ? (
          <p>Loading leads...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <div className="min-w-[800px] w-full flex justify-between mb-5">
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold">All Leads</h2>
                <p className="text-green-500">Active Members</p>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-2 p-3 bg-gray-100 h-10 items-center rounded-xl">
                  <CiSearch />
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="bg-transparent focus:outline-none"
                  />
                </div>
                <div className="flex gap-2 p-3 bg-gray-100 h-10 items-center rounded-xl">
                  <span className="text-gray-400 text-sm">Sort by:</span>
                  <select className="bg-transparent text-gray-900">
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
                  <th className="w-[150px] text-left p-2">Customer Name</th>
                  <th className="w-[150px] text-left p-2">Condition</th>
                  <th className="w-[150px] text-left p-2">Email</th>
                  <th className="w-[200px] text-left p-2">Phone Number</th>
                  <th className="w-30 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="text-black border-b">
                    <td className="w-[100px] p-2 text-blue-600">
                      {new Date(lead.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}

                    </td>
                    <td className="w-[150px] p-2">{lead.name}</td>
                    <td className="w-[150px] p-2">{lead.condition}</td>
                    <td className="w-[150px] p-2">{lead.email}</td>
                    <td className="w-[200px] p-2">{lead.phone}</td>
                    <td className="w-[150px] p-2">
                      <span
                        className={`w-full text-left truncate overflow-hidden whitespace-nowrap cursor-pointer ${lead.status === "Pending"
                            ? "bg-yellow-200 border border-yellow-500 px-3 py-1 rounded text-yellow-900"
                            : "bg-green-200 border border-green-500 px-3 py-1 rounded text-green-900"
                          }`}
                        title={lead.status}
                      >
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </section>
  );
}
