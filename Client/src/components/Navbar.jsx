import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/App_Context";

const Navbar = () => {
  const {isAuthenticated, setisAuthenticated,logOut} = useContext(AppContext)
   
  return (
    <>
      <div className="nav bg-dark p-2">
        <Link
          to={"/"}
          className="left"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h2>MERN Recipe</h2>
        </Link>
        <div className="right">
          {isAuthenticated && (
            <>
              <Link to={"/add"} className="btn btn-info mx-2">
                Add
              </Link>
              <Link to={"/profile"} className="btn btn-warning mx-2">
                Profile
              </Link>
              <div className="btn btn-danger mx-2" onClick={logOut}>LogOut</div>
            </>
          )}
          {!isAuthenticated && (
            <>
              <Link to={"/login"} className="btn btn-primary mx-2">
                Login
              </Link>
              <Link to={"/register"} className="btn btn-warning mx-2">
                Register
              </Link>
            </>
          )}

          <Link to={"/saved"} className="btn btn-light mx-2">
            Saved
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
