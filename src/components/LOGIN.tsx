
import { useState } from 'react';
import { FaEye, FaEyeSlash,  FaLock , FaEnvelope} from 'react-icons/fa';
import { Button } from "@/components/ui/button";
type LoginProps = {
  toggleForm: () => void;
};

export default function Login({ toggleForm }: LoginProps) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <section className="h-100vh flex justify-center items-center flex-col py-20 px-5 lg:w-1/2 md:w-full">
      <div className="w-80 flex flex-col gap-5">
        <div>
          <h2 className="font-bold text-2xl">Login to Your Account</h2>
        </div>
        
        <div className="flex flex-col items-start justify-center gap-5">
          <div className='relative w-full' >

            <FaEnvelope className='absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500' />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="bg-transparent border rounded-lg w-full p-3 pl-10"
          />
          
          </div>
          {/* Password Input with Icon */}
          <div className="relative w-full">
          <FaLock className='absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500' />
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Password"
              required
              className="bg-transparent border rounded-lg w-full p-3 pr-10 pl-10" // added padding-right for icon space
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        
        <div>
          <p className="text-xs text-gray-500">Your password must have at least 8 characters</p>
          
          <div className="flex justify-start items-start gap-3 py-5">
            <input type="checkbox" className="transform scale-150" />
            <p className="text-sm text-gray-500">
              By creating an account means you agree to the 
              <span className="text-black font-bold"> Terms & Conditions</span> and 
              <span className="text-black font-bold"> our Privacy Policy</span>
            </p>
          </div>
        </div>
        
        <div className="w-full">
          <Button className="w-full text-1xl">Login</Button>
        </div>
        
        <div>
          <p className="text-sm text-gray-500">
            {`Don't have an account?`} 
            <span onClick={toggleForm} className="text-blue-600 cursor-pointer"> Sign Up</span>
          </p>
        </div>
      </div>
    </section>
  );
}
