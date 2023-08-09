import Spinner from "../../ui/Spinner";
import ProductoRow from "./ProductoRow";
import { useProductosTable } from "./useProductoTable";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function ProductoTable() {
  const { isLoading, productos } = useProductosTable();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!productos.length) return <Empty resourceName="productos" />;

  // 1) FILTER
  const filterValue = searchParams.get("precio") || "all";

  let filteredProductos;
  if (filterValue === "all") filteredProductos = productos;
  if (filterValue === "no-discount")
    filteredProductos = productos.filter((producto) => producto.precio === 0);
  if (filterValue === "with-discount")
    filteredProductos = productos.filter((producto) => producto.precio > 0);

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedProductos = filteredProductos.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.7fr 1.2fr 0fr 2fr 1fr 1fr 0.5fr">
        <Table.Header>
          <div>Articulo</div>
          <div>nombre</div>
          <div></div>
          <div>cantidad</div>
          <div>Precio</div>
          <div>Descripcion</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedProductos}
          render={(producto) => (
            <ProductoRow producto={producto} key={producto.id} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default ProductoTable;
