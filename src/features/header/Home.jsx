import styled from "styled-components";
import home from "../../img/home.jpg";
import Button from "../../ui/Button";

const HomeSection = styled.section`
  background-color: #f7f7f7;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${home});
  background-size: cover;
  background-position: center;
`;

const HomeHeader = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  text-align: center;
`;

// const HomeButton = styled.button`
//   font-size: 1.5rem;
//   background-color: #333;
//   color: #fff;
//   padding: 1rem 2rem;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

function Home() {
  return (
    <HomeSection>
      <div>
        <HomeHeader>Bienvenidos a Swapii</HomeHeader>
        <Button variation="swapii">Aprende mas</Button>
      </div>
    </HomeSection>
  );
}

export default Home;
