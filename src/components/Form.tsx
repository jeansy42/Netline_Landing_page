import { Input, Button } from "@material-tailwind/react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { BodyFormInterface, FormInterface } from "../interfaces/interfases";
import {
  formatCPF,
  formatWhatsapp,
  removeCharacters,
  replaceWhiteSpace,
} from "../utils/auxiliar_functions";
import InvalidInputMessage from "./InvalidInputMessage";
import { registerLead } from "../utils/request";
import AnimatedButton from "./AnimatedButton";

function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormInterface>({
    defaultValues: { nome: "", cpf: "", whatsapp: "", email: "" },
  });
  const cpf = watch("cpf");
  const whatsapp = watch("whatsapp");

  const onSubmit: SubmitHandler<FormInterface> = async ({
    cpf,
    email,
    nome,
    whatsapp,
  }) => {
    const okCpf = cpf === "" ? null : removeCharacters(cpf);
    const okEmail = email === "" ? null : email;
    const nomeToQuery = replaceWhiteSpace(nome);
    const okWhatsApp = removeCharacters(whatsapp);

    const body: BodyFormInterface = {
      nome,
      whatsapp: okWhatsApp,
      email: okEmail,
      cpf: okCpf,
      campanha: "3",
      fonte_do_lead: "Facebook",
      responsavel: "384",
    };

    const query: BodyFormInterface = {
      cpf: okCpf,
      email: okEmail,
      nome: nomeToQuery,
      whatsapp: okWhatsApp,
    };
    /* const res = await registerLead(query, body); */
    console.log(query, body);
    reset();
  };

  return (
    <div className="flex flex-col gap-5 items-center px-2  ">
      <div id="submitBtn" className="mb-3  shadow-cusdarkBlue">
        <p className=" text-white font-bold text-xl md:text-3xl">
          Seu <span className="uppercase">mês chegou!</span>{" "}
        </p>
        <p className="text-white font-bold text-xl md:text-3xl">
          Navegue com a{" "}
          <span
            style={{ textShadow: "2px 2px 5px #4caf50" }}
            className="uppercase text-cusdarkBlue  "
          >
            Netline.
          </span>
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6  w-3/4 sm:w-3/4 md:w-5/6 md:self-start"
      >
        {/**Nome */}
        <Controller
          name="nome"
          control={control}
          rules={{
            required: { value: true, message: "Este campo é obrigatorio" },
            minLength: {
              value: 3,
              message: "Por favor, insira um nome com pelo menos 3 caracteres.",
            },
            maxLength: {
              value: 50,
              message:
                "Este campo aceita até 50 caracteres. Por favor, insira um nome mais curto",
            },
          }}
          render={({ field }) => (
            <Input
              variant="static"
              placeholder="Insira seu nome"
              size="lg"
              error={!!errors.nome}
              type="text"
              label="Nome*"
              crossOrigin={"true"}
              {...field}
              labelProps={{ className: "!text-white !text-base " }}
              className="!text-base text-white font-josefin "
            />
          )}
        />
        {errors.nome && <InvalidInputMessage message={errors.nome.message} />}

        {/**CPF */}
        <Controller
          name="cpf"
          control={control}
          rules={{
            pattern: {
              value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
              message: "Invalid CPF",
            },
          }}
          render={({ field }) => (
            <Input
              variant="static"
              placeholder="Insira seu CPF (opcional)"
              size="lg"
              error={!!errors.cpf}
              type="text"
              label="CPF"
              crossOrigin={"true"}
              {...field}
              onChange={(e) => {
                const value = e.target.value;
                field.onChange(formatCPF(value, cpf));
              }}
              className="!text-base text-white font-josefin"
              labelProps={{ className: "!text-white !text-base " }}
            />
          )}
        />
        {errors.cpf && <InvalidInputMessage message={errors.cpf.message} />}

        {/**WhatsApp */}
        <Controller
          name="whatsapp"
          control={control}
          rules={{
            required: { value: true, message: "Este campo é obrigatorio" },
            pattern: {
              value: /^\(\d{2}\)\d{4}-\d{4}$/,
              message: "Numero de WhatsApp invalido",
            },
          }}
          render={({ field }) => (
            <Input
              variant="static"
              placeholder="Insera seu numero de WhatsApp"
              size="lg"
              error={!!errors.whatsapp}
              type="text"
              label="Whatsapp*"
              crossOrigin={"true"}
              {...field}
              onChange={(e) => {
                const value = e.target.value;
                field.onChange(formatWhatsapp(value, whatsapp));
              }}
              labelProps={{ className: "!text-white !text-base " }}
              className="!text-base text-white font-josefin"
            />
          )}
        />
        {errors.whatsapp && (
          <InvalidInputMessage message={errors.whatsapp.message} />
        )}
        {/**Email */}
        <Controller
          name="email"
          control={control}
          rules={{
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Formato de email invalido!",
            },
          }}
          render={({ field }) => (
            <Input
              variant="static"
              placeholder="Insera seu email (opcional)"
              size="lg"
              error={!!errors.email}
              type="email"
              label="E-mail"
              crossOrigin={"true"}
              {...field}
              labelProps={{ className: "!text-white !text-base !font-josefin" }}
              className="!text-base text-white font-josefin"
            />
          )}
        />
        {errors.email && <InvalidInputMessage message={errors.email.message} />}

        <Button
          className="relative w-64 self-center bg-cusdarkBlue !overflow-visible hover:scale-105"
          type="submit"
        >
          Quero contratar
          <AnimatedButton />
        </Button>
      </form>
    </div>
  );
}

export default Form;
