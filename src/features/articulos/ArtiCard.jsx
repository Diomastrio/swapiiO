import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import { HiBookmark } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io";

import { getNumber } from "../../services/apiWhatsApp";

function handleButtonClick() {
  // const id = id; // Replace with the actual ID
  getNumber();
}

const Card = styled.div`
  width: 270px;
  height: 100%;
  border: 0px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
  overflow: hidden;
  margin-left:35px;
  margin-top:30px;
`;

// Define a styled component for the image
const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

// Define a styled component for the card content
const Content = styled.div`
  padding: 15px;
`;

// Define a styled component for the card title
const Title = styled.h3`
  margin: 0;
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
  font-weight: 600;
  margin-bottom:5px;
`;

function ArtiCard({ producto }) {
  const {//lo que se muestra
    id: productoId,
    name,
    precio,
    cantidad, 
    descripcion,
    image,
  } = producto;

  return (
    <Card>
      <Content>
        <Image src={image} />
        <Title>{name}</Title>
        <Descripcion>{descripcion}</Descripcion>
        <Precio>{formatCurrency(precio)}</Precio>
        <div style={{color: '#77C66E' }}>Numero de articulos: {cantidad} </div>

        {/* los tres puntitos=modal */}
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={productoId} />

            <Menus.List id={productoId}>
              <Menus.Button
                onClick={handleButtonClick}
                icon={<IoLogoWhatsapp />}
              >
                Mensaje{" "}
              </Menus.Button>{" "}
              <Menus.Button icon={<HiBookmark />}>Guardar</Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </Modal>
      </Content>
    </Card>
  );
}

export default ArtiCard;
