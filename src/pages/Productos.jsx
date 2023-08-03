import ProductoTable from "../features/cabins/ProductoTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddProducto from "../features/cabins/AddProducto";
import ProductoTableOperations from "../features/cabins/ProductoTableOperations";

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
