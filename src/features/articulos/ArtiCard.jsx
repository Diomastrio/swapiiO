import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import { HiBookmark } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io";
// import { getWhatsAppLink } from "../authentication/SignupForm";
// import Button from "../../ui/Button";

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
  color: var(--color-green-700);
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
  background-color: #cc0c39;
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
        <div style={{ color: "#77C66E" }}>Numero de artículos: {cantidad} </div>

        {/* los tres puntitos=modal */}
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={productoId} />

            <Menus.List id={productoId}>
              <Menus.Button icon={<IoLogoWhatsapp />}>Mensaje </Menus.Button>{" "}
              <Menus.Button icon={<HiBookmark />}>Guardar</Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </Modal>
        {/* <Button>WhatsApp</Button> */}
      </Content>
    </Card>
  );
}

export default ArtiCard;
