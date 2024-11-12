import { AiOutlineMessage } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { GrHomeRounded } from "react-icons/gr";

export default function ActivityHead() {
  return (
    <nav className="w-full h-full lg:pt-3  md:pt-20 sm:pt-20  gap-3 bg-white shadow-md flex flex-col px-10  py-3 items-start  ">
      <div className="flex justify-between w-full h-1/2 items-start ">
        <h1 className=" text-3xl font-bold ">Eilan Warren</h1>
        <ul className="flex gap-3 justify-center items-center ">
          <li className="flex gap-2 items-center justify-center ">
            {" "}
            <AiOutlineMessage className="text-2xl" />
            <span className="text-sm">Give FeedBack</span>{" "}
          </li>
          <li className="text-2xl  border border-black rounded">
            <MdKeyboardArrowUp />
          </li>
          <li className="text-2xl border border-black rounded">
            <MdKeyboardArrowDown />
          </li>
          <li className="text-2xl">
            <BsThreeDots />
          </li>
          <li className="text-2xl">
            <RxCross1 />
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-3 justify-start items-center text-sm ">
          <li className="flex gap-2 items-center justify-center  ">
            <GrHomeRounded /> <span>Overview</span>
          </li>
          <li className="border-l border-r border-black px-2">Updates </li>
          <li>
            <select id="More" name="More" className="bg-transparent">
              <option value="more">More</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}
