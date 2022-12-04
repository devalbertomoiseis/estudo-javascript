var frutas = [
  "Uva",
  "Morando",
  "Banana",
  "Melancia",
  "Abacate",
  "Abacaxi",
  "Manga",
];
/*
  pop -> Remove o ultimo item do array
  push -> Adicionar no final do array
  length -> Pega Total de Itens
*/
console.table(frutas);

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] == "Uva") {
    frutas[0] = "Carambola";
    console.log(frutas[i]);
  }
}
console.log(
  "============================================================================"
);

frutas.forEach(function (item, index, array) {
  console.log(
    "Posição: " +
      index +
      ". Item do Array: " +
      item +
      ". Total de Itens: " +
      array
  );
});
