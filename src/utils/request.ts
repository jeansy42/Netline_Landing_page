import axios from "axios";
import { BodyFormInterface } from "../interfaces/interfases";

const url =
  "http://relatorios.netlinetelecom.com.br:60060/api/cadastrar_lead/?";

export const registerLead = async (
  query: BodyFormInterface,
  body: BodyFormInterface
) => {
  const { cpf, email, nome, whatsapp } = query;
  const res = await axios.post(
    `${url}nome=${nome}&cpf=${cpf}&whatsapp=${whatsapp}&email=${email}&campanha=3&fonte_do_lead=Facebook&responsavel=384`,
    body
  );
  return res;
};
