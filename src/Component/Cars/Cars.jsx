import "../Cars/Cars.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BlurCircularOutlinedIcon from "@mui/icons-material/BlurCircularOutlined";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";

// const options = {
//   loop: true,
//   nav: false,
//   dots: false,
//   autoplay: true,
//   responsive: {
//     576: {
//       items: 2
//     },
//     768: {
//       items: 3
//     },
//     992: {
//       items: 4
//     }
//   }
// };


const Cars = () => {
  const carouselItems = [
    {
      title: "Mercedes E-Class",
      price: '38500',
      imageUrl: "/Mercedes/1.png",
      parag: '2023',
      rent: "10000"
    },
    {
      title: "Mercedes E-Class",
      price: '20500',
      imageUrl: "/Mercedes/2.png",
      parag: '2022',
      rent: "12000"
    },
    {
      title: "Mercedes E-Class",
      price: '40500',
      imageUrl: "/Mercedes/3.png",
      parag: '2023',
      rent: "15000"
    },
    {
      title: "Mercedes E-Class",
      price: '38500',
      imageUrl: "/Mercedes/4.png",
      parag: '2021',
      rent: "10000"
    },
    {
      title: "Mercedes E-Class",
      price: '38500',
      imageUrl: "/Mercedes/5.png",
      parag: '2021',
      rent: "10000"
    },
  ];

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
              <img src="/Logos/toyota.png" alt="" />
              <span>Toyota</span>
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
              <img src="/Logos/honda.png" alt="" />
              <span>Honda</span>
            </div>
          </li>
          <li>
            <div className="item">
              <img src="/Logos/audi.png" alt="" />
              <span>Audi</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="carsComp">
        <OwlCarousel items={4}
          loop={true}
          autoplay={true}
          nav={false}
          dots={false}
          responsive={{
            0: {
              items: 1
            },
            576: {
              items: 2
            },
            768: {
              items: 3
            },
            992: {
              items: 3
            }
          }}>
          {carouselItems.map((item, index) => (
            <div className="car-item" key={index}>
              <div className="car"> 
                <img src={item.imageUrl} alt="" />
                <p className="model">{item.parag}</p>
                <h3>{item.title}</h3>
                <div className="price">
                  <h3>${item.price}</h3>
                  <h5>${item.rent}</h5>
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
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Cars;