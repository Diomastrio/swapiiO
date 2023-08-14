import { useState } from "react";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { AiOutlineSend } from "react-icons/ai";
// import { useAppContext } from "../context/appContext";

export default function MessageForm() {
  // const { supabase, username, country, auth } = useAppContext();
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    if (!message) return;

    setMessage("");

    // try {
    //   const { error } = await supabase.from("messages").insert([
    //     {
    //       text: message,
    //       username,
    //       country,
    //       is_authenticated: auth.user() ? true : false,
    //     },
    //   ]);

    //     if (error) {
    //       console.error(error.message);

    //       return;
    //     }
    //     console.log("Sucsessfully sent!");
    //   } catch (error) {
    //     console.log("error sending message:", error);
    //   } finally {
    //     setIsSending(false);
    //   }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormRow>
        <Input
          name="message"
          placeholder="Enter a message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          bg="white"
          border="none"
          autoFocus
          maxLength="500"
        />
        <Button
          // variant="outline"
          colorScheme="teal"
          aria-label="Send"
          fontSize="20px"
          icon={<AiOutlineSend />}
          type="submit"
          disabled={!message}
          isLoading={isSending}
        />
      </FormRow>
    </Form>
  );
}
