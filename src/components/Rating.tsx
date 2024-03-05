import { HStack } from "@chakra-ui/layout";
import star2 from "../img/star2.png";
import Styles from "./Rating.module.css";

interface RatingProps {
  value: number;
}

const Rating = ({ value }: RatingProps) => {
  const stars = [];
  for (let i = 0; i < value; i++) {
    stars.push(<img key={i} src={star2} alt="star" className={Styles.star} />);
  }
  return <HStack>{stars}</HStack>;
};

export default Rating;
