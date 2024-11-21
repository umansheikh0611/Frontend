import { useState } from "react";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
import { Button } from "@/components/ui/button";

type LoginProps = {
  toggleForm: () => void;
};

const therapyOptions = [
  { value: "Dentist", label: "Dentist" },
  { value: "Cardiologist", label: "Cardiologist" },
  { value: "Neurologist", label: "Neurologist" },
  { value: "Orthopedic", label: "Orthopedic" },
  { value: "Gynecologist", label: "Gynecologist" },
  { value: "Pediatrician", label: "Pediatrician" },
];

const timezoneOptions = [
  { value: "Africa/Addis_Ababa", label: "GMT+03:00 Africa/Addis_Ababa" },
  { value: "Africa/Algiers", label: "GMT+01:00 Africa/Algiers" },
  { value: "Africa/Asmara", label: "GMT+03:00 Africa/Asmara" },
  { value: "Africa/Cairo", label: "GMT+02:00 Africa/Cairo" },
  { value: "America/New_York", label: "GMT-05:00 America/New_York" },
];

export default function SignUp({ toggleForm }: LoginProps) {
  const [step, setStep] = useState(1);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    website: "",
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
    clinic_name: "",
    therapy: "",
    phone: "",
    doctor_name: "",
    profession: "",
    address: "",
    timezone: "",
    website: "",
    doctor_image: null,
    clinic_image: null,
    monday_open: "09:00",
    monday_close: "17:00",
    tuesday_open: "09:00",
    tuesday_close: "17:00",
    wednesday_open: "09:00",
    wednesday_close: "17:00",
    thursday_open: "09:00",
    thursday_close: "17:00",
    friday_open: "09:00",
    friday_close: "17:00",
  });

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password: string) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  const validateURL = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });

      if (name === "email") {
        setErrors((prev) => ({
          ...prev,
          email: validateEmail(value) ? "" : "Please enter a valid email.",
        }));
      }
      if (name === "password") {
        setErrors((prev) => ({
          ...prev,
          password: validatePassword(value)
            ? ""
            : "Password must have 8 characters, uppercase, number, and symbol.",
        }));
      }
      if (name === "confirmPassword") {
        setErrors((prev) => ({
          ...prev,
          confirmPassword:
            value === formData.password ? "" : "Passwords do not match.",
        }));
      }
      if (name === "website") {
        setErrors((prev) => ({
          ...prev,
          website: value === "" || validateURL(value)
            ? ""
            : "Please enter a valid URL.",
        }));
      }
    }
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.email || errors.email) {
        alert("Please fix the email field before proceeding.");
        return;
      }
      if (!formData.password || errors.password || errors.confirmPassword) {
        alert("Please fix the password fields before proceeding.");
        return;
      }
    }
    if (step === 3 && errors.website) {
      alert("Please fix the website field before proceeding.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    setStep(5);

    const formDataToSend = new FormData();
    (Object.keys(formData) as (keyof typeof formData)[]).forEach((key) => {
      formDataToSend.append(key, formData[key] as any);
    });

    try {
      const response = await fetch("http://127.0.0.1:8000/api/doctor/", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setStep(6);
      } else {
        alert("Please fill all the fields including images");
        setStep(4);
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form!");
      setStep(4);
    }
  };

  return (
    <section className="h-100vh flex justify-center items-center flex-col py-20 px-5 lg:w-1/2 md:w-full">
      <div className="w-80 flex flex-col gap-5">
        <div>
          <h2 className="font-bold text-2xl">
            {step === 1 && "Sign Up for an Account"}
            {step === 2 && "Clinic Details"}
            {step === 3 && "Personal Details"}
            {step === 4 && "Uploads"}
            {step === 5 && "Submitting"}
            {step === 6 && "Successful"}
          </h2>
        </div>

        {step === 1 && (
          <div className="flex flex-col items-start justify-center gap-5">
            <div className="relative w-full">
              <FaEnvelope className="absolute left-3 top-3.5 text-gray-500" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className={`bg-transparent border rounded-lg w-full p-3 pl-10 ${errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                value={formData.email}
                onChange={(e) => {
                  handleChange(e); // Update email
                  setFormData((prev) => ({
                    ...prev,
                    username: e.target.value, // Automatically set username equal to email
                  }));
                }}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-2 pl-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="relative w-full mt-4">
              <FaLock className="absolute left-3 top-3.5 text-gray-500" />
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                required
                className={`bg-transparent border rounded-lg w-full p-3 pl-10 ${errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                value={formData.password}
                onChange={handleChange}
              />
              <span
                onClick={() => setPasswordVisible(!isPasswordVisible)}
                className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
              >
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.password && (
                <p className="text-sm text-red-500 mt-2 pl-1">
                  {errors.password}
                </p>
              )}
            </div>


            <div className="relative w-full">
              <FaLock className="absolute left-3 top-3.5 text-gray-500" />
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                className={`bg-transparent border rounded-lg w-full p-3 pl-10 pr-10 ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  }`}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <span
                onClick={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}
                className="absolute right-3 top-3.5 cursor-pointer text-gray-500"
              >
                {isConfirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-2 pl-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div>
                <p className="text-sm text-gray-500 ">
                  Already have an account?{" "}
                  <span
                    onClick={toggleForm}
                    className="text-blue-600 cursor-pointer "
                  >
                    Login
                  </span>
                </p>
              </div>

            <Button onClick={handleNext} className="w-full text-1xl">
              Next
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col items-start justify-center gap-5">
            {/* Clinic Details */}
            <input
              type="text"
              name="clinic_name"
              placeholder="Clinic Name"
              required
              className="bg-transparent border rounded-lg w-full p-3"
              value={formData.clinic_name}
              onChange={handleChange}
            />


            <div className="relative w-full">
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="bg-transparent border rounded-lg w-full p-3"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="relative w-full">
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
                className="bg-transparent border rounded-lg w-full p-3"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <select
              name="therapy"
              className="bg-transparent border rounded-lg w-full p-3"
              value={formData.therapy}
              onChange={handleChange}
            >
              <option value="">Select Therapy Type</option>
              {therapyOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <div className="relative w-full">
              <select
                name="timezone"
                className="bg-transparent border rounded-lg w-full p-3"
                value={formData.timezone}
                onChange={handleChange}
              >
                <option value="">Select Time Zone</option>
                {timezoneOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative w-full">
            <label>Monday Opening Time</label>
              <input
                type="time"
                name="monday_open"
                placeholder="Monday Opening Time"
                required
                className="bg-transparent border rounded-lg w-full p-3"
                value={formData.monday_open}
                onChange={handleChange}
              />
            </div>

            <div className="relative w-full">
            <label>Monday Closing Time</label>
              <input
                type="time"
                name="monday_close"
                placeholder="Monday Closing Time"
                required
                className="bg-transparent border rounded-lg w-full p-3"
                value={formData.monday_close}
                onChange={handleChange}
              />

            </div>

            <div className="relative w-full">
            <label>Tuesday Opening Time</label>
              <input
                type="time"
                name="tuesday_open"
                placeholder="Tuesday Opening Time"
                required
                className="bg-transparent border rounded-lg w-full p-3"
                value={formData.tuesday_open}
                onChange={handleChange}
              />
            </div>

            <div className="relative w-full">
            <label>Tuesday Closing Time</label>
              <input
                type="time"
                name="tuesday_close"
                placeholder="Tuesday Closing Time"
                required
                className="bg-transparent border rounded-lg w-full p-3"
                value={formData.tuesday_close}
                onChange={handleChange}
              />
            </div>

            <div className="relative w-full">
            <label>Wednesday Opening Time</label>
              <input
                type="time"
                name="wednesday_open"
                placeholder="Wednesday Opening Time"
                required
                className="bg-transparent border rounded-lg w-full p-3"
                value={formData.wednesday_open}
                onChange={handleChange}
              />
            </div>

            <div className="relative w-full">
            <label>Wednesday Closing Time</label>
              <input
                type="time"
                name="wednesday_close"
                placeholder="Wednesday Closing Time"
                required
                className="bg-transparent border rounded-lg w-full p-3"
                value={formData.wednesday_close}
                onChange={handleChange}
              />
            </div>

            <div className="relative w-full">
            <label>Thursday Opening Time</label>
              <input
                type="time"
                name="thursday_open"
                placeholder="Thursday Opening Time"
                required
                className="bg-transparent border rounded-lg w-full p-3"
                value={formData.thursday_open}
                onChange={handleChange}
              />
            </div>

            <div className="relative w-full">
            <label>Thursday Closing Time</label>
              <input
                type="time"
                name="thursday_close"
                placeholder="Thursday Closing Time"
                required
                className="bg-transparent border rounded-lg w-full p-3"
                value={formData.thursday_close}
                onChange={handleChange}
              />
            </div>

            <div className="relative w-full">
              <label>Friday Opening Time</label>
              <input
                type="time"
                name="friday_open"
                placeholder="Friday Opening Time"
                required
                className="bg-transparent border rounded-lg w-full p-3"
                value={formData.friday_open}
                onChange={handleChange}
              />
            </div>

            <div className="relative w-full">
            <label>Friday Closing Time</label>
              <input
                type="time"
                name="friday_close"
                placeholder="Friday Closing Time"
                required
                className="bg-transparent border rounded-lg w-full p-3"
                value={formData.friday_close}
                onChange={handleChange}
              />
            </div>



            <Button onClick={handleNext}>Next</Button>
          </div>
        )}

        {/* Step 3: Personal Details */}
        {step === 3 && (
          <div className="flex flex-col items-start justify-center gap-5">
            <div className="relative w-full">
              <input
                type="text"
                name="doctor_name"
                placeholder="Doctor Name"
                className="bg-transparent border rounded-lg w-full p-3"
                value={formData.doctor_name}
                onChange={handleChange}
              />
            </div>
            <div className="relative w-full">
              <input
                type="text"
                name="profession"
                placeholder="Profession"
                className="bg-transparent border rounded-lg w-full p-3"
                value={formData.profession}
                onChange={handleChange}
              />
            </div>
            <div className="relative w-full">
              <input
                type="text"
                name="website"
                placeholder="Website"
                className="bg-transparent border rounded-lg w-full p-3"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            
            <div className="flex gap-3 w-full">
              <Button onClick={handlePrevious} className="w-1/2 text-1xl">
                Previous
              </Button>
              <Button onClick={handleNext} className="w-1/2 text-1xl">
                Next
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Uploads */}
        {step === 4 && (
          <div className="flex flex-col items-start justify-center gap-5">
            <div className="relative w-full">
              <label>Doctor Image</label>
              <input
                type="file"
                name="doctor_image"
                onChange={handleChange}
                className="bg-transparent border rounded-lg w-full p-3"
              />
            </div>
            <div className="relative w-full">
              <label>Clinic Logo</label>
              <input
                type="file"
                name="clinic_image"
                onChange={handleChange}
                className="bg-transparent border rounded-lg w-full p-3"
              />
            </div>

            <div>
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

            <div className="flex gap-3 w-full">
              <Button onClick={handlePrevious} className="w-1/2 text-1xl">
                Previous
              </Button>
              <Button onClick={handleSubmit} className="w-1/2 text-1xl">
                Submit
              </Button>
            </div>
          </div>
        )}


        {step === 5 && (
          <div className="flex justify-center items-center flex-col">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
            <p className="mt-4 text-lg font-semibold text-gray-600">Submitting...</p>
          </div>
        )}

        {step === 6 && (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Thank You for Signing Up!</h1>
            <Button
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
              onClick={toggleForm}
            >
              Login Now
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
