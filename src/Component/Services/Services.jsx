import "../Services/Services.scss";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";

const Services = () => {
  return (
    <div className="services">
      <div className="services-container">
        <div className="image">
          <img src="/Images/service.png" width="700px" alt="" />
        </div>

        <div className="desc">
          <h4>Best Services</h4>
          <h2>Feel the best experince with our rental deals</h2>

          <div className="item">
            <div>
              <LocalOfferOutlinedIcon className="icon" />
            </div>
            <div className="text">
              <h3>Deals for every budget</h3>
              <p>
                Incredible price in hotels, flight, cars, and packages worldwide
              </p>
            </div>
          </div>

          <div className="item">
            <div>
              <WorkOutlinedIcon className="icon" />
            </div>
            <div>
              <h3>Best price guaranteed</h3>
              <p>Find a lower price? We`ll refund you 100% of the difference</p>
            </div>
          </div>

          <div className="item">
            <div>
              <ContactSupportOutlinedIcon className="icon" />
            </div>
            <div>
              <h3>Support 24/7</h3>
              <p>Find a lower price? We`ll refund you 100% of the difference</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
