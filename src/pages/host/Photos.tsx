import { useVanContext } from "./HostVanUtils";

export default function Pricing() {
  const van = useVanContext();

  return (
    <>
      {van ? (
        <img src={van.imageUrl} style={{ width: "150px", height: "150px", borderRadius: "5px" }} />
      ) : (
        <h1 className="loading" style={{ backgroundColor: "white" }}>
          Loading...
        </h1>
      )}
    </>
  );
}
