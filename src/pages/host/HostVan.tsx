import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { VanProps } from "../Vans/Van";
import { VanProvider } from "./HostVanContext";
import { capitalize } from "../../lib/utils";

function HostVanCard({ imageUrl, name, type, price }: VanProps) {
  return (
    <>
      <div className="host__van-card">
        <div className="top-part">
          <div className="top-part-left">
            <img
              src={imageUrl}
              alt={`Photo of ${name}`}
              style={{ width: "160.15px", height: "157.9px", borderRadius: "5px" }}
            />
          </div>
          <div className="top-part-right">
            <div className={`tag ${type}`}>{capitalize(type)}</div>
            <div className="host-van-title">{name}</div>
            <div className="host-van-price">
              <span className="hostvanprice">${price}</span>
              <span>/day</span>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default function HostVan() {
  const params = useParams();
  const [van, setVan] = useState<VanProps | null>(null);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, [params.id]);

  return (
    <>
      <div className="van__container">
        <div className="back">
          <img src="/arrow.png" alt="" className="arrow" />
          <Link to=".." relative="path" className="link__underline">
            Back to all vans
          </Link>
        </div>
        {van ? (
          <VanProvider value={van}>
            <HostVanCard {...van} />
          </VanProvider>
        ) : (
          <h1 className="loading">Loading...</h1>
        )}
      </div>
    </>
  );
}
