import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validateEmail = (email: string) => {
  return emailRegex.test(email);
};

/*
- Login fake
    - user_fake@maistodos.com.br
    - password_fake1234@!

- Regras de validação do formulário:
    - As validações precisam ser feitas ao desfocar do campo;
    - O botão de "Avançar" só deve estar habilitado caso os dois campos estejam validados
    - Ao avançar:
        - No caso dos campos e-mail ou senha estarem "errados" então apresentar o seguinte alert de erro: "Usuário ou senha inválida."
        - No caso de um "Login" com sucesso apresentar o seguinte alert de sucesso: "Login realizado com sucesso."
    - Validar se o e-mail é válido;
        - Caso não for válido apresentar a seguinte mensagem de erro: "E-mail inválido."
    - Validar senha de no mínimo 6 caracteres;
        - Caso não for válido apresentar a seguinte mensagem de erro: "Senha inválida."
*/

const Home = () => {
  return (
    <form className="flex flex-col min-h-screen max-w-screen-md m-auto justify-center gap-8">
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />
      <Button type="submit">Avançar</Button>
    </form>
  );
};

export default Home;
