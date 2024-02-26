const Star = ({ fill = "white" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path
      fill={fill}
      d="M528.1 171.5l-146.1-21.3-65.3-132.4c-11.7-23.6-45.6-23.9-57.4 0l-65.3 132.4-146.1 21.3c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7l130.7-68.7 130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6z"
    />
  </svg>
);

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<Star fill="yellow" key={i} />);
    } else {
      stars.push(<Star key={i} />);
    }
  }
  return (
    <div
      style={{
        width: "10rem",
        fontSize: "1.5rem",
        display: "flex",
      }}
    >
      {stars}
    </div>
  );
};

export default StarRating;
