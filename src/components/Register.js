import React from "react";
import { Route } from "react-router-dom";
import FacultyStaffRegisterForm from "./registration/FacultyStaffRegisterForm";
import LecturerRegisterForm from "./registration/LecturerRegisterForm";
import RegistrationNavbar from "./registration/RegistrationNavbar";
import RegistrationTabbar from "./registration/RegistrationTabbar";
import StudentRegisterForm from "./registration/StudentRegisterForm";
import LecturerDashboard from "./Lecturer/LecturerDashboard";
const Register = ({ match }) => {
  const helveticaFontStyle = {
    fontFamily: "Helvetica",
  };

  return (
    <div style={helveticaFontStyle}>
      <RegistrationNavbar />
      <div className="container">
        <RegistrationTabbar />
        <div >
          <Route
            path={`${match.path}/lecturer`}
            component={LecturerRegisterForm}
          />

          <Route
            path={`${match.path}/student`}
            component={StudentRegisterForm}
          />
          <Route
            path={`${match.path}/faculty-staff`}
            component={FacultyStaffRegisterForm}
          />

        </div>
      </div>
    </div>
  );
};

export default Register;
