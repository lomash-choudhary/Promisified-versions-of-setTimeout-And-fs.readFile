function timeout(time){
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  })
}

timeout(5000)
.then(() => {
  console.log("run after 5 seconds");
})