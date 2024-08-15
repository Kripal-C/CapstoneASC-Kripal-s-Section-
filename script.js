function colorBlack(){
    document.body.style.background="black";
    document.querySelectorAll('h1').forEach(e=>e.style.color="white");
    document.querySelectorAll('h2').forEach(e=>e.style.color="white");
    document.querySelectorAll('p').forEach(e=>e.style.color="white");
}
function colorWhite(){
    document.body.style.background="white";
    document.querySelectorAll('h1').forEach(e=>e.style.color="black");
    document.querySelectorAll('h2').forEach(e=>e.style.color="black");
    document.querySelectorAll('p').forEach(e=>e.style.color="black");
}
