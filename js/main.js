let button = document.querySelector('#button');
let elems = document.querySelectorAll('input');
let par = document.querySelector('#par');

button.addEventListener('click', function() {
    let a = +elems[0].value;
    let b = +elems[1].value;
    let c = +elems[2].value;

    let d = (b * b) - (4*a*c);

    if(d == 0) {
        let x = (-b)/(2*a);
        par.textContent = x;
    } else if(d > 0) {
        let x1 = ((-b + Math.sqrt(d))/(2*a));
        let x2 = ((-b - Math.sqrt(d))/(2*a));
        par.textContent = 'x1 = ' + x1 + ', ' + 'x2 = ' + x2;
    } else if(d < 0) {
        par.textContent = 'Коренів немає';
    }
});