import ProfileForm from "@/components/FORM"
import ProfileHead from "@/components/ProfileHead"

export default function Profile(){
    return(
       <section className="w-full h-full p-5
       lg:p-10
       " >
        <ProfileHead/>
        <ProfileForm/>
       </section>
    )
}