import ProductoTable from "../features/productos/ProductoTable";
import AddProducto from "../features/productos/AddProducto";

import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Productos() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Admin Dashboard</Heading>
      </Row>

      <Row>
        <ProductoTable />
        <AddProducto />
      </Row>
    </>
  );
}

export default Productos;
