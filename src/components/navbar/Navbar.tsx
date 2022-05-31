import { Link, useNavigate } from 'react-router-dom';
import ItemLink from './ItemLink';

const links = [
  { to: '/marvel', label: 'Marvel' },
  { to: '/dc', label: 'DC' },
  { to: '/search', label: 'Search' },
];

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login', { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Associations
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            {links.map((link) => (
              <ItemLink key={link.to} {...link} />
            ))}
          </div>
        </div>

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
