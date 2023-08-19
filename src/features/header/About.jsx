import styled from "styled-components";
import work from "../../img/work.jpg";
const AboutSection = styled.section`
  background-color: #fff;
  display: table-row;
  padding: 5rem 4rem;
  justify-content: center;
  align-items: center;
  background-image: url(${work});
  background-size: cover;
  background-position: center;
`;

const AboutHeader = styled.h2`
  padding-left: 3rem;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const AboutParagraph = styled.p`
  padding-left: 3rem;
  font-size: 1.5rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const AboutList = styled.ul`
  padding-left: 3rem;
  list-style: none;
  margin-bottom: 2rem;
`;

const AboutListItem = styled.li`
  padding-left: 3rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

function About() {
  return (
    <AboutSection>
      <AboutHeader>Nosotros</AboutHeader>
      <AboutParagraph>Quienes somos nosotros</AboutParagraph>
      <AboutList>
        <AboutListItem>
          Somos un equipo de estudiantes de la utd que hemos creado esta pagina
          web como un e-commerce local dentro de la utd para compra y venta de
          productos
        </AboutListItem>
        <AboutListItem>
          Nuestra misión es brindar servicios de alta calidad a nuestros
          clientes.
        </AboutListItem>
        <AboutListItem>
          Creemos en la colaboración y la comunicación abierta.
        </AboutListItem>
      </AboutList>
    </AboutSection>
  );
}
export default About;
