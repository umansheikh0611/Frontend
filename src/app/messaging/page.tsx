import CHAT from "@/components/CHAT";
import MessageHead from "@/components/MESSAGEHEADE";
import SideBar from "@/components/SIDEBAR";

export default function Messaging() {
  return (
    <div className="messaging-container flex h-screen">
      {/* Sidebar */}
      <div className="block lg:w-[250px] fixed top-0 left-0 h-full bg-gray-100 z-50">
        <SideBar />
      </div>

      {/* Main messaging area */}
      <div className="w-full lg:ml-[250px] h-full pt-20 lg:pt-0 bg-gray-200 ">
        <MessageHead />
        <CHAT/>
      </div>
    </div>
  );
}
