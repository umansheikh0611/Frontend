import { useState, useEffect } from "react";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    clinicName: "",
    doctorName: "",
    clinicEmail: "",
    address: "",
    phone: "",
    category: "",
    website: "",
    profession: "",
    mondayOpen: "",
    mondayClose: "",
    tuesdayOpen: "",
    tuesdayClose: "",
    wednesdayOpen: "",
    wednesdayClose: "",
    thursdayOpen: "",
    thursdayClose: "",
    fridayOpen: "",
    fridayClose: ""
  });

  useEffect(() => {
    // Fetch doctor data from localStorage
    const doctor = JSON.parse(localStorage.getItem("doctor") || "{}");

    // Populate form fields with doctor data
    setFormData({
      clinicName: doctor.clinic_name || "",
      doctorName: doctor.doctor_name || "",
      clinicEmail: doctor.email || "",
      address: doctor.address || "",
      phone: doctor.phone || "",
      category: doctor.therapy || "",
      website: doctor.website || "",
      profession: doctor.profession || "",
      mondayOpen: doctor.monday_open || "",
      mondayClose: doctor.monday_close || "",
      tuesdayOpen: doctor.tuesday_open || "",
      tuesdayClose: doctor.tuesday_close || "",
      wednesdayOpen: doctor.wednesday_open || "",
      wednesdayClose: doctor.wednesday_close || "",
      thursdayOpen: doctor.thursday_open || "",
      thursdayClose: doctor.thursday_close || "",
      fridayOpen: doctor.friday_open || "",
      fridayClose: doctor.friday_close || "",
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async () => {
    try {
      const doctor = JSON.parse(localStorage.getItem("doctor") || "{}");
      const response = await fetch(`http://127.0.0.1:8000/api/doctor/${doctor.id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clinic_name: formData.clinicName,
          doctor_name: formData.doctorName,
          email: formData.clinicEmail,
          address: formData.address,
          phone: formData.phone,
          therapy: formData.category,
          website: formData.website,
          profession: formData.profession,
          monday_open: formData.mondayOpen,
          monday_close: formData.mondayClose,
          tuesday_open: formData.tuesdayOpen,
          tuesday_close: formData.tuesdayClose,
          wednesday_open: formData.wednesdayOpen,
          wednesday_close: formData.wednesdayClose,
          thursday_open: formData.thursdayOpen,
          thursday_close: formData.thursdayClose,
          friday_open: formData.fridayOpen,
          friday_close: formData.fridayClose,
        }),
      });

      if (response.ok) {
        alert("Profile updated successfully!");
      } else {
        const errorData = await response.json();
        console.error("Failed to update profile:", errorData);
        alert("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred while updating the profile.");
    }
  };


  return (
    <section className="w-full lg:w-[80vw] xl:w-[70vw] flex justify-center my-10">
      <form className="flex flex-wrap justify-center gap-5" onSubmit={(e) => e.preventDefault()}>
        <label className="clinic-label">
          Clinic Name
          <input
            type="text"
            name="clinicName"
            placeholder="Your Clinic Name"
            className="clinic-input"
            value={formData.clinicName}
            onChange={handleChange}
          />
        </label>
        <label className="clinic-label">
          Doctor Name
          <input
            type="text"
            name="doctorName"
            placeholder="Doctor's Name"
            className="clinic-input"
            value={formData.doctorName}
            onChange={handleChange}
          />
        </label>
        <label className="clinic-label">
          Clinic Email
          <input
            type="email"
            name="clinicEmail"
            placeholder="Your Clinic Email"
            className="clinic-input"
            value={formData.clinicEmail}
            onChange={handleChange}
            disabled
          />
        </label>
        <label className="clinic-label">
          Address
          <input
            type="text"
            name="address"
            placeholder="Clinic Address"
            className="clinic-input"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <label className="clinic-label">
          Phone
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            className="clinic-input"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label className="clinic-label">
          Category
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="clinic-input"
            value={formData.category}
            onChange={handleChange}
            disabled
          />
        </label>
        <label className="clinic-label">
          Website
          <input
            type="text"
            name="website"
            placeholder="Website URL"
            className="clinic-input"
            value={formData.website}
            onChange={handleChange}
          />
        </label>
        <label className="clinic-label">
          Profession
          <input
            type="text"
            name="Profession"
            placeholder="Profession"
            className="clinic-input"
            value={formData.profession}
            onChange={handleChange}
            disabled
          />
        </label>
        <label className="clinic-label">
          Monday Opening Hours
          <input
            type="text"
            name="mondayOpen"
            placeholder="Opening Hours for Monday"
            className="clinic-input"
            value={formData.mondayOpen}
            onChange={handleChange}
          />
        </label>
        <label className="clinic-label">
          Monday Closing Hours
          <input
            type="text"
            name="mondayClose"
            placeholder="Closing Hours for Monday"
            className="clinic-input"
            value={formData.mondayClose}
            onChange={handleChange}
          />
        </label>
        <label className="clinic-label">
          Tuesday Opening Hours
          <input
            type="text"
            name="tuesdayOpen"
            placeholder="Opening Hours for Tuesday"
            className="clinic-input"
            value={formData.tuesdayOpen}
            onChange={handleChange}
          />
        </label>
        <label className="clinic-label">
          Tuesday Closing Hours
          <input
            type="text"
            name="tuesdayClose"
            placeholder="Closing Hours for Tuesday"
            className="clinic-input"
            value={formData.tuesdayClose}
            onChange={handleChange}
          />
        </label>
        <label className="clinic-label">
          Wednesday Opening Hours
          <input
            type="text"
            name="wednesdayOpen"
            placeholder="Opening Hours for Wednesday"
            className="clinic-input"
            value={formData.wednesdayOpen}
            onChange={handleChange}
          />
        </label>
        <label className="clinic-label">
          Wednesday Closing Hours
          <input
            type="text"
            name="wednesdayClose"
            placeholder="Closing Hours for Wednesday"
            className="clinic-input"
            value={formData.wednesdayClose}
            onChange={handleChange}
          />
        </label>
        <label className="clinic-label">
          Thursday Opening Hours
          <input
            type="text"
            name="thursdayOpen"
            placeholder="Opening Hours for Thursday"
            className="clinic-input"
            value={formData.thursdayOpen}
            onChange={handleChange}
          />
        </label>
        <label className="clinic-label">
          Thursday Closing Hours
          <input
            type="text"
            name="thursdayClose"
            placeholder="Closing Hours for Thursday"
            className="clinic-input"
            value={formData.thursdayClose}
            onChange={handleChange}
          />
        </label>
        <label className="clinic-label">
          Friday Opening Hours
          <input
            type="text"
            name="fridayOpen"
            placeholder="Opening Hours for Friday"
            className="clinic-input"
            value={formData.fridayOpen}
            onChange={handleChange}
          />
        </label>
        <label className="clinic-label">
          Friday Closing Hours
          <input
            type="text"
            name="fridayClose"
            placeholder="Closing Hours for Friday"
            className="clinic-input"
            value={formData.fridayClose}
            onChange={handleChange}
          />
        </label>

      </form>
    </section>
  );
}
