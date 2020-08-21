# Desafio Suntech ReactJS

## Sobre o desafio

O desafio constitue de uma ferramenta web para registro de residências para construção de um mapa de calor de acordo com a quantidade de 
residentes por registro efetuado na ferramenta. A página inicial consiste de um registro de informações residenciais utilizando formulário, preenchendo dados
de latitude, longitude, CEP, quantidade de residentes e número da casa. Após preencher essas informações e forem válidas, será mostrado uma mensagem de sucesso,
caso contrário, mostrará uma mensagem de erro em tela. Uma segunda tela, chamada MAP, encontra-se o map de calor com as informações registradas na ferramenta, este 
mapa é construído com a API do Google Maps. 

As informações são validadas através do YUP, um construtor de esquemas JavaScript para análise e validação de valores. O formulário foi construído utilizando 
Unform, no qual pemite melhorar o desempenho dos componentes não controlados e React Hooks. Por fim, comocitado anteriormente, o mapa mostrado em tela pertence
ao Google Maps, gerada apenas com uma chave de validação. Antes de qualquer registro na base de dados, checa-se se o CEP é válido, essa validação acontece através
da API viacep.

Inicialmente, realiza uma análise do desafio, buscando reter todas as inforamções possível para escolher a melhor forma de desenvolvimento. Posteriormente, realizei
uma análise para estrutura do projeto (componentização, páginas, ContextAPI) e quais lib's utilizaria no projeto para atender todos os requisitos solicitados. 

Iniciei o desenvolvimento do componente Header, para ter acesso as duas páginas. Posteriormente inicie a página inicial com formulário, gerando 
componentização dos inputs, estelização da página e criação do botão para salvar os dados. Então foi iniciado a integração com API fake e VIACEP, além da criação 
do arquivo db.json que servirá como banco de dados fake, para que seja possível realizar o salvamento das informações do formulário, preenchendo a base de dados. 
Ao término da  tela inicial, inicia-se o desenvolvimento da segunda tela, realizando a integração do Google Maps API e consumo das informações ao renderizar o 
componente principal,  passando as informações das residências (devidamente ajustadas, compatíveis com o componente do Google Maps) para construir o mapa de calor, 
finalizando a tela com ajustes visuais. As bibliotecas e pacotes foram sendo adicionadas ao projeto de acordo com o momento do desenvolvimento, ou seja, adicionadas 
no projeto ao necessitar do seu uso.

Por ter utilizado esse tipo de mapa em outros projetos, utilizando o próprio pacote google-map-react, o desenvolvimento não foi demorado, a geração das marcações de
calor foram utilizadas de acordo com a quantidade de residentes, de acordo com o par de localização (latitude e longitude). O desenvolvimento foi simples e objetivo,
atendendo os pedidos exigidos no desafio, do mesmo modo, seguiu o layout desenvolvido. Cada marcação de calor foi gerada de acordo com o par de coordenadas 
multiplicado pela quantidade de residentes da localização, método utilizado baseado na documentação do Google Maps API.

O resultado final do projeto foi bastante satisfatório, ficou uma ferramenta com layout simples e objetivo, com apenas duas telas e bem descritivas, para utilizar
a ferramenta sem problemas. Os pontos positivos deste projeto foram: boas práticas de desenvolvimento encontradas no livro clean code, styled components para isolar
a estilização visual, typescript, requesições com axios, utilização dos hooks, estrutura de pastas com isolamento das suas respectivas funcionalidades. Como ponto
fraco, falta de testes A/B, melhorias no UX/UI.

# :arrow_forward: Execução da Aplicação

No terminal, navegue até o endereço no qual deseja salvar o projeto e clone utilizando a url abaixo

`git clone https://github.com/italo-lima/challenge-suntech-react`

Entre na pasta do projeto clonado

Instale as dependências do projeto

`yarn`

Crie um arquivo .env, baseado no .env-example.

Acesse o google cloud API (https://console.cloud.google.com/apis/), crie um projeto e gere uma chave para que seja possível utilizar os recursos do mapa. Após
criar essa chave, adicione-a no .env.

Execute a API e banco de dados fake

`yarn database`

Agorda execute a ferramenta

`yarn start`

Pronto, agora é possível acessar a ferramenta no browser.
