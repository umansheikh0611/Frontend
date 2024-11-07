import ProfileForm from "@/components/FORM";
import ProfileHead from "@/components/ProfileHead";
import SideBar from "@/components/SIDEBAR";

export default function Profile() {
  return (
    <main className="bg-gray-200 flex overflow-x-hidden min-h-screen">
      {/* Sidebar with fixed width on large screens */}
      <div className="lg:w-[250px]">
        <SideBar />
      </div>

      {/* Main content area */}
      <div className="flex-1 p-5 lg:p-10 w-full h-full pt-20 lg:pt-5">
        <ProfileHead />
        <ProfileForm />
      </div>
    </main>
  );
}
