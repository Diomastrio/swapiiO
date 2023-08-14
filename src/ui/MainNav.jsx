import { NavLink } from "react-router-dom";
import supabase from "../services/supabase";
import styled from "styled-components";

import {
  HiCurrencyDollar,
  HiShoppingCart,
  HiOutlineQueueList,
  HiBookmark,
} from "react-icons/hi2";

import { MdAdminPanelSettings } from "react-icons/md";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

async function getUserRol() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user.user_metadata.rol;
}
const userRol = await getUserRol();

let heading;
if (userRol === "admin") {
  heading = (
    <li>
      <StyledNavLink to="/Admin">
        <MdAdminPanelSettings />
        <span>Admin</span>
      </StyledNavLink>
    </li>
  );
}

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/Articulos">
            <HiShoppingCart />
            <span>Articulos</span>
          </StyledNavLink>
        </li>
        {/* <li>
          <StyledNavLink to="/Mensajes">
            <HiChatBubbleLeftRight />
            <span>Mensajes</span>
          </StyledNavLink>
        </li> */}
        <li>
          <StyledNavLink to="/Productos">
            <HiOutlineQueueList />
            <span>Agregar Articulos</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Subscripción">
            <HiCurrencyDollar />
            <span>Subscripción</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Guardado">
            <HiBookmark />
            <span>Guardado</span>
          </StyledNavLink>
        </li>
        <>{heading}</>
      </NavList>
    </nav>
  );
}

export default MainNav;
