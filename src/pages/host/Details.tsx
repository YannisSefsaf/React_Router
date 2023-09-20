import { capitalize } from "../../lib/utils";
import { useVanContext } from "./HostVanUtils";

export default function Details() {
  const van = useVanContext();

  return (
    <>
      {van ? (
        <div className="flex-container">
          <div className="name">
            <strong style={{ fontWeight: "600" }}>Name: </strong>
            {van?.name}
          </div>
          <div className="category">
            <strong style={{ fontWeight: "600" }}>Category: </strong>
            {van?.type ? capitalize(van?.type) : ""}
          </div>
          <div className="description">
            <strong style={{ fontWeight: "600" }}>Description: </strong>
            {van?.description}
          </div>
          <div className="Visibility">
            <strong style={{ fontWeight: "600" }}>Visibility: </strong> Public
          </div>
        </div>
      ) : (
        <h1 className="loading" style={{ backgroundColor: "white" }}>
          Loading...
        </h1>
      )}
    </>
  );
}
