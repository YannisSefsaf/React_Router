import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <nav className="navbar">
          <NavLink className="logo" to="/">
            #VANLIFE
          </NavLink>
          <div>
            <NavLink className="link" to="/host">
              Host
            </NavLink>
            <NavLink className="link" to="/about">
              About
            </NavLink>
            <NavLink className="link" to="/vans">
              Vans
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}
