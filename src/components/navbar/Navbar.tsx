import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const handleLogout = () => {
    console.log('Logout, bye');
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Associations
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? 'active' : ''}`
              }
              to="/marvel">
              Marvel
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-item nav-link ${isActive ? 'active' : ''}`
              }
              to="/dc">
              DC
            </NavLink>
          </div>
        </div>

        {/* eslint-disable-next-line max-len */}
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <li>
              <span className="nav-item nav-link text-info">Daniel</span>
            </li>
            <li>
              <button
                type="button"
                className="nav-item nav-link btn"
                onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
