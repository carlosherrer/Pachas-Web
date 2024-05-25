import PropTypes from "prop-types";
import { CiClock2 } from "react-icons/ci";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

const Card = ({ imageSrc, title, time, rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<IoStar key={i} />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<IoStarHalf key={i} />);
      } else {
        stars.push(<IoStarOutline key={i} />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-[#545454] rounded-2xl">
      <img className="rounded-t-2xl" src={imageSrc} alt={title} />
      <div className="px-3 mt-2">
        <p className="text-start text-white font-bold font-sans">{title}</p>
        <div className="flex gap-1.5 mt-2">
          <CiClock2 className="text-white" size={26} />
          <p className="text-white">{time}</p>
        </div>
        <div className="flex text-white mt-2 justify-between">
          <div className="flex mb-4">{renderStars()}</div>
          <div>
            <p className="mt-[-4px] text-[#dfaa5f] underline underline-offset-custom hover:text-white cursor-pointer">
              Ordenar Ahora
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Card;
