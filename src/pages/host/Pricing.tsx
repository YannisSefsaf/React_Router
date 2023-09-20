import { useVanContext } from "./HostVanUtils";

export default function Pricing() {
  const van = useVanContext();
  return (
    <>
      {van ? (
        <div className="host-van-price">
          <span className="hostvanprice">${van.price}</span>
          <span>/day</span>
        </div>
      ) : (
        <h1 className="loading" style={{ backgroundColor: "white" }}>
          Loading...
        </h1>
      )}
    </>
  );
}
