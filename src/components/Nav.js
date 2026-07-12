import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
      <nav className="Site-nav">
        <NavLink to="/" end className={({ isActive }) => 'Site-nav-link' + (isActive ? ' active' : '')}>
          Home
        </NavLink>
        <NavLink to="/photos" className={({ isActive }) => 'Site-nav-link' + (isActive ? ' active' : '')}>
          Photos
        </NavLink>
      </nav>
  );
}
