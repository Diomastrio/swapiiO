import ProductoTable from "../features/productos/ProductoTable";
import AddProducto from "../features/productos/AddProducto";

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Sugerencias from "../features/sugerencias/sugerencias";

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
      <Row>
        <Sugerencias />
      </Row>
    </>
  );
}

export default Productos;
