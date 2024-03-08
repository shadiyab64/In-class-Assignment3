alert('Welcome to CS 140 Random Generator')


let targetNum = Math.floor(Math.random() * 100);
console.log(targetNum);

document.getElementById('generate').addEventListener('click', function() {
    alert('Just a second....');alert(targetNum);
});
