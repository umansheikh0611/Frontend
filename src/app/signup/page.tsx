"use client"
import { useState } from "react"; // Import useState hook
import LeftSide from "@/components/LEFT";
import Login from "@/components/LOGIN";
import Signup from "@/components/SIGNUP";


export default function MainComponent() {
   
    const [isLogin, setIsLogin] = useState(false); 

    const toggleForm: () => void = () => {
        setIsLogin(prevState => !prevState);
    };


    return (
        <main className="flex flex-wrap overflow-x-hidden  ">
            <LeftSide />
    
            {isLogin ? (
           <>
                 <Login toggleForm={toggleForm} /> 
              
          
           </>
            ) : (
        <>
            <Signup toggleForm={toggleForm}  /> 
             
        </>    
                
            )}
        </main>
    );
}
