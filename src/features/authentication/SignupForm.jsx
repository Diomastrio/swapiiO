import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
import { useNavigate } from "react-router-dom";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  function onSubmit({ fullName, email, password, phone}) {
    signup(
      { fullName, email, password, phone, rol:'cliente' },
      {
        onSettled: () => reset(),
      }
    );
    navigate("/entrar");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Nombre completo" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "Este campo es obligatorio" })}
        />
      </FormRow>

      <FormRow label="Correo electrónico" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "Este campo es obligatorio",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Por favor ingresa un correo electrónico valido",
            },
          })}
        />
      </FormRow>

      <FormRow label="Teléfono" error={errors?.phone?.message}  >
        <Input
          type="text"
          id="phone"
          disabled={isLoading}
          pattern="^[0-9]*$" title="Por favor, ingrese solo números"
          {...register("phone", { 
            required: "Este campo es obligatorio" ,
            step:"any",
          minLength: {
            value: 10,
            message: "Telefono debe tener un mínimo de 10 caracteres",
          },})}
        />
      </FormRow>

      <FormRow
        label="Contraseña (8 caracteres min)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "Este campo es obligatorio",
            minLength: {
              value: 8,
              message: "Contraseña debe tener un mínimo de 8 caracteres",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Reingrese contraseña"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "Este campo es obligatorio",
            validate: (value) =>
              value === getValues().password ||
              "Las contraseñas deben coincidir ",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          Cancelar
        </Button>
        <Button disabled={isLoading}>Registrarse</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
