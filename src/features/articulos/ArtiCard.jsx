import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Modal from "../../ui/Modal";
import { HiBookmark } from "react-icons/hi2";

import { NavLink } from "react-router-dom";

import { HiChatBubbleLeftRight } from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
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
const Card = styled.div`
  width: 270px;
  height: 100%;
  border: 0px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 1);
  overflow: hidden;
  margin-left: 35px;
  margin-top: 30px;
  background: rgba(127, 127, 127, 0.1);
`;

// Define a styled component for the image
const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  overflow: hidden;
  transition: scale 400ms;
  &:hover {
    scale: 140%;
  }
`;

// Define a styled component for the card content
const Content = styled.div`
  padding: 15px;
`;

// Define a styled component for the card title
const Title = styled.h3`
  margin: 0;
  margin-bottom: 5px;

  font-size: 21px;
  color: var(--color-grey-600);
  font-family: "Sono";
  text-align: center;
  border-bottom: 1px solid rgba(192, 192, 192, 0.1);
  text-transform: uppercase;
`;

// Define a styled component for the card description
const Descripcion = styled.p`
  margin: 10px 0;
  font-size: 16px;
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-grey-700);
  &::first-letter {
    text-transform: uppercase;
  }
`;

const Precio = styled.div`
  font-family: "Sono";
  font-weight: 800;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
  margin-left: -1px;
  padding: 8px;
  display: inline-block;
  border-radius: 10px;
  background-color: #64c49f;
`;

function ArtiCard({ producto }) {
  const {
    //lo que se muestra
    id: productoId,
    name,
    precio,
    cantidad,
    descripcion,
    image,
    nombre,
  } = producto;

  return (
    <Card>
      <Content>
        <div style={{ overflow: "hidden" }}>
          <Image src={image} />
        </div>
        <Title>{name}</Title>
        <div>
          Vendedor:{" "}
          <span style={{ color: "#008080", textTransform: "uppercase" }}>
            {nombre}{" "}
          </span>
        </div>
        <Descripcion>{descripcion}</Descripcion>
        <Precio>{formatCurrency(precio)}</Precio>
        <div style={{ color: "#37979b" }}>Numero de artículos: {cantidad} </div>

        {/* los tres puntitos=modal */}
        <Modal>
          <NavList>
            <StyledNavLink to="/Messages">
              <HiChatBubbleLeftRight />
            </StyledNavLink>{" "}
            <StyledNavLink to="/Guardar">
              <HiBookmark />
            </StyledNavLink>
          </NavList>
        </Modal>
      </Content>
    </Card>
  );
}

export default ArtiCard;
