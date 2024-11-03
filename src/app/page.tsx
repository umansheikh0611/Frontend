
import Link from "next/link";
import { Button } from "@/components/ui/button";
// 1. login/SignUp 
// 2. messaging page
// 3. Dashboard to show the leads
// 4. Activity log page 

export default function Home() {
  return (
    <div className="flex flex-col h-screen "
    onContextMenu={(e) => e.preventDefault()}>
<Button>    <Link href={'/signup'}>Sign Up</Link></Button>

    </div>
  );
}
