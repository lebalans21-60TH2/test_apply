// eslint-disable-next-line
import React, { useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from "@material-ui/icons/Person";
import { logout } from "../../actions/userAction";
import { ToastContainer, toast } from "react-toastify";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const switcherTab = useRef(null);

  function logoutUser() {
    dispatch(logout());
    toast.success("Logout Successfully");
  }

  const options = [
    {
      icon: (
        <HomeIcon
          style={{
            marginRight: "4px",
          }}
        />
      ),
      name: "Trang chủ",
      link: "/",
    },
    {
      icon: (
        <PersonIcon
          style={{
            marginRight: "4px",
          }}
        />
      ),
      name: "Tôi",
      link: "/me",
    },
  ];

  return (
    <div className="Header">
      <div className="navbar flex pz__10 space__beetween" ref={switcherTab}>
        <div
          className="navigation"
          style={{
            padding: "0px 50px",
            margin: "20px",
          }}
        ></div>

        <div className="rightOption flex align__items__center ">
          {user ? (
            <>
              <p style={{ marginRight: "4vh", fontWeight: "550" }}>
                Hello, {user.name}
              </p>

              <button className="button-30" onClick={logoutUser}>
                {" "}
                <ExitToAppIcon
                  style={{
                    marginRight: "4px",
                  }}
                />
                Đăng xuất
              </button>
            </>
          ) : (
            <div className="user__account flex pointer">
              <Link to="/login">
                <button className="button-30">Đăng nhập</button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Header;
