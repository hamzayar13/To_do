import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
              <li className="nav-item active">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/add"
                  className={({ isActive }) =>
                    ` nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Add
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </>
  );
};

export default NavBar;
