import { IoSettingsOutline } from "react-icons/io5";
import { Button } from "./ui/button";

export default function ActivityLead() {
  return (
    <section className="w-full p-2 lg:px-5 z-0"> {/* Added z-0 here */}
      <div className="w-full bg-white border border-gray-400 rounded-xl py-10 gap-3 flex flex-col justify-center items-center">
        <div className="w-[80%] flex justify-between items-center flex-wrap gap-3">
          <ul className="flex gap-2">
            <li className="text-sm bg-blue-200 rounded px-1">Agenty Inc.</li>
            <li className="text-sm bg-blue-200 rounded px-1">COO</li>
            <li className="text-sm bg-blue-200 rounded px-1">Elian@company.com</li>
            <IoSettingsOutline />
          </ul>
          <div className="flex gap-2">
            <Button className="bg-green-700">Qualified</Button>
            <Button className="bg-red-700">UnQualified</Button>
          </div>
        </div>
        <div>
          <ul className="flex w-full justify-center items-center z-0 text-white flex-wrap gap-1">
            <li className="w-56 py-1 text-center text-sm bg-green-800 angle">New Lead</li>
            <li className="w-56 py-1 text-center text-sm bg-green-800 angle">Attempted to contact</li>
            <li className="w-56 py-1 text-center text-sm bg-green-800 angle">Contacted</li>
            <li className="w-56 py-1 text-center text-sm bg-gray-400 angle">Closed</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
