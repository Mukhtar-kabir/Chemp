import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Component } from "react";
import "../OwlCarousel/OwlCarousel.scss";

class Owldemo1 extends Component {
  render() {
    const options = {
      items: 1,
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
    };

    const carouselItems = [
      {
        title: "Mercedes E-Class",
        text: "Experience luxury with our stylish Mercedes E-Class. The epitome of elegance and comfort.",
        imageUrl: "/Images/hero.jpeg",
      },
      {
        title: "Toyota Prius",
        text: "Go green with the fuel-efficient Toyota Prius. A smart choice for eco-friendly commuting.",
        imageUrl: "/Images/hero1.jpeg",
      },
      {
        title: "Nissan Versa",
        text: "Navigate the city in style with the compact and efficient Nissan Versa.",
        imageUrl: "/Images/hero2.jpeg",
      },
    ];

    return (
      <div className="container">
        <div className="owl-carousel-container">
          <OwlCarousel {...options}>
            {carouselItems.map((item, index) => (
              <div className="item" key={index}>
                <img
                  className="img"
                  src={item.imageUrl}
                  alt={`carousel-img-${index + 1}`}
                />
                <div className="overlay">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Owldemo1;
