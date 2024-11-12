import ActivityBoard from "@/components/ACTIVITYBOARD";
import ActivityHead from "@/components/ACTIVITYHEAD";
import ActivityLead from "@/components/ACTIVITYLEAD";
import SideBar from "@/components/SIDEBAR";

export default function Activity(){
    return(
        <div className="flex">
        {/* Sidebar */}
        <div className="block lg:w-[250px] fixed top-0 left-0 h-full bg-gray-100 z-50">
          <SideBar />
        </div>
      
        {/* Main Content */}
        <div className="w-full lg:ml-[250px] h-full pt-20 lg:pt-0 bg-gray-200 ">
          <ActivityHead />
          <ActivityLead />
          <ActivityBoard/>
        </div>
      </div>
    )
}