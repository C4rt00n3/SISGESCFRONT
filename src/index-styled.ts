import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #D3E7F0;
    --primary-color: #007bff;
    --pink: #fe3c8d;
    --pink2: #fe8abb;
    --secondary-color: #6c757d;
    --success-color: #28a745;
    --danger-color: #dc3545;
    --warning-color: #FF8C00;
    --info-color: #17a2b8;
    --light-color: #f8f9fa;
    --dark-color: #343a40;
    --body-bg: #faf4e5;
    --black-total: #000;
    --body-color: #212529;
    --gray25: #c9c2b2;
    --gray-secundary: #ede7d9;
    --text-card: #323c47;
    --green-button: #74cecd;
    --green-sucess: #4CAF50;
    --green-text: #093434;
    --withe-color: #fff;
    --brand-color: #034F75;
    --gray-text: #7B809A;
    --gray-line:  #F0F2F5
  }

  body {
    background-color: var(--background);
    color: var(--body-color);
    margin: 0px;
    font-family: Arial, sans-serif;
    padding: 0;
  }

  *::-webkit-scrollbar {
    background-color: transparent; /* Cor de fundo */
    width: 10px; /* Largura da barra de rolagem */
  }

  *::-webkit-scrollbar-thumb {
    width: 8px; /* largura da thumb */
    height: 8px; /* altura da thumb */
    background-color: rgba(255, 255, 255, 0.3); /* cor da thumb */
    border-radius: 16px; /* raio da borda da thumb */
  }

  .btn-primary {
    background-color: var(--primary-color);
    color: var(--light-color);
    border: 1px solid var(--primary-color);
  }

  .btn-secondary {
    background-color: var(--secondary-color);
    color: var(--light-color);
    border: 1px solid var(--secondary-color);
  }

  /* Remover a borda ao clicar em qualquer input */
  input:focus {
      outline: none;
      border-color: initial; /* Define a cor da borda para a cor padrão do input */
  }

  select:focus {
    outline: none;
    border-color: initial;
  }
`;

export default GlobalStyle;
