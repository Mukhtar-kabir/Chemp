import "../Navbar/Navbar.scss";
import { useSelector } from "react-redux";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userInfo = useSelector((state) => state.chemp.userInfo);
  console.log(userInfo);

  const getFirstName = () => {
    if (userInfo && userInfo.name) {
      const fullName = userInfo.name;
      const firstName = fullName.split(" ")[0];
      return firstName;
    }
    return "";
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" className="link">
          <h1>Chemp</h1>
        </Link>
      </div>

      <Link to="/login" className="link">
        <div className="right">
          {userInfo && userInfo.image ? (
            <img src={userInfo.image} alt="user logo" />
          ) : (
            <AccountCircleOutlinedIcon className="icon" />
          )}
          {userInfo && <p>{getFirstName()}</p>}
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
