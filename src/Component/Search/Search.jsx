import "../Search/Search.scss";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Search = () => {
  return (
    <div className="search">
      <div className="search-container">
        <div className="icon">
          <LocationOnOutlinedIcon className="iconn" />
          <span>Choose a location</span>
          <KeyboardArrowDownOutlinedIcon className="iconn" />
        </div>

        <div className="icon">
          <LocationOnOutlinedIcon className="iconn" />
          <span>Pick-up date</span>
          <KeyboardArrowDownOutlinedIcon className="iconn" />
        </div>

        <div className="icon">
          <LocationOnOutlinedIcon className="iconn" />
          <span>Return date</span>
          <KeyboardArrowDownOutlinedIcon className="iconn" />
        </div>

        <div className="icon">
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
