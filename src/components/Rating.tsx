import star2 from "../img/star2.png";
import Styles from "./Rating.module.css";

interface RatingProps {
  value: number | string;
}

const Rating = ({ value }: RatingProps) => {
  const stars = [];
  const numStars = typeof value === "number" ? value : parseInt(value);
  for (let i = 0; i < numStars; i++) {
    stars.push(<img key={i} src={star2} alt="star" className={Styles.star} />);
  }
  return <div>{stars}</div>;
};

export default Rating;
