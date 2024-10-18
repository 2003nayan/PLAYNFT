import CompanyRow from "../components/CompanyRow";
import HeroElement from "../components/HeroElement";
import PopularThisWeek from "../components/PopularThisWeek";

const HomePage = () => {
  return (
    <div className="bg-gray-800">
      <HeroElement />
      <CompanyRow />
      <PopularThisWeek />
    </div>
  );
};

export default HomePage;
