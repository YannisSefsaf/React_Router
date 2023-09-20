import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { capitalize } from "../../lib/utils";

export type VanProps = {
  id?: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  type: string;
};

const VanPage = ({ imageUrl, type, name, price, description }: VanProps) => {
  return (
    <>
      <div className="van__container">
        <div className="back">
          <img src="/arrow.png" alt="" className="arrow" />
          <Link to="/vans" className="link__underline">
            Back to all vans
          </Link>
        </div>
        <img src={imageUrl} alt="" className="van__image" />
        <div className={`tag ${type}`}>{capitalize(type)}</div>
        <div className="van__title">{name}</div>
        <div className="van__price">
          <span className="price">${price}</span>
          <span>/day</span>
        </div>
        <div className="van__description">{description}</div>
        <button className="rent__button">Rent this van</button>
      </div>
    </>
  );
};

const Van = () => {
  const params = useParams();
  const [van, setVan] = useState<VanProps | null>(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  if (van) {
    return <VanPage {...van} />;
  } else {
    return <h2 className="loading">Loading...</h2>;
  }
};

export default Van;
