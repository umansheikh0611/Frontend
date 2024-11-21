"use client";

import ProfileForm from "@/components/FORM";
import ProfileHead from "@/components/ProfileHead";
import SideBar from "@/components/SIDEBAR";
import withAuth from "@/app/dashboard/withAuth";

const Profile = () => {
  return (
    <main className=" flex overflow-x-hidden min-h-screen">
   
      <div className="block lg:w-[250px] fixed top-0 left-0 h-full  z-50">
        <SideBar />
      </div>
      <div className="w-full lg:ml-[250px] h-full pt-20 lg:pt-0 ">
        <ProfileHead />
        <ProfileForm />
      </div>
    </main>
  );
}

export default withAuth(Profile);