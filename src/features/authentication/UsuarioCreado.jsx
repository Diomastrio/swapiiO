import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

function IniciaSession() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/entrar");
  }

  return <Button onClick={handleClick}>Ya tengo un Usuario</Button>;
}

export default IniciaSession;
