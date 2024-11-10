import CHAT from "@/components/CHAT";
import MessageHead from "@/components/MESSAGEHEADE";
import SideBar from "@/components/SIDEBAR";

export default function Messaging() {
  return (
    <div className="messaging-container flex h-screen">
      {/* Sidebar */}
      <div className="sidebar lg:w-[250px] ">
        <SideBar />
      </div>

      {/* Main messaging area */}
      <div className="main-content flex-grow pt-20  ">
        <MessageHead />
        <CHAT/>
      </div>
    </div>
  );
}
