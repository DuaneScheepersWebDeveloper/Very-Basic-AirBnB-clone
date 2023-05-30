import { NavbarStyle } from './AppStyles';
const Navbar = () => {
  return (
    <NavbarStyle>
      <nav>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt="AirBnb logo"
          className="nav-logo"
        />
      </nav>
    </NavbarStyle>
  );
};

export default Navbar;
