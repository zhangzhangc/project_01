

let a1color = document.querySelector('#a1color');
let a1 = document.querySelector('#a1');
let a1bg = document.querySelector('#a1bg');


let a2color = document.querySelector('#a2color');
let a2 = document.querySelector('#a2');
let a2bg = document.querySelector('#a2bg');


let a3color = document.querySelector('#a3color');
let a3 = document.querySelector('#a3');
let a3bg = document.querySelector('#a3bg');


let a4color = document.querySelector('#a4color');
let a4 = document.querySelector('#a4');
let a4bg = document.querySelector('#a4bg');


let a5color = document.querySelector('#a5color');
let a5 = document.querySelector('#a5');
let a5bg = document.querySelector('#a5bg');

let a6color = document.querySelector('#a6color');
let a6 = document.querySelector('#a6');
let a6bg = document.querySelector('#a6bg');

let a0 = document.querySelector('#a0');




a1color.addEventListener('mouseover', function () {
    a0.style.display = 'none';

    a1.style.display = 'block';
    a1bg.style.backgroundImage = 'url(./images/i13.gif)';

    a1color.addEventListener('mouseout', function () {
        a1.style.display = 'none';
        a1bg.style.backgroundImage = ' url()';
        a0.style.display = 'block';


    })
})

a2color.addEventListener('mouseover', function () {
    a0.style.display = 'none';

    a2.style.display = 'block';
    a2bg.style.backgroundImage = 'url(./images/i13.gif)';

    a2color.addEventListener('mouseout', function () {
        a2.style.display = 'none';
        a2bg.style.backgroundImage = ' url()';
        a0.style.display = 'block';



    })
})

a3color.addEventListener('mouseover', function () {
    a0.style.display = 'none';

    a3.style.display = 'block';
    a3bg.style.backgroundImage = 'url(./images/i13.gif)';

    a3color.addEventListener('mouseout', function () {
        a3.style.display = 'none';
        a3bg.style.backgroundImage = ' url()';
        a0.style.display = 'block';



    })
})

a4color.addEventListener('mouseover', function () {
    a0.style.display = 'none';

    a4.style.display = 'block';
    a4bg.style.backgroundImage = 'url(./images/i13.gif)';

    a4color.addEventListener('mouseout', function () {
        a4.style.display = 'none';
        a4bg.style.backgroundImage = ' url()';
        a0.style.display = 'block';



    })
})

a5color.addEventListener('mouseover', function () {
    a0.style.display = 'none';

    a5.style.display = 'block';
    a5bg.style.backgroundImage = 'url(./images/i13.gif)';
    a5.style.position = 'relative';
    a5.style.top = '5px'
    a5.style.left = '810px'
    a5color.addEventListener('mouseout', function () {
        a5.style.display = 'none';
        a5bg.style.backgroundImage = ' url()';
        a0.style.display = 'block';



    })
})
// console.log(a6);
a6color.addEventListener('mouseover', function () {
    a0.style.display = 'none';

    a6.style.display = 'block';
    a6bg.style.backgroundImage = 'url(./images/i13.gif)';
    a6.style.position = 'relative';
    a6.style.top = '5px'
    a6.style.left = '920px'


    a6color.addEventListener('mouseout', function () {
        a0.style.display = 'block';

        a6.style.display = 'none';
        a6bg.style.backgroundImage = ' url()';


    })
})
