import ProductoTable from "../features/cabins/ProductoTable";
import AddProducto from "../features/cabins/AddProducto";
import ProductoTableOperations from "../features/cabins/ProductoTableOperations";

import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Productos() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Agrega productos</Heading>
        <ProductoTableOperations />
      </Row>
      
      <Row>
        <ProductoTable />
        <AddProducto />
      </Row>
    </>
  );
}

export default Productos;
