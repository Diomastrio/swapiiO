import { useProductos } from "../productos/useProducto";
import ArtiCard from "./ArtiCard";

import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import { FaSearch } from "react-icons/fa";

import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import supabase from "../../services/supabase";

function ArticuloTable() {
  const { isLoading, productos } = useProductos();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]); // Add search results state variable
  if (isLoading) return <Spinner />;
  if (!productos.length) return <Empty resourceName="productos" />;

  // 1) FILTER
  const filterValue = searchParams.get("precio") || "all";

  let filteredProductos;
  if (filterValue === "all") filteredProductos = productos;
  if (filterValue === "no-discount")
    filteredProductos = productos.filter((producto) => producto.precio === 0);
  // if (filterValue === "with-discount")
  //   filteredProductos = productos.filter((producto) => producto.precio > 0);

  // 2) BUSQUEDA
  const handleSearch = async (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value === " ") {
      filteredProductos = productos;
      if (!productos.length) return <Empty resourceName="productos" />;
    } else {
      const { data, error } = await supabase
        .from("productos")
        .select("*")
        .ilike("name", `%${event.target.value}%`);
      console.log(data);
      if (error) {
        console.log(error);
      } else {
        setSearchResults(data);
      }
    }
  };

  if (searchResults.length > 0) {
    filteredProductos = searchResults;
  }

  // 3) ORDENAR
  const sortBy = searchParams.get("sortBy") || "name-asc";

  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  if (field === "name") {
    // eslint-disable-next-line no-unused-vars
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
        <Table.Header>
          <span style={{ margin: "0 10px 0 10px" }}>Busqueda</span>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            style={{
              border: "1px solid var(--color-grey-100)",
              backgroundColor: "var(--color-grey-0)",
              boxShadow: "var(--shadow-sm)",
              borderRadius: "var(--border-radius-sm)",
              padding: "0.4rem",
              display: "flex",
              gap: "0.4rem",
            }}
          />
          <span>
            <FaSearch style={{ margin: "2px 0 0 10px", fontSize: "20px" }} />
          </span>
        </Table.Header>

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
