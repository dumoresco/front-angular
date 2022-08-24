export interface Student {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  document: string;
  address?: {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
  };
}
