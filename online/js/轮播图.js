const img = document.querySelectorAll('.carousel');
let count = 0;
setInterval(() => {
    count++;
    count = count % 3;
    img[count].style.opacity = 0;
    img[(count + 1) % 3].style.opacity = 1;
}, 3000)



