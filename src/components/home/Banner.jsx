import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Banner = () => {
  return (
    <AwesomeSlider>
      <div data-src="https://i.ibb.co.com/twpyQsN7/image2.png" />
      <div data-src="https://i.ibb.co.com/r2TbyFTL/image3.png" />
      <div data-src="https://i.ibb.co.com/yc7jZdhn/image1.png" />
    </AwesomeSlider>
  );
};

export default Banner;
