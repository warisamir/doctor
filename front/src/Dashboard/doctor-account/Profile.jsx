import {useState} from 'react';
import {AiOutlineDash} from react-icons/ai
 
const Profile = () => {
    const [formData, setFormData]=useState({
        name:"",
        email:"",
        phone:"",
        bio:"",
        gender:"",
        specialization:"",
        ticketPrice:0,
        qualifications:[{startingDate:"",endingDate:"",degree:"fgag",university:"gap"}],
        experiences:[],
        timeSlots:[]
    })
    const handleInputChange= e =>{
       setFormData({ ...formData ,[e.target.name]:e.target.value})
    };
  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile information{" "}
      </h2>
      <form>
        <div className="mb-5">
          <p className="form__label">Name*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="full Name"
            className="form__input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Email*</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Email"
            readOnly
            aria-readonly
            className="form__input"
            disabled="true"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Phone*</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone number"
            className="form__input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Bio*</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className="form__input"
            maxLength={100}
          />
        </div>
        <div className="mb-5">
          <div className="grid gird-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form__label">Gender*</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className="form__label">Specialization*</p>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="Surgeon">Surgeon</option>
                <option value="Neurologist">Neurologist</option>
                <option value="dermatologist">dermatologist</option>
              </select>
            </div>

            <div>
              <p className="form__label">Ticket Price*</p>
              <input
                type="number"
                placeholder="100"
                name="ticketPrice"
                value={formData.ticketPrice}
                className="form__input"
                onChange={handleInputChange}
              />
            </div>
            
            <div className="mb-5">
                <p className='form__label'>Qualifications*</p>
                {formData.qualifications?.map((Item,index)=>(
                <div key={index}>
                    <div>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <p className='form__label'>Starting Date*</p>
                                <input type="data" name="startingDate" value={Item.startingDate}
                                className='form__input'/>
                            </div>

                            <div>
                                <p className='form__label'>Ending Date*</p>
                                <input type="data" name="EndingDate" value={Item.endingDate}
                                className='form__input'/>
                            </div>
                           

                          
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <p className='form__label'>Degree*</p>
                                <input type="data" name="degree" value={Item.degree}
                                className='form__input'/>
                            </div>

                            <div>
                                <p className='form__label'>University*</p>
                                <input type="text" 
                                name="Univeristy" value={Item.university}
                                className='form__input'/>
                            </div>

                            <button><AiOutlineDelete/></button>
                        </div>

                    </div>
                </div>))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profile