import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext, ContextProps } from '@/auth/authContext';
import { types } from '@/types/actions';
import type { ActionReducer } from '@/types/types';
import ItemLink from './ItemLink';

const links = [
  { to: '/marvel', label: 'Marvel' },
  { to: '/dc', label: 'DC' },
  { to: '/search', label: 'Search' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { authUser, updateAuthUser } = useContext(AuthContext) as ContextProps;

  const handleLogout = () => {
    const action = {
      type: types.logout,
      payload: null,
    };
    updateAuthUser(action as ActionReducer);

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
              <span className="nav-item nav-link text-info">
                {authUser?.name}
              </span>
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
