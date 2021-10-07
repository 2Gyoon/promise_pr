function a(number){
  return new Promise((resolve, reject) => {
    if(number > 4){
      reject()
      return
    }
    setTimeout(() => {
      console.log('A')
      resolve()
    }, 1000);
  })
}
async function test(){
  /*
  a(8)
    .then(() => {
      console.log('Resolve!')
    })
    .catch(() => {
      console.log('Reject!')
    }).finally(() => {
      console.log('Done!')
    })
  */
  try{
    await a(8)
    console.log('Resolve!')
  }catch(error){
    console.log('Reject!')
  } finally{
    console.log('Done!')
  }

}
test()