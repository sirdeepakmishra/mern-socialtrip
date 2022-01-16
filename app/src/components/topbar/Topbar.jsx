import "./topbar.css";
import {
  Search,
  Person,
  Chat,
  Notifications,
  Logout,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { logoutCall } from "../../apiCalls";

export default function Topbar() {
  const { user, dispatch } = useContext(AuthContext);
  //console.log("user--->" + user.username);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const clickHandler = async (e) => {
    logoutCall(dispatch);
    //window.location.reload();
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">SocialTrip</span>
        </Link>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for trips, friends, places, videos and many more ..."
            className="searchInput"
          />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">TimeLine</span>
        </div>

        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>

        <Link to={`/profile/${user.username}`}>
          <img
            src={PF + (user.profilePicture || "noImage/noAvatar.png")}
            alt=""
            className="topbarImg"
          />
        </Link>

        <div className=" tooltip topbarIconItem">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Logout onClick={clickHandler} />
            <span className="tooltiptext">Log Out</span>
          </Link>
        </div>
        
      </div>
    </div>
  );
}
