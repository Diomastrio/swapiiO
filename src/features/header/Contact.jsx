import styled from "styled-components";
import contact from "../../img/contact.jpg";
import Button from "../../ui/Button";
const ContactSection = styled.section`
  background-color: #f7f7f7;
  padding: 5rem 0;
  justify-content: center;
  align-items: center;
  background-image: url(${contact});
  background-size: cover;
  background-position: center;
`;

const ContactHeader = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  padding-left: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 42rem;
  padding-left: 2rem;
`;

const ContactLabel = styled.label`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-left: 2rem;
  width: 12rem;
`;

const ContactInput = styled.input`
  font-size: 1.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #333;
  width: 40rem;
  background: linear-gradient(to bottom, #1c1b2c, #17494d);
`;

const ContactTextarea = styled.textarea`
  font-size: 1.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 40rem;
  background: linear-gradient(to bottom, #1c1b2c, #17494d);
`;

// const ContactButton = styled.button`
//   font-size: 1.5rem;
//   background-color: #333;
//   color: #fff;
//   padding: 1rem 2rem;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

function Contact() {
  return (
    <ContactSection>
      <ContactHeader>Alguna sugerencia?</ContactHeader>
      <ContactForm>
        <ContactLabel htmlFor="name">Nombre:</ContactLabel>
        <ContactInput type="text" id="name" />
        <ContactLabel htmlFor="email">Correo:</ContactLabel>
        <ContactInput type="email" id="email" />
        <ContactLabel htmlFor="message">Mensaje:</ContactLabel>
        <ContactTextarea id="message" rows="5" />
        <Button>Enviar</Button>
        {/* <ContactButton type="submit">Enviar</ContactButton> */}
      </ContactForm>
    </ContactSection>
  );
}

export default Contact;
