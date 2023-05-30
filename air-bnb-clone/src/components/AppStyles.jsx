import styled from 'styled-components';
//Styling for our Cards
export const CardStyles = styled.div`
  width: 175px;
  font-size: 12px;
  flex: 0 0 auto; /* ADD */
  display: flex; /* ADD */
  flex-direction: column; /* ADD */
  .card-image {
    width: 100%;
    border-radius: 9px;
  }
  .card-stats {
    display: flex;
    align-items: center;
  }
  .star {
    height: 14px;
    width: auto;
  }
  .gray {
    color: #918e9b;
  }
  .info {
    line-height: 12px;
  }
`;
//Styling for our Cardlist rendered on the App
export const CardList = styled.section`
  display: flex;
  flex-wrap: nowrap;
  gap: 25px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 20px;
`;
//This applies to our main landing page
export const HeroStyle = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  .hero-image {
    max-width: 600px;
    align-self: center;
  }
  .hero-header {
    margin-bottom: 16px;
  }
  .hero-text {
    margin-top: 0;
  }
`;
//This styling applies to our Navbar
export const NavbarStyle = styled.div`
  nav {
    height: 70px;
    display: flex;
    background-color: #ffffff;
    padding: 20px 36px;
    box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
  }
  .nav-logo {
    max-width: 100px;
  }
`;
