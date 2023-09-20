import { NavLink, Outlet } from "react-router-dom";

export default function HostVanLayout() {
  return (
    <>
      <nav style={{ backgroundColor: "white" }}>
        <NavLink to="." end>
          Details
        </NavLink>
        <NavLink to="pricing">Pricing</NavLink>
        <NavLink to="photos">Photos</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
