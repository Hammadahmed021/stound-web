import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useLayoutEffect , useState } from "react";
import { logout , auth } from "../Components/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

import Modal from "react-modal";

import { Footer } from "../Containers";
import profileImg from "../Assets/Images/profile-img.png";
import logo from "../Assets/Images/logoBlue.png";
import userImg from "../Assets/Images/user.png";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 500,
    height: 250,
    boxShadow: "0px 0px 50px #00000033",
    outline: "none",
    border: "none",
    borderRadius: 20,
  },
};

export default function Profile() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenDelete, setModalOpenDelete] = useState(false);
  const [userData, setUserData] = useState(null);
  const [user ] = useAuthState(auth);
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;


  const deleteAccount = async (e) => {
    try {
      const response = await axios.delete(`https://virtualrealitycreators.com/stound/api/auth/delete-user/${userData.uid}`);
      console.log(response)
      if(response.status == 200){
        setModalOpenDelete(false)
        logout();
        setTimeout(() => {
          navigate('/login')
        }, 1000); 
      }else{
        alert(response.data.message);
      }
    } catch (error) {
      alert(error)
    } 
  }


  const LogOutMain = (e) => {
    e.preventDefault();
    logout();
    setModalOpen(false)   
    setModalOpenDelete(false)   
    setTimeout(() => {
      navigate('/login')
    }, 1000); 
  };

  const getData = async () => {
    let userlocal = await JSON.parse(localStorage.getItem("user"));
    if(userlocal == undefined || userlocal == null ){
      return false
    }else{
      setUserData(userlocal)
      return true;
    }
  }

  useEffect( () => {
    getData().then(response => {
      console.log(response)
      if(response == false){
          navigate('/login')      
      }

    })
     
  }, [])


  return (
    <>
      <section className="LoginSection ProfileSection">
        <div className="mycontainer">
          <div className=" col-left">
            <Link to="/">
              <img src={logo} className="img-fluid logoImg" />
            </Link>

            <div className="login-form-wrap">
              <div className="loginHeading">
                <h2 className="globalHeading">My Profile</h2>
              </div>
              <div className="profileCard">
                <div className="leftCol">
                  <img src={userImg} className="img-fluid" />
                  <span className="userName">
                     <h4>{userData?.name }</h4> 
                    <p className="userEmail">{userData?.email}</p>
                  </span>
                </div>
                <div className="rightCol">
                  <span className="userEdit">
                    <span class="material-symbols-outlined">edit</span>
                    <p className="mb-0">Edit</p>
                  </span>
                </div>
              </div>
              <div className="PersonalInfo">
                <h4>Personal Information</h4>
                <div className="innerWrap">
                  <div className="leftcol">
                    <span className="infoLabel">
                      <h4>Full Name</h4>
                      <p className="userLabel">{userData?.name}</p>
                    </span>
                    <span className="infoLabel">
                      <h4>email Address</h4>
                      <p className="userLabel">{userData?.email}</p>
                    </span>
                  </div>
                  <div className="rightcol">
                    <span className="infoLabel">
                      <h4>Coins</h4>
                      <p className="userLabel">{userData?.coins}</p>
                    </span>

                    <span className="infoLabel">
                      <h4>Phone</h4>
                      <p className="userLabel">{userData?.number}</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="miscWrap">
                <span className="logout">
                  <span class="material-symbols-outlined">logout</span>
                  <p onClick={setModalOpen}>log Out</p>
                </span>
                <span className="deactivate">
                  <span class="material-symbols-outlined">person_remove</span>
                  <p onClick={setModalOpenDelete}>Delete Account</p>
                </span>
              </div>
              <div className="Modal">
                <Modal
                  isOpen={modalOpenDelete}
                  onRequestClose={() => setModalOpenDelete(false)}
                  style={customStyles}
                >
                  <div className="modalDiv">
                    <h2>Delete Account</h2>
                    <p>Are you sure, you want to delete your account ?</p>
                    <div className="d-flex align-items-center justify-content-around">
                      <button
                        className="cancel"
                        onClick={() => setModalOpenDelete(false)}
                      >
                        Cancel
                      </button>
                      <button className="logoutBtn" onClick={deleteAccount}>
                        Delete
                      </button>
                    </div>
                  </div>
                </Modal>
              </div>
              
              <div className="Modal">
                <Modal
                  isOpen={modalOpen}
                  onRequestClose={() => setModalOpen(false)}
                  style={customStyles}
                >
                  <div className="modalDiv">
                    <h2>Log Out</h2>
                    <p>Are you sure, you want to log out ?</p>
                    <div className="d-flex align-items-center justify-content-around">
                      <button
                        className="cancel"
                        onClick={() => setModalOpen(false)}
                      >
                        Cancel
                      </button>
                      <button className="logoutBtn" onClick={LogOutMain}>
                        Log Out
                      </button>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
          <div className=" col-right">
            <img src={profileImg} className="img-fluid loginImg" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
