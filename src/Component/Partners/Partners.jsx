import "../Partners/Partners.scss";

const Partners = () => {
  const images = [
    {
      img: "/partners/1.gif",
      id: 1,
    },
    {
      img: "/partners/2.png",
      id: 2,
    },
    {
      img: "/partners/3.gif",
      id: 13,
    },
    {
      img: "/partners/4.gif",
      id: 4,
    },
    {
      img: "/partners/5.gif",
      id: 5,
    },
    {
      img: "/partners/6.gif",
      id: 6,
    },
  ];

  return (
    <div className="partners">
      <div className="partners-container">
        {images.map((car) => (
          <img src={car.img} alt="" key={car.id} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
