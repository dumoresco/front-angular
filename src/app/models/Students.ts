export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  cep: string;
  document: string;
  address: {
    cep: string;
    logradouro: string | null;
    complemento: string | null;
    bairro: string | null;
    localidade: string | null;
    uf: string;
  };
}
