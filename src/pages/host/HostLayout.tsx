import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav>
        <NavLink to="." end>
          Dashboard
        </NavLink>
        <NavLink to="income">Income</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <NavLink to="vans">Vans</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
