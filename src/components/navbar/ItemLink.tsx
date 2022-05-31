import { memo } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  label: string;
}

const ItemLink = ({ to, label }: Props) => (
  <NavLink
    className={({ isActive }) =>
      `nav-item nav-link ${isActive ? 'active' : ''}`
    }
    to={to}>
    {label}
  </NavLink>
);

export default memo(ItemLink);
