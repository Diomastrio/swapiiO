import ProductoTableOperations from "../features/cabins/ProductoTableOperations";
import { useProductos } from "../features/cabins/useProducto";
import ArticuloTable from "../features/articulos/ArticuloTable";


import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Row from "../ui/Row";
import Empty from "../ui/Empty";

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
