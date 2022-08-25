let pessoa = {
  nome: 'Alberto',
  sobreNome: 'Moiseis',
  idade: 30,
  sexo: 'M',
  altura: 1.66,
  peso: 80
}
console.table(pessoa);

pessoa.aniversario = function(){
  pessoa.idade++;
}
pessoa.aniversario()
console.table(pessoa.idade);

pessoa.nomeCompleto = function(){
  return pessoa.nome + ' ' + pessoa.sobreNome;
}

pessoa.nomeCompleto()
console.table(pessoa.nomeCompleto());
