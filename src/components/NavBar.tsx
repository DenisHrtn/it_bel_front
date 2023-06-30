import { NavLink } from "react-router-dom";

export const NavBar = () => {
  let links = [['Главная', '/news'], ['Авторы', '/authors'], ['О нас', '/about'],]
  return (
    <nav>
      { links.map((link, index) => (
        <NavLink key={ index } className="navlink" to={ link[1] }>
          { link[0] }
        </NavLink>
      )) }
    </nav>
  );
};
