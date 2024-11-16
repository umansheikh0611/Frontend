export default function ProfileForm(){
    return(
        <section className="w-full  lg:w-[80vw] xl:w-[70vw] flex justify-center my-10" >
 <form className="flex flex-wrap justify-center gap-5 p-5">
  <label className="clinic-label">
    Clinic Name
    <input type="text" name="clinicName" placeholder="Your Clinic Name" className="clinic-input" />
  </label>
  <label className="clinic-label">
    Doctor Name
    <input type="text" name="doctorName" placeholder="Doctor's Name" className="clinic-input" />
  </label>
  <label className="clinic-label">
    Clinic Email
    <input type="email" name="clinicEmail" placeholder="Your Clinic Email" className="clinic-input" />
  </label>
  <label className="clinic-label">
    Address
    <input type="text" name="address" placeholder="Clinic Address" className="clinic-input" />
  </label>
  <label className="clinic-label">
    Phone
    <input type="text" name="phone" placeholder="Your Phone Number" className="clinic-input" />
  </label>
  <label className="clinic-label">
    Category
    <input type="text" name="category" placeholder="Category" className="clinic-input" />
  </label>
  <label className="clinic-label">
    LinkedIn Profile
    <input type="text" name="linkedinProfile" placeholder="Your LinkedIn Profile" className="clinic-input" />
  </label>

  <label className="clinic-label">
    Website
    <input type="text" name="website" placeholder="Website URL" className="clinic-input" />
  </label>

  <label className="clinic-label">
    Opening Hours: Monday
    <input type="text" name="openingHoursMonday" placeholder="Opening Hours for Monday" className="clinic-input" />
  </label>
  <label className="clinic-label">
    Opening Hours: Monday
    <input type="text" name="openingHoursMonday" placeholder="Opening Hours for Monday" className="clinic-input" />
  </label>
  <label className="clinic-label">
    Opening Hours: Monday
    <input type="text" name="openingHoursMonday" placeholder="Opening Hours for Monday" className="clinic-input" />
  </label>
  <label className="clinic-label">
    Opening Hours: Monday
    <input type="text" name="openingHoursMonday" placeholder="Opening Hours for Monday" className="clinic-input" />
  </label>
</form>

        </section>
    )
}