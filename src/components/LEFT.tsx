import Image from "next/image"
export default function LeftSide(){
    return(
       <section className="h-[100vh] bg-[#2563eb]  flex flex-col p-10
w-full
lg:w-1/2 ">
        <div className="logo flex gap-2 p-5 
        lg:p-8">
            <Image src={'/logo.png'} alt="" width={200}  height={200}/>
           
        </div>
        <div className="mid flex w-full justify-center items-center mt-28 mb-10">
            <Image src={'/mid.png'} alt="" width={400}  height={400}/>
        </div>
        <div className="txt flex flex-col justify-center items-center text-white gap-2">
            <h2 className="font-semibold text-2xl ">Secure Patients & Grow your Business</h2>
            <p className="text-sm">Everything you need in an easily customizable dashboard.</p>
        </div>
       </section>
    )
}