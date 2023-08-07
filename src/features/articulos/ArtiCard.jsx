import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import { HiChatBubbleLeftRight, HiShoppingBag } from "react-icons/hi2";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;
const Card = styled.div`
  width: 300px;
  height: 400px;
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
const Producto = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

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
        <Producto>{precio}</Producto>
        <div>Numero de articulos: {cantidad} </div>
        <Precio>{formatCurrency(precio)}</Precio>
        <Descripcion>{descripcion}</Descripcion>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={productoId} />

            <Menus.List id={productoId}>
              <Menus.Button icon={<HiChatBubbleLeftRight />}>
                Mensaje
              </Menus.Button>{" "}
              <Menus.Button icon={<HiShoppingBag />}>Editar</Menus.Button>
            </Menus.List>
          </Menus.Menu>
        </Modal>
      </Content>
    </Card>
  );
}

export default ArtiCard;
