import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import { useEffect, useState } from "react";
import { useParams} from "react-router";
import axios from "axios";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const usernameParam = useParams().username;
  

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/?username=${usernameParam}`);
      setUser(res.data);
      
    };
    fetchUser();
  }, [usernameParam]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
              
                src={ PF+(user.coverPicture || "noImage/noCover.png")}
                //src={`${PF}/${user.coverPicture}` || PF + "image/noCover.png"}
                alt=""
              />
              <img
                className="profileUserImg"
                //  src={`${PF}/person/7.jpeg`}
                //   src={`${PF}/${user.profilePicture}`}
                src={PF+(user.profilePicture || "noImage/noAvatar.png")}
                //src={`${PF}/${user.profilePicture}` || PF + "image/noAvatar.png"}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
         
            <Feed username={usernameParam} />
           
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
