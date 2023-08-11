import { useProductos } from "../cabins/useProducto";

import Spinner from "../../ui/Spinner";
import ArtiCard from "./ArtiCard";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

import { useSearchParams } from "react-router-dom";

function ArticuloTable() {
  const { isLoading, productos } = useProductos();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!productos.length) return <Empty resourceName="productos" />;

  // 1) FILTER
  const filterValue = searchParams.get("precio") || "all";

  let filteredProductos;
  if (filterValue === "all") filteredProductos = productos;
  // if (filterValue === "no-discount")
  //   filteredProductos = productos.filter((producto) => producto.precio === 0);
  // if (filterValue === "with-discount")
  //   filteredProductos = productos.filter((producto) => producto.precio > 0);

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "name-asc";

  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  if (field === "name") {
    const sortedProductos = filteredProductos.sort((a, b) => {
      const nameA = a[field].toUpperCase(); // convert to uppercase to compare
      const nameB = b[field].toUpperCase(); // convert to uppercase to compare
      if (nameA < nameB) {
        return -1 * modifier; // if A comes before B return -1 for desc order, 1 for asc order
      }
      if (nameA > nameB) {
        return 1 * modifier; // if A comes after B return 1 for desc order, -1 for asc order
      }
      return 0; // if A and B are the same return 0
    });
  }
  const sortedProductos = filteredProductos.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2fr 1fr 2fr 2fr">
        <Table.Header />
        <Table.Bodyi
          data={sortedProductos}
          render={(producto) => (
            <ArtiCard producto={producto} key={producto.id} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default ArticuloTable;
