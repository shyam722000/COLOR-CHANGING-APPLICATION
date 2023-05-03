
let colors = [ 'red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow','violet'];


let button = document.getElementById('button');

button.addEventListener('click', function(){
   
    let index = parseInt((Math.random()*colors.length)+1);

    let bg = document.getElementById('bg');

    bg.style.background = colors[index];
})