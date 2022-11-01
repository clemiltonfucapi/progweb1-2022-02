# Aula 2 - Selecionando elementos

<p> Apresentar a estrutura HTML </p>
<p> Apresentar métodos para interagir com os elementos de uma página </p>

## Métodos

### Estrutura HTML
```html
<html>
<head>
  <title>Document</title>
</head>
<body> <!-- tag -->
  <h1 id="titulo">Minha página</h1> <!-- id -->

  <section class="textos">
    <h2>Sobre mim</h2>
    <p>Texto sobre a pessoa aqui.</p>
  </section>

  <section class="textos"> <!-- classe -->
    <h2>Meus projetos</h2>
    <ul>
      <li>Projeto 1</li>
      <li>Projeto 2</li>
      <li>Projeto 3</li>
    </ul>
  </section>
</body>
</html>
```

### Selecionando os elementos de uma página
```js
document.getElementById('titulo'); // Procura o element pelo id
// <h1 id="titulo">Minha página</h1>
```
```js
document.getElementsByTagName('li'); // Procura o elemento pela tag
/*
[
 <li>Projeto 1</li>
 <li>Projeto 2</li>
 <li>Projeto 3</li>
]
*/
```
```js
document.getElementByClassName('texto'); // Procura o elemento pela classe

/*
[
 <section class="textos">
    <h2>Sobre mim</h2>
    <p>Texto sobre a pessoa aqui.</p>
  </section>

  <section class="textos"> <!-- classe -->
    <h2>Meus projetos</h2>
    <ul>
      <li>Projeto 1</li>
      <li>Projeto 2</li>
      <li>Projeto 3</li>
    </ul>
  </section>
]
*/
```
#### Outro exemplo
```html
<html>
<head>
  <title>Document</title>
</head>
<body>
  <div class="primeira-classe segunda-classe">
    <ul>
      <li class="opcao">opcao 1</li>
      <li class="opcao">opcao 2</li>
      <li class="opcao">opcao 3</li>
    </ul>
  </div>
</body>
</html>
```
```html
document.querySelectorAll('.primeira-classe .segunda-classe');
/*
[
 <div class="primeira-classe segunda-classe">
    <ul>
      <li class="opcao">opcao 1</li>
      <li class="opcao">opcao 2</li>
      <li class="opcao">opcao 3</li>
    </ul>
  </div>
]
*/
```
```html
document.querySelectorAll('li .opcao');
/*
[
    <li class="opcao">opcao 1</li>
    <li class="opcao">opcao 2</li>
    <li class="opcao">opcao 3</li>
]
*/
```

### Adicionar e deletar

| Método | Descrição  |
|--|--|
| document.createElement(element) | Cria um novo elemento HTML |
| document.removeChild(element) | Remove um elemento |
| document.appendChild(element) | Adiciona um elemento |
| document.replaceChild(new, old) | Substitui um elemento |