import { React } from "react";
import "./Home.css";
import Header from "./Header";
import MetaData from "../../more/Metadata";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <MetaData title="Chào mừng" />
      <Header />
      {user ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">Welcome </p>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p style={{ marginTop: "4vh" }}>Let hover me!!!</p>
              </div>
              <div className="flip-card-back">
                <p className="title">Have a nice day </p>
                <p>Leave Me</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">You are not logged in </p>
                <p>Please click the button on the top right corner</p>
               <p>to <b>log in</b></p> 
              </div>
              <div className="flip-card-back">
                <p className="title">let log in, bruh </p>
                <p>Leave Me</p>
              </div>
            </div>
          </div>
        </div>
      )}

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
    </>
  );
};

export default Home;
