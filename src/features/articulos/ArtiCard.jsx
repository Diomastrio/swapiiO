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
  width: 300px;
  height: 470px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

// Define a styled component for the image
const Image = styled.img`
  width: 100%;
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
  font-size: 20px;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

// Define a styled component for the card description
const Descripcion = styled.p`
  margin: 10px 0;
  font-size: 16px;
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
// const Producto = styled.div`
//   font-size: 1.6rem;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   font-family: "Sono";
// `;

const Precio = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

function ArtiCard({ producto }) {
  const {
    id: productoId,
    name,
    precio, //name
    cantidad, // maxCapacity
    descripcion, //regularPrice
    // discount,
    image,
    // description,
  } = producto;

  return (
    <Card>
      <Content>
        <Image src={image} />
        <Title>{name}</Title>
        <Descripcion>{descripcion}</Descripcion>
        <Precio>{formatCurrency(precio)}</Precio>
        <div>Numero de articulos: {cantidad} </div>
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
