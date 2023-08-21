import { useSugerencias } from "./useSugerencias";
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import Row from "../../ui/Row";
import Empty from "../../ui/Empty";
import styled from "styled-components";

const StyledTable = styled.div`
  display: table;
  width: 100%;
`;

const StyledTableRow = styled.div`
  display: table-row;
`;

const StyledTableHeader = styled.div`
  display: table-header-group;
`;

const StyledTableBody = styled.div`
  display: table-row-group;
`;

const StyledTableCell = styled.div`
  display: table-cell;
  padding: 10px;
  text-align: center;
  font-weight: ${(props) => (props.header ? "bold" : "normal")};
`;

function Sugerencias() {
  const { isLoading, error, sugerencias } = useSugerencias();
  if (isLoading) return <Spinner />;
  if (!sugerencias.length) return <Empty resourceName="sugerencias" />;
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {" "}
      <Row type="horizontal">
        <Heading as="h1">Sugerencias</Heading>
      </Row>
      <StyledTable>
        <StyledTableHeader>
          <StyledTableRow>
            <StyledTableCell header>Nombre</StyledTableCell>
            <StyledTableCell header>Correo</StyledTableCell>
            <StyledTableCell header>Mensaje</StyledTableCell>
          </StyledTableRow>
        </StyledTableHeader>
        <StyledTableBody>
          {sugerencias.map((sugerencia) => (
            <StyledTableRow key={sugerencia.id}>
              <StyledTableCell>{sugerencia.nombre}</StyledTableCell>
              <StyledTableCell>{sugerencia.correo}</StyledTableCell>
              <StyledTableCell>{sugerencia.mensaje}</StyledTableCell>
            </StyledTableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </>
  );
}

export default Sugerencias;
