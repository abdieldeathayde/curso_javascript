
function somar (a, b) {
  if (a == 0) {
    return Promise.reject('Nao pode ser zero')
  }
  return Promise.resolve(a + b)
}

async function main () {
  try {
    const resultado = await somar(0, 4)
    console.log(resultado  * 2)
  } catch (error) {
    console.log(error)
  }
}


main()