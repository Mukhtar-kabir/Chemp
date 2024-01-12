import "../Process/Process.scss";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ElectricCarOutlinedIcon from "@mui/icons-material/ElectricCarOutlined";

const Process = () => {
  return (
    <div className="process">
      <h4>How it works</h4>
      <h2>Chemp Following 3 Working Steps</h2>
      <div className="process-container">
        <div className="steps">
          <LocationOnOutlinedIcon className="icon" />
          <h3>Choose a location</h3>
          <p>See 3 popular hotels at a heavily discounted price</p>
        </div>

        <div className="steps">
          <ArchiveOutlinedIcon className="icon active" />
          <h3>Pick-up date</h3>
          <p>Click choose and we`ll pick one of the hotels</p>
        </div>

        <div className="steps">
          <ElectricCarOutlinedIcon className="icon" />
          <h3>Book your Car</h3>
          <p>See which hotel right after you book</p>
        </div>
      </div>
    </div>
  );
};

export default Process;
