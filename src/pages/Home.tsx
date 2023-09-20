import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__title">You got the travel plans, we got the travel vans.</h1>
          <p className="hero__subtitle">
            Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road
            trip.
          </p>
          <Link className="hero__button" to="/vans">
            Find your van
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
