import "../Cars/Cars.scss";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BlurCircularOutlinedIcon from "@mui/icons-material/BlurCircularOutlined";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";

const Cars = () => {
  return (
    <div className="cars">
      <h4>Best Services</h4>
      <h1>Explore our Top Deal from Top-Rated Dealer</h1>
      <div className="items">
        <ul>
          <li className="active">
            <div className="item">
              <img src="/Logos/mercedes.png" alt="" />
              <span>Mercedes</span>
            </div>
          </li>
          <li>
            <div className="item">
              <img src="/Logos/audi.png" alt="" />
              <span>Audi</span>
            </div>
          </li>
          <li>
            <div className="item">
              <img src="/Logos/nissan.png" alt="" />
              <span>Nissan</span>
            </div>
          </li>
          <li>
            <div className="item">
              <img src="/Logos/toyota.png" alt="" />
              <span>Toyota</span>
            </div>
          </li>
          <li>
            <div className="item">
              <img src="/Logos/honda.png" alt="" />
              <span>Honda</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="car-item">
        <div className="car">
          <img src="/Mercedes/1.png" alt="" />
          <p className="model">2023</p>
          <h3>2023 Mercedes-AMG GLS 63 </h3>
          <div className="price">
            <h3>$38500</h3>
            <h5>$10000 month</h5>
          </div>

          <div className="capacity">
            <div className="item">
              <AccessTimeOutlinedIcon />
              <span>30k</span>
            </div>

            <div className="item">
              <BlurCircularOutlinedIcon />
              <span>Auto</span>
            </div>

            <div className="item">
              <EvStationOutlinedIcon />
              <span>Diseel</span>
            </div>
            <button>Rent Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
