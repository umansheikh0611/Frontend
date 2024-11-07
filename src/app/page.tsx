
import Link from "next/link";
import { Button } from "@/components/ui/button";
// 1. login/SignUp 
// 2. messaging page
// 3. Dashboard to show the leads
// 4. Activity log page 

export default function Home() {
  return (
    <div className="flex flex-col h-screen gap-5 ">
<Button>    <Link href={'/signup'}>Sign Up</Link></Button>
<Button>    <Link href={'/dashboard'}>Dashboard</Link></Button>
<Button>    <Link href={'/profile'}>Profile</Link></Button>
    </div>
  );
}
