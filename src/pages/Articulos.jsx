import ProductoTableOperations from "../features/cabins/ProductoTableOperations";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import { useProductos } from "../features/cabins/useProducto";
import Row from "../ui/Row";
import Empty from "../ui/Empty";

import ArticuloTable from "../features/articulos/ArticuloTable";
function Articulos() {
  const { isLoading, productos } = useProductos();
  if (isLoading) return <Spinner />;
  if (!productos.length) return <Empty resourceName="productos" />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Articulos Disponibles</Heading>
        <ProductoTableOperations />
      </Row>
      <ArticuloTable />
    </>
  );
}

export default Articulos;
