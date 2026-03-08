const bodyh = document.querySelector ('.body')
const btn = document.querySelector ('#button');
const pere = document.querySelector ('.perevert')
let playpos = {
    x: 140,
    y: 140,
    speed: 5
}
function redraw (){
    let el = document.querySelector ('.player')
    el.style.left = playpos.x + 'px'
    el.style.top = playpos.y + 'px'
}
document.addEventListener('keydown', (event) => {
    switch (event.code){
    case 'KeyW' : playpos.y -= playpos.speed; break;
    case 'KeyS' : playpos.y += playpos.speed; break;
    case 'KeyA' : playpos.x -= playpos.speed; break;
    case 'KeyD' : playpos.x += playpos.speed; break;

}
redraw();
});

let create1 = 0
btn.style.backgroundColor = "aqua";
btn.onclick = function (){
    console.log (btn)
    create1 += 1
    btn.style.backgroundColor = "blue";
    let create = document.createElement ("div");
    create .innerText = ('получилось')
    document.body.appendChild(create);
    create.id = 'lot' + create1;
    

}
const udal = document.querySelector('.udal');
udal.onclick = function(){
    console.log (create1)
    let ty = 'lot' + create1;
    let lu = document.getElementById(ty);
    btn.style.backgroundColor = ""
    lu.remove();
    console.log ('ЦВЕТ должен поменятся')
    create1 -= 1;
};
const night = document.querySelector ('.night')
let night_ = 0
night.onclick = function (){
    if (night_ === 0){
        night_ = 1;
        bodyh.style.backgroundColor = "#000000"
        night.innerText = ('ночь')
    }else{
        night_ = 0 
        bodyh.style.backgroundColor = ""
        night.innerText = ('день')
    }
    
}
let gg = setInterval(function () {
    console.log (playpos.x)
    console.log (playpos.y)
    console.log (`прив, ${night_}!`)
}, 4000);
pere.onclick = function (){
    bodyh.classList.toggle ('s')
}
let play = [
    {hp: 'ytyb'},
    {hp: 'rytp'}
]
play.forEach(town => {
console.log (`прив!${town.hp}`)
})
const numbers = [10,20,30]
const htmlList = numbers.map(town => `<li>цена: ${town} </li>`);

console.log (htmlList)
