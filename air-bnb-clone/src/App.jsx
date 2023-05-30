import { CardList } from './components/AppStyles';
import Card from './components/Card';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import cardData from './data/Data';

const App = () => {
  const cardElements = cardData.map((card) => {
    return <Card key={card.id} card={card} />;
  });
  return (
    <>
      <Navbar />
      <HeroSection />
      <CardList>{cardElements}</CardList>
    </>
  );
};

export default App;
