import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function ProductoTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="precio"
        options={[
          { value: "all", label: "Todos" },
          { value: "no-discount", label: "No descuento" },
          { value: "with-discount", label: "Con descuento" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Ordenar por nombre (A-Z)" },
          { value: "name-desc", label: "Ordenar por nombre (Z-A)" },
          { value: "regularPrice-asc", label: "Ordenar por precio (Mas bajo primero)" },
          { value: "regularPrice-desc", label: "Ordenar por precio (Mas alto primero)" },
        ]}
      />
    </TableOperations>
  );
}

export default ProductoTableOperations;
