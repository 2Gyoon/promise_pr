// 코드가 작성된 순서대로 동작하는 것 : 동기 방식(Synchronous)
// 처리가 지원되는 로직이 있는 경우 비동기 도입 -> A가 먼저 나오고 B가 나오는 환경을 보장

/*function a(callback) {
  setTimeout(() => {
    console.log('A')
    callback()
  }, 1000);
}
*/
function a(){
  // Promise: 약속의 객체
  return new Promise(function(resolve){
    setTimeout(function(){
      console.log('A')
      resolve('HELLO A')
    }, 1000);
  })
}
function b(){
  // Promise: 약속의 객체
  return new Promise(function(resolve){
    setTimeout(function(){
      console.log('B')
      resolve('HELLO B')
    }, 1000);
  })
}
function c(){
  // Promise: 약속의 객체
  return new Promise(function(resolve){
    setTimeout(function(){
      console.log('C')
      resolve('HELLO C')
    }, 1000);
  })
}
function d(){
  // Promise: 약속의 객체
  return new Promise(function(resolve){
    setTimeout(function(){
      console.log('D')
      resolve('HELLO D')
    }, 1000);
  })
}

async function test(){
  const h1 = await a()
  const h2 = await b()
  const h3 = await c()
  const h4 = await d()
  console.log('Done!!')
  console.log(h1, h2, h3, h4)
}
test()

