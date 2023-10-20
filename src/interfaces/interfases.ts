export interface FormInterface {
  nome: string;
  cpf: string;
  whatsapp: string;
  email: string;
}
export interface BodyFormInterface {
  nome: string;
  cpf: string | null;
  whatsapp: string;
  email: string | null;
  campanha?: "3";
  responsavel?: "384";
  fonte_do_lead?: "Facebook";
}
