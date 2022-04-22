//show list on page

const foodItems = [
    'icecream',
    'brownies',
    'milkshakes',
    'burgers',
    'pizza',
    'pasta',
    'cakes',
    'fried chicken',
    'cola',
    'sandwich'
]



let showList = function (list) {

    let ul = document.getElementById('list');
    let li = '';


    for (let i = 0; i < list.length; i++) {
        li += `<li class='li'>${list[i]}</li>`;

    }
    ul.innerHTML = li;

}

showList(foodItems);

//  filter/search list
let input = document.getElementById('input');
input.addEventListener('keyup', (event) => {

    let userInput = input.value.toLowerCase();
    let filterItem = foodItems.filter(function (item) {
        item = item.toLowerCase();

        return item.indexOf(userInput) > -1;

    });
    showList(filterItem);

});

