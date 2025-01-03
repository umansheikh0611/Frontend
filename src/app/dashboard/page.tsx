"use client";

import SideBar from "@/components/SIDEBAR"
import Leads from "@/components/LEADS"
import withAuth from "@/app/dashboard/withAuth";


const dashboard = () =>{
    return(
<main className="bg-gray-200 flex overflow-x-hidden 
lg:pl-[250px]
md:pl-0" >
<SideBar  />
<Leads/>
</main>    )
}

export default withAuth(dashboard)