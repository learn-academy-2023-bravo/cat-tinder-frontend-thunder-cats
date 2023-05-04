import { NavLink } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"
import catLogo from '../assets/felinefinder.png'


  const Header = () => {
    
    return (
      <Nav className="header" pills >
        <NavItem>
          <NavLink className={cat-logo} to="/">
            <img
              src={catLogo}
              alt="Cat outline"
              className="cat-logo"
              />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catIndex">Meow Now!</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catnew">
            Add a Cat!
          </NavLink>
        </NavItem>
      </Nav>
    )
  }


export default Header
