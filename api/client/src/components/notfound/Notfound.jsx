import "./notfound.css";
import { Link } from "react-router-dom";

export default function Notfound() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="notFoundContainer">
      404 not found
      <img className="notFoundImg" src={PF + "image/noCover.png"} alt="" />
      <Link to="/">Log In</Link>
    </div>
  );
}
