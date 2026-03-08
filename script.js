const container = document.querySelector('.container')
let items = [
    {id: 112, name: "лом" },
    {id: 121, name: "консерва"},
    {id: 211, name: "меха"}

]
const render = function (){
const inventar = items.map(item => {
    return `
    <div class="it">
    <span >${item.name}</span>
    <button class='buttons' data-id="${item.id}"
     onclick="del('${item.id}')">выкенуть</button>
    </div>
    `;
}).join('');
container.innerHTML = inventar
};render();
function del(id){
    const item = items.find(i => i.id == id);
    console.log (`${item.name}`)
    items = items.filter(item => item.id != id)
    render();
}
