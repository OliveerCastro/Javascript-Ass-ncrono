/***************************************
  Assíncrono: 
  Que não ocorre ou não se efetiva ao
  mesmo tempo.

  O JS roda de maneira síncrona.

  Promises:
  Obj. de processamento assíncrono.
  Inicialmente seu valor é desconhecido.
  Ela pode ser resolvida ou rejeitada.

  Pode ter 3 estados:
  1. Pendente
  2. Realizada
  3. Rejeitada
****************************************/

async function resolvePromise(){
  //estrutura
  const myPromises = new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('Resolvida');
    }, 3000);
});
                //Manipulação
const resolved = await myPromises
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));

  return resolved;
}
/*
  Funções assíncronas precisam das
  palavras chaves Async e await, e também
  retornam Promises
 */ 


/*
  Ultilizando try...catch
  let result; 
*/

/*
try{
  result = await myPromises
      .then((result) => result + ' passando pelo then')
      .then((result) => result + ' e agora acabou!')
      .catch((err) => console.log(err.message));
} catch(err){
  result = err.message;
}

return result;
*/
