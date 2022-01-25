import React, { useState } from 'react'
import axios from 'axios';
import apiList from '../../lib/apiList';


const PersonalDetails = ({profile,setProfile})=>{
   console.log(profile)


//    const [personaldetails, setPersonaldetails] = useState([
//     {
//       dateofbirth: "",
//       address: "",
//       gender: "",
//       pincode: "",
//       maritalStatus: "",
//       hometown: "",
//       languages:[],
//     },
//   ]);
  const onchangeHandling = (e)=>{
    setProfile({
        ...profile,
        personaldetails:{
            [e.target.name]: e.target.value
        },
      })
  }
  console.log(profile.personaldetails)
  const handlePersonal = (e) => {
    e.preventDefault()
    console.log(profile.personaldetails)
    // axios
    //   .put(apiList.user, profile, {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    // //    getData();
    //   })
    //   .catch((err) => {
       
    //     console.log(err.response);
    //   });
    
  };
    return(
        <>
    <div className="content">
        <div className="job-bx-title clearfix">
      <h5 className=" pull-left text-capitalize cp">
        Personal Details
      </h5>
      
      <a
        href="#"
        className="site_button_resume  float-right"
        data-toggle="modal"
        data-target="#personalDetails"
      >
        {" "}
        <span>
          <i className="fas fa-pencil-alt pencil_clearfix"></i>
        </span>{" "}
      </a>
    </div>
    <div className="container-fluid career_profile">
     
          
                   <div className="row mt-4">
                  <div className="col-lg-6 col-md-6 career_profile_column">
          <div className="career_profile_content">
            <h5 className="industry">Date Of Birth</h5>
            <p className="it_employees">
              12/06/1995
             
            </p>
          </div>
          <div className="career_profile_content">
            <h5 className="industry">Gender</h5>
            <p className="it_employees">
              {/* {profile.personaldetails.gender} */}
            </p>
          </div>
          <div className="career_profile_content">
            <h5 className="industry">Marital Status</h5>
            <p className="it_employees">
              {/* {user.maritalStatus}{" "} */}
             
            </p>
          </div>
          <div className="career_profile_content">
            <h5 className="industry">Passport Number </h5>
            <p className="it_employees">
              + 123 456 7890{" "}
             
            </p>
          </div>
          <div className="career_profile_content">
            <h5 className="industry">Differently Abled</h5>
            <p className="it_employees">
              None{" "}
             
            </p>
          </div>
          <div className="career_profile_content">
            <h5 className="industry">Languages</h5>
            <p className="it_employees">
              English{" "}
             
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 career_profile_column">
          <div className="career_profile_content">
            <h5 className="industry">Permanent Address</h5>
            <p className="it_employees">
              {/* {user.address}{" "} */}
             
            </p>
          </div>
          <div className="career_profile_content">
            <h5 className="industry">Area Pin Code</h5>
            <p className="it_employees">
              {/* {user.pincode}{" "} */}
             
            </p>
          </div>
          <div className="career_profile_content">
            <h5 className="industry">Home Town</h5>
            <p className="it_employees">
              {/* {user.hometown}{" "} */}
             
            </p>
          </div>
          <div className="career_profile_content" id="AttachResume">
            <h5 className="industry">
              Work permit of other country
            </h5>
            <p className="it_employees">
              USA{" "}
             
            </p>
          </div>
        </div>
        </div>
      </div>
  

    <div
      className="modal fade"
      id="personalDetails"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Personal Details
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form action="#">
            <div className="row my-3">

                     <div className=" col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Date Of birth</label>
                    <input className="form_control" type="date" name="dateofbirth" onChange={(e)=>onchangeHandling(e)}/>
                  </div>
                </div>

                <div className=" col-lg-12 col-md-12">
                  <label className="my-2">Gender</label>
                  <div className="form-group">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={(e)=>onchangeHandling(e)}
                        // checked={user.gender==="Male"}
                        id="inlineRadio1"
                      />
                      <label
                        className="form-check-label"
                        for="inlineRadio1"
                      >
                       Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={(e)=>onchangeHandling(e)}
                        // checked={user.gender==="Female"}
                        id="inlineRadio2"
                        
                      />
                      <label
                        className="form-check-label"
                        for="inlineRadio2"
                      >
                       Female
                      </label>
                    </div>
                  </div>
                </div>

                <div className=" col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Permanent Address</label>
                    <input
                      name="address"
                      onChange={(e)=>onchangeHandling(e)}
                      type="text"
                      className="form_control"
                      placeholder="Please Enter Your Permanent Address"
                    //   value={personaldetails.address}
                    />
                  </div>
                </div>

                <div className=" col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Hometown</label>
                    <input
                    name="hometown"
                        onChange={(e)=>onchangeHandling(e)}
                      type="text"
                      className="form_control"
                      placeholder="Enter Hometown"
                    //   value={user.hometown}
                    />
                  </div>
                </div>

                <div className=" col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>PIN-Code</label>
                    <input
                    name="pincode"
                        onChange={(e)=>onchangeHandling(e)}
                      type="text"
                      className="form_control"
                      placeholder="Enter PIN-Code"
                      value={profile.personaldetails.pincode}
                    />
                  </div>
                </div>

                <div className=" col-lg-12 col-md-12">
                  <label className="my-2">Marital Status</label>
                  <div className="form-group">
                    <div className="form-group">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="maritalStatus"
                          onChange={(e)=>onchangeHandling(e)}
                          id="inlineRadio1"
                          value="Married"
                        //   checked={user.maritalStatus==="Married"}

                        />
                        <label
                          className="form-check-label"
                          for="inlineRadio1"
                        >
                          Married
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="maritalStatus"
                          onChange={(e)=>onchangeHandling(e)}
                          id="inlineRadio2"
                          value="UnMarried"
                        //   checked={user.maritalStatus==="UnMarried"}
                        />
                        <label
                          className="form-check-label"
                          for="inlineRadio2"
                        >
                          Unmarried
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                        name="maritalStatus"
                          onChange={(e)=>onchangeHandling(e)}
                          className="form-check-input"
                          type="radio"
                          id="inlineRadio2"
                          value="Others"
                        //   checked={user.maritalStatus==="Others"}
                        />
                        <label
                          className="form-check-label"
                          for="inlineRadio2"
                        >
                          Others
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" col-lg-12 col-md-12">
                  <div className="form-group">
                    <label>Passport Number</label>
                    <input
                        name="Passport_Number"
                        onChange={(e)=>formHandling(e)}
                      type="text"
                      className="form_control"
                      placeholder="Enter Passport Number"
                    />
                  </div>
                </div>

                <div className=" col-lg-12 col-md-12">
                  <div className="form-group">
                    <label className="my-2">
                      Work Parmit To Other Countries
                    </label>
                    <input
                    name="Work_Parmit_To_Other_Countries"
                    onChange={(e)=>formHandling(e)}
                      type="text"
                      className="form_control"
                      placeholder="Enter Country Name"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="update" onClick={(e)=>handlePersonal(e)}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>)
}
export default PersonalDetails;