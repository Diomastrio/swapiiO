import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import Row from "../ui/Row";
import Empty from "../ui/Empty";
import MsgsForm from "../features/messages/MsgsForm";
import { useMessages } from "../features/messages/useMessage";

function Mensajes() {
  const { isLoading, messages } = useMessages();
  if (isLoading) return <Spinner />;
  if (!messages.length) return <Empty resourceName="mensajes" />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Mensajes</Heading>
      </Row>
      <MsgsForm />
    </>
  );
}

export default Mensajes;
