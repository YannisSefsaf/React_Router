import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const VanCard = ({ name, price, imageUrl, type, id }: Van) => {
  return (
    <>
      <div className="vans__card">
        <Link to={`/vans/${id}`}>
          <img src={imageUrl} className="card__img" />
          <div className="card__info">
            <div className="left">
              <div className="card__title">{name}</div>
              <div className={`tag ${type}`}>{type.charAt(0).toLocaleUpperCase() + type.slice(1)}</div>
            </div>
            <div className="right">
              <span className="card__price">${price}</span>
              <span className="per__day">/day</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

type Van = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
};

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <>
      <div className="vans__container">
        <h2 className="vans__title">Explore our vans options</h2>
        <div className="filter__container">
          <div className="group-one">
            <button className="filter">Simple</button>
            <button className="filter">Luxury</button>
            <button className="filter">Rugged</button>
          </div>
          <button className="link__underline">Clear filters</button>
        </div>
        <div className="vans__grid">{vans && vans.map((van: Van) => <VanCard key={van.id} {...van} />)}</div>
      </div>
    </>
  );
};

export default Vans;
