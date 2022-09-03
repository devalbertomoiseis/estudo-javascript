let heroes = [ "superman", 'catwoman', 'iron man'];
const ages = [38, 19, 22, 88, 14];
const randomArray = ['Parkeer', 'Diana', 19, 18];

const joinHeroes = heroes.join(' - ')
const indexOf = ages.indexOf('38')
//concatenar
const moreHeroes = heroes.concat(['Homem Aranha', 'Mulher Gavião'])
const pushToHeroes = heroes.push('Cyclops', 'hulk') // adicionar
const popHeroes = heroes.pop();// remover ultimo item
console.log(joinHeroes)
console.log(indexOf)
console.log(heroes)
