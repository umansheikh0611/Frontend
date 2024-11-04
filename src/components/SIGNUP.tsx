import { Button } from "@/components/ui/button";

type LoginProps = {
  toggleForm: () => void;
};
export default function SignUp({ toggleForm }: LoginProps){
  return (
    <section className="h-100vh flex justify-center items-center flex-col py-20 px-5
     lg:w-1/2
    md:w-full
    ">
      <div className=" w-80 flex flex-col gap-5">
        <div>
          <h2 className="font-bold text-2xl">Sign Up for an Account</h2>
        </div>
        <div className=" flex flex-col items-start justify-cente  gap-5 ">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Last name"
            required
            className=" bg-transparent border rounded-lg w-full p-3  "
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="First name"
      className=" bg-transparent border rounded-lg w-full p-3  "
            required
          />
          <select id="category" name="category"
          className=" bg-transparent border rounded-lg w-full p-3  " required>
            <option value="">Select a category</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Professional">Professional</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className=" bg-transparent border rounded-lg w-full p-3  "
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            className=" bg-transparent border rounded-lg w-full p-3  "
          />
        </div>
        <div>
        <div>
          <p className="text-xs text-gray-500 " >Your password must have at least 8 characters</p>
        </div>
        <div className="flex justify-start items-start gap-3 py-5 " >
     <div >
     <input type="checkbox" className="transform scale-150" />
     </div>

         <div>
         <p className="text-sm text-gray-500 ">
            By creating an account means you agree to the
            <span className="text-black font-bold ">Terms & Conditions</span> and <span className="text-black font-bold " >our Privacy Policy</span>
          </p>
         </div>
        </div>
        </div>
        <div className="w-full" >
            <Button className="w-full text-1xl" >Sign Up</Button>
        </div>
        <div> <p className="text-sm text-gray-500 ">
              Already have an account? <span onClick={toggleForm}  className="text-blue-600 cursor-pointer " >Login</span>
            </p></div>
      </div>
    </section>
  );
}
