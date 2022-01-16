import "./leftbar.css";
import {
  RssFeed,
  Chat,
  PlayCircle,
  PeopleAltRounded,
  BookmarkRounded,
  HelpOutlineRounded,
  Work,
  Event,
  School,
} from "@mui/icons-material";

import CloseFriend from "../closeFriend/CloseFriend";
import {Users} from "../../dummuData"

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeed className="leftbarIcon" />
            <span className="leftbarListItemText">RssFeed</span>
          </li>
          <li className="leftbarListItem">
            <Chat className="leftbarIcon" />
            <span className="leftbarListItemText">Chat</span>
          </li>

          <li className="leftbarListItem">
            <PlayCircle className="leftbarIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <PeopleAltRounded className="leftbarIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>

          <li className="leftbarListItem">
            <BookmarkRounded className="leftbarIcon" />
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutlineRounded className="leftbarIcon" />
            <span className="leftbarListItemText">Questions</span>
          </li>
          <li className="leftbarListItem">
            <Work className="leftbarIcon" />
            <span className="leftbarListItemText">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <Event className="leftbarIcon" />
            <span className="leftbarListItemText">Events</span>
          </li>
          <li className="leftbarListItem">
            <School className="leftbarIcon" />
            <span className="leftbarListItemText">Cources</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More...</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          {Users.map(u=>(
             <CloseFriend key={u.id} user ={u}/>
          ))}
         
        </ul>
      </div>
    </div>
  );
}
