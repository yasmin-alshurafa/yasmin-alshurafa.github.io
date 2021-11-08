let pic1 = document.getElementById("pic1")
let pic2 = document.getElementById("pic2")
let sound = document.getElementById("sound")

pic1.addEventListener('click', () =>{
  sound.play();
})

pic2.addEventListener('click', () =>{
  sound.pause();
})
