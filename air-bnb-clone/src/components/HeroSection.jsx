import { HeroStyle } from './AppStyles';

//
const HeroSection = () => {
  return (
    <HeroStyle>
      <img
        src="../../public/images/grid.png"
        alt="hero-image"
        className="hero-image"
      />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </HeroStyle>
  );
};

export default HeroSection;
