const nome = 'Rebeca'
const concatenação = 'Olá ' + nome + '!'

const template = `ola ${nome}!`

console.log(concatenação, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = s => s.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)