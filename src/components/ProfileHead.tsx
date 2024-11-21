import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import FORM from "./FORM";

export default function ProfileHead() {
    const [doctorData, setDoctorData] = useState({
        doctor_name: "",
        email: "",
        doctor_image: "",
    });

    useEffect(() => {
        const doctorString = localStorage.getItem("doctor");
        const doctor = doctorString ? JSON.parse(doctorString) : null;

        if (doctor) {
            const fetchAndSaveImage = async () => {
                try {
                    const response = await fetch("/api/saveImage", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            imageUrl: doctor.doctor_image,
                            imageName: "profile_image.jpg",
                        }),
                    });

                    const data = await response.json();

                    if (response.ok) {
                        setDoctorData({
                            doctor_name: doctor.doctor_name || "Unknown Doctor",
                            email: doctor.email || "No Email Provided",
                            doctor_image: data.path || "/default-profile.jpg",
                        });
                    } else {
                        console.error(data.error);
                        setDoctorData({
                            doctor_name: doctor.doctor_name || "Unknown Doctor",
                            email: doctor.email || "No Email Provided",
                            doctor_image: "/default-profile.jpg",
                        });
                    }
                } catch (error) {
                    console.error("Error fetching and saving image:", error);
                }
            };

            fetchAndSaveImage();
        }
    }, []);

    return (
        <section className="flex items-center gap-10 justify-between flex-wrap p-10">
            <div className="flex items-center gap-10">
                <div className="rounded-full overflow-hidden w-[150px] h-[150px]">
                    <Image
                        src={doctorData.doctor_image || "/default-profile.jpg"}
                        alt={`${doctorData.doctor_name}'s Profile`}
                        width={150}
                        height={150}
                        className="object-cover"
                        style={{ objectFit: "cover", width: "100%", height: "100%" }} // Ensure the image fills the container
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">{doctorData.doctor_name}</h2>
                    <p className="text-sm text-gray-400">{doctorData.email}</p>
                </div>
            </div>
            {/* <Button>Update</Button> */}
        </section>
    );
}
