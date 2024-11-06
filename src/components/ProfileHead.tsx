import Image from "next/image"
import { Button } from "./ui/button"
export default function ProfileHead(){
    return(
        <section className="flex items-center gap-10 justify-between flex-wrap " >
          <div className="flex items-center gap-10 " >
          <div className="rounded-full overflow-hidden w-[150px] h-[150px]">
    <Image 
        src={'/profilee.png'} 
        alt="" 
        width={200} 
        height={200} 
        className="object-cover" 
    />
</div>
            <div className="flex flex-col gap-2" >
                <h2 className="text-2xl font-bold" >Alexa</h2>
                <p className="text-sm text-gray-400" >alexa@gmail.com</p>
            </div>
          </div>
          <Button>Add</Button>
        </section>
    )
}