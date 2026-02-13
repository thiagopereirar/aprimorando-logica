# Classificador de Nível de Herói (Refatorado)

Solução desenvolvida para o desafio de lógica de programação através da Arquitetura em Camadas

O sistema calcula o saldo de partidas ranqueadas (vitórias - derrotas) e utiliza esse resultado para definir o nível do herói (Ferro, Bronze, Prata, etc.)

## Diferencial

O código não utiliza apenas valores estáticos. Foi implementada a leitura de dados via terminal, permitindo que o usuário escolha o personagem, vitórias e derrotas do personagem dinamicamente para testar diferentes cenários.

## Tecnologias

- JavaScript
- Node.js
- prompt-sync (pacote para entrada de dados)

## A Nova Estrutura

Este projeto foi dividido em responsabilidades claras

- database/ :Onde os dados dos personagens ficam
- repository/ :Camada que lida com a busca de dados
- service/ :Camada que lida com regras de negócios e validações
- controllers/ :Responsável pela interação direta com o usuário via terminal

## Regras de Negócios

O nível é decidido com base no saldo final

| Saldo  |  Nível |
| :--- | :--- |
| Menor que 10 |  Ferro |
| 11 a 20      |  Bronze |
| 21 a 50      |  Prata |
| 51 a 80      |  Ouro |
| 81 a 90      | Diamante |
| 91 a 100     | Lendário |
| Acima de 101 | Imortal |

## Como rodar o projeto

1. Baixe o projeto.
2. No terminal, instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o sistema através do script

```bash
npm start
```
